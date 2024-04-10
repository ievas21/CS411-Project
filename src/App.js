import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';


function IntroPage() {
  const [redirectToGenerator, setRedirectToGenerator] = useState(false);


  const handleGetStartedClick = () => {
    setRedirectToGenerator(true);
  };


  return (
    <div>
      <h1>Welcome to the Personalized Playlist App</h1>
      <p>This app generates a personalized Spotify playlist based on your thoughts from today.</p>
      <Link to="/input" onClick={handleGetStartedClick}>Get Started</Link>
      {redirectToGenerator && <Navigate to="/input" />}
    </div>
  );
}






function UserInput() {
  const [redirectToPlaylist, setRedirectToPlaylist] = useState(false);
  const [thoughts, setThoughts] = useState('');


  const handleThoughtsChange = (event) => {
    setThoughts(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setRedirectToPlaylist(true);
  };


  return (
    <div>
      <h1>Enter Your Thoughts</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={thoughts}
          onChange={handleThoughtsChange}
          placeholder="Enter thoughts here..."
          rows={4}
          cols={0}
        />
        <button type="submit">Enter</button>
      </form>
      {redirectToPlaylist && <Navigate to="/playlist" />}
    </div>
  );
}






function PlaylistPage() {


  return (
    <div>
      <h1>Your Personalized Playlist: </h1>
     
    </div>
  );
}




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/input" element={<UserInput />} />
        <Route path="/playlist" element={<PlaylistPage />} />
      </Routes>
    </Router>
  );
}


export default App;


