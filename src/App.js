import React from 'react';
import './App.css';
import HomeContainer from './Containers/HomeContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={HomeContainer} />
      </div>
    </Router>
  );
}

export default App;
