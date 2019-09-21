import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Home from './Posts/index';
import Article from './Posts/Article'


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/Article/:id" component={Article}/>
      </Router>
    </div>
  );
}

export default App;
