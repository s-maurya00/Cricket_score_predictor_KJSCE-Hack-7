var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hack7"
});

con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  $result = con.query("SELECT * FROM `match_data_3` WHERE COL 5 = 'australia' OR COL 7 = 'australia'", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});