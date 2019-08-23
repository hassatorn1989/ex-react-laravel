import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Link } from "react-router-dom";
import Login from './component/Login';
import Home from './component/Home';
import Backend from './layouts/Backend';
import Page1 from './component/Page1';
import Page2 from './component/Page2';

function App() {
  return (
    <div className="container">
      <Switch>
        <Login exact path="/" component={Login} />
        <Backend path="/home" component={Home} />
        <Backend path="/page1" component={Page1} />
        <Backend path="/page2" component={Page2} />
      </Switch>
    </div>
  );
}

export default App;
