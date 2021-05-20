import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "./App.css";

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';


function App() {  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;