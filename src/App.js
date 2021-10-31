import React from 'react';
import './App.css';
import Nav from './Nav'
import Suport from './Suport'
import Contribuitors from './Contribuitors';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chart from './components/Chart';
import Chart2 from './components/Chart2';
import Chart3 from './components/Chart3';
import Variable from './Variable';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contribuitors" component={Contribuitors} />
      <Route path="/suport" component={Suport} />
    </Switch>
    </div>
    </Router>
    );
}

const Home = () => {
  return (
    <Router>
      <div className="graphs">
          <Variable />
        <Switch>
          <Route path="/chart" exact component={Chart} />
          <Route path="/Chart2" exact component={Chart2} />
          <Route path="/Chart3" exact component={Chart3} />
        </Switch>
        </div>
    </Router>
  );
}


export default App;
