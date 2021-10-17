import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/home';
import Header from './components/header';
import PureComp from './components/pureComp';
import PureCompF from './components/pureCompF';
import Adjel from './components/adjel';
import Profile from './components/profile';

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <div className="container">
          <Switch>
              <Route path="/profile" component={Profile} />
              <Route path="/adjel" component={Adjel} />
              <Route path="/purecompf" component={PureCompF}/>
              <Route path="/purecomp" component={PureComp}/>
              <Route path="/" component={Home}/>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
