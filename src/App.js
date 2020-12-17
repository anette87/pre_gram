import React, {useState} from 'react';
import './App.css';
import Gallery from './containers/Gallery'
import Header from './containers/Header'
import UserInfo from './containers/UserInfo';

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
      <UserInfo />  
      {galleries}
      <button onClick={onAddGallery}> Add Row </button>
    </div>
    
  );
}

export default App;
