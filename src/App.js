import React from 'react';
import './App.css';
import CharacterCounter from './Characters'; // ✅ Add this line

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React</h1>
        <p>This is your styled app!</p>

        {/* ✅ Use CharacterCounter component here */}
        <CharacterCounter />
      </header>
    </div>
  );
}

export default App;
