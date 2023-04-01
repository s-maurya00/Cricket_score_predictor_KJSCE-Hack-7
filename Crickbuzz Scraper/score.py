import requests
from bs4 import BeautifulSoup

def get_match(url):
  # fetch the url from the user-entered url and parse the received html
  Scorecard = requests.get(url).text
  Soup = BeautifulSoup(Scorecard,"html.parser")

  # Finding the div containing the details of inning_1
  Inning1 = Soup.find_all('div',id="innings_1")[0]

  Inning1_batting = Inning1.find_all('div',class_="cb-col cb-col-100 cb-ltst-wgt-hdr")[0]
  Inning1_bowling = Inning1.find_all('div',class_="cb-col cb-col-100 cb-ltst-wgt-hdr")[1]
  
  Inning1_batting = Inning1_batting.find_all('div',class_="cb-col cb-col-100 cb-scrd-itms")
  Inning1_bowling = Inning1_bowling.find_all('div',class_="cb-col cb-col-100 cb-scrd-itms ")

  Inning1_batting_info = []

  Score = Inning1.find_all('span',class_="pull-right")
  score = Score[0].get_text()

  # Finding the the runs number in the score variable
  if '-' in score:
    score = score[:score.find('-')]

  team_name = Inning1.find('span').get_text()
  if 'Innings' in team_name:
    team_name = team_name[:team_name.find(' Innings')]

  for b in Inning1_batting:
    batsman = {}
    name = b.find('a',class_="cb-text-link")

    if name:
      batsman['name'] = str(name.get_text()).strip()

      if '(' in batsman['name']:
        batsman['name'] = batsman['name'][:batsman['name'].find('(')].strip()

    out_by = b.find('span',class_="text-gray")

    if out_by:
      batsman['out_by'] = str(out_by.get_text()).strip()
    runs = b.find('div',class_="cb-col cb-col-8 text-right text-bold")

    if runs:
      batsman['runs'] = str(runs.get_text()).strip()
    all_others = b.find_all('div',class_="cb-col cb-col-8 text-right")

    if len(all_others)>0:
      batsman['balls'] = str(all_others[0].get_text()).strip()
      batsman['fours'] = str(all_others[1].get_text()).strip()
      batsman['sixes'] = str(all_others[2].get_text()).strip()
      batsman['sr'] = str(all_others[3].get_text()).strip()

    if len(batsman) > 0:
      Inning1_batting_info.append(batsman)

  for b in Inning1_bowling:
    bowler = {}
    name = b.find('a',class_="cb-text-link")

    if name:
      bowler['name'] = str(name.get_text()).strip()

      if '(' in bowler['name']:
        bowler['name'] = bowler['name'][:bowler['name'].find('(')].strip()


print("Enter crickbuzz score-card url for scraping:")
print("Eg.: \"https://www.cricbuzz.com/live-cricket-scorecard/60035/ind-vs-aus-1st-odi-australia-tour-of-india-2023\"")
url = input("Enter:\t")

get_match(url)

print("Done")
