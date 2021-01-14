import React, {useState} from 'react';
import './App.css';
import Gallery from './containers/Gallery'
import Header from './containers/Header'
import UserInfo from './containers/UserInfo';
import {Switch, Route} from "react-router-dom";
import Calendar  from "./containers/Calendar";

function App() {

  const [numGalleries, setnumGalleries] = useState(0)

  const galleries = [];

  for (var i = 0; i < numGalleries; i += 1) {
    galleries.push(<Gallery id={i} />);
  };

  const onAddGallery = () => {
    setnumGalleries(numGalleries + 1)    
  }

  return (
    <div className="App">
      <Header />
        <Switch>
          <div>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/userinfo" component={UserInfo}/>
          </div>
        </Switch> 
      {galleries}
      <button onClick={onAddGallery}> Add Row </button>
    </div>
    
  );
}

export default App;
