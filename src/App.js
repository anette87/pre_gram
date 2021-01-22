import React from 'react';
import './App.css';
import Header from './containers/Header'
import {Switch, Route} from "react-router-dom";
import Calendar  from "./containers/Calendar";
import FeedPreview from "./containers/FeedPreview";
import Home from "./containers/Home";


function App() {

  return (
      <div className="App">
        <Header />
          <Switch>
            <div>
              <Route exact path="/calendar" component={Calendar}/>
              <Route exact path="/feedpreview" component={FeedPreview}/>
              <Route exact path="/" component={Home}/>
            </div>
          </Switch> 
      </div>
      
    );
}

export default App;
