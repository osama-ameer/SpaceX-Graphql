import React, {useState} from 'react';
import Launch from './components/Launch';
import './App.css'
import LaunchDetails from './components/LaunchDetails';



function App() {
  
  const [id, setId] = React.useState(42);
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);
  return (
    <div className="App">
      <Launch handleIdChange={handleIdChange}/>
      <LaunchDetails id={id} />

    </div>
  );
}

export default App;
