import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import { Projects } from './Components/Projects/Projects'
import { Tutoring } from './Components/Tutoring/Tutoring'
import { RealEstate } from './Components/RealEstate/RealEstate'
import { NoMatch } from './Components/NoMatch'

// FOR SSL STUFF
const fs = require('fs')
const https = require('https');
const express = require('express');

const httpsOptions = {
  cert: fs.readFileSync('./ssl/www_yasoobrasheed_com.crt'),
  ca: fs.readFileSync('./ssl/www_yasoobrasheed_com.ca-bundle'),
  key: fs.readFileSync('./ssl/www_yasoobrasheed_com.key')
}

function App() {
  return (
    <React.Fragment>
        <Router>
          <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/projects" component={Projects}></Route>
              <Route exact path="/tutoring" component={Tutoring}></Route>
              <Route exact path="/realestate" component={RealEstate}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
