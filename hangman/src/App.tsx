import React from 'react';
import './App.css';
import Title from './components/title';
import GameContainer from './components/gameContainer';


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Title/>
        <GameContainer/>
    
        
      </header>
    </div>
  );
}

export default App;
