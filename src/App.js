import React from 'react';
import './App.css';
import Nav from './Nav'
import Suport from './Suport'
import Contribuitors from './Contribuitors';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chart from './components/Chart';
import Chart2 from './components/Chart2';
import Chart3 from './components/Chart3';
import Button from './components/Button';
import Button2 from './components/Button2';
import Button3 from './components/Button3';

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
        <h1>
          escolha sua variável de interesse.
        </h1>
        <Button /> <Button2 /> <Button3 />
      <div id="myDIV">
      <Chart />
      </div>
      </div> <Chart2 /> <Chart3 />
    </div>
  );
}


export default App;
