import React from 'react';
import './App.css';
import Title from './components/title';
import InputButton from './components/inputButton';


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Title/>
        <InputButton label="A"/>
        <InputButton label="B"/>
        <InputButton label="C"/>
      </header>
    </div>
  );
}

export default App;
