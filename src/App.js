import React from 'react';
import './App.css';
import Nav from './Nav'
import Suport from './Suport'
import Contribuitors from './Contribuitors';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chart from './components/Chart';
import Chart2 from './components/Chart2';
import Chart3 from './components/Chart3';

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
    <div>
       <div>
         <form>
           <input type="radio" id="v" value="volts"></input>
           <input type="radio" id="a" value="ampere"></input>
           <input type="radio" id="c" value="temp"></input>
         </form>
         </div> <Chart /> <Chart2 /> <Chart3 />
    </div>
  );
}


export default App;
