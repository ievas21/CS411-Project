import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';



function App() {


  const [thoughts, setThoughts] = useState('');
  const handleThoughtsChange = (event) => {
    setThoughts(event.target.value);
  };

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Thoughts from today to generate a Spotify playlist: </h1>
        <textarea
          value = {thoughts}
          onChange = {handleThoughtsChange}
          placeholder = "Enter your thoughts here..."
          rows = {4}
          cols = {50}
        />
      </header>
    </div>
  );
}

export default App;
