import React from 'react'
import Navbar from './components/Navbars/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
    {/* https://www.youtube.com/watch?v=I2UBjN5ER4s&t=2s */}
        <Router>
          <Navbar/>
          {/* <Switch>
            <Route path="/" exact />
          </Switch> */}
        </Router>
    </>
  );
}

export default App;
