import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home } from './Components/Home/Home'
import { Projects } from './Components/Projects/Projects'
import { Poetry } from './Components/Poetry/Poetry'
import { About } from './Components/About/About'
import { NoMatch } from './Components/NoMatch'

import { Insite } from './Components/ProjectPages/Insite'
import { TalkieTalkie } from './Components/ProjectPages/TalkieTalkie'
import { BlazeVR } from './Components/ProjectPages/BlazeVR'
import { DripDrop } from './Components/ProjectPages/DripDrop'
import { StepStore } from './Components/ProjectPages/StepStore'
import { PeerBoost } from './Components/ProjectPages/PeerBoost'

function App() {
  return (
    <>
        <Router>
          <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/projects" component={Projects}></Route>

              <Route exact path="/insite" component={Insite}></Route>
              <Route exact path="/talkietalkie" component={TalkieTalkie}></Route>
              <Route exact path="/blazevr" component={BlazeVR}></Route>
              <Route exact path="/dripdrop" component={DripDrop}></Route>
              <Route exact path="/stepstore" component={StepStore}></Route>
              <Route exact path="/peerboost" component={PeerBoost}></Route>

            <Route component={NoMatch}></Route>
          </Switch>
        </Router>
    </>
  );
}

export default App;
