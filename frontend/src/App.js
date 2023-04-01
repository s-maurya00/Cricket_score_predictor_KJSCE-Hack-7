import React from 'react';
import './App.css';
// import Home;
import Home from "./pages";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


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
