import React from 'react';
import './App.css';
import SomeText from './components/someText';
import SomeElement from './components/someElement';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <SomeText />
        <SomeElement name="Rosie" />
      </header>
    </div>
  );
}

export default App;
