import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import { Projects } from './Components/Projects/Projects'
import { Tutoring } from './Components/Tutoring/Tutoring'
import { RealEstate } from './Components/RealEstate/RealEstate'
import { NoMatch } from './Components/NoMatch'

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
