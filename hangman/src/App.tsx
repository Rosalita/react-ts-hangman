import React from 'react';
import './App.css';
import Title from './components/title';
import CharSelect from './components/charSelect';


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Title/>
        <CharSelect/>
        
      </header>
    </div>
  );
}

export default App;
