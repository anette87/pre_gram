import React from 'react';
import './App.css';
import Header from './containers/Header'
import {Switch, Route} from "react-router-dom";
import Calendar  from "./containers/Calendar";
import FeedPreview from "./containers/FeedPreview";

function App() {

  return (
      <div className="App">
        <Header />
          <Switch>
            <div>
              <Route path="/calendar" component={Calendar}/>
              <Route path="/feed" component={FeedPreview}/>
            </div>
          </Switch> 
      </div>
      
    );
}

export default App;
