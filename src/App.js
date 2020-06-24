import React from 'react';
import './App.css';
import Grid from './Components/Grid';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Conway's Game of Life</h1>
      </div>
      <Grid />
    </div>
  );
}

export default App;
