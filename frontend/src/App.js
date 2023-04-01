import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/analyze' element={<AnalyzePlayers />} exact />
        <Route path='/predict' element={<PredictWin />} exact />
      </Routes>    
    </Router>
  );
}

export default App;
