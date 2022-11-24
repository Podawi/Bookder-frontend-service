import React from "react"
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js'
import Welcome from './pages/Welcome/Welcome.js'

function App() {
  return (
<div className="App">
  <Switch>
  <Route path="/" exact><Welcome/></Route>
  <Route path="/home"><Home/></Route>
  </Switch>
</div>
  );
}

export default App;
