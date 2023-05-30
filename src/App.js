import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowList from './Components/ShowList';
import ShowSummary from './Components/ShowSummary';
import './App.css';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const res = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await res.json();
      setShows(data);
    };
    fetchShows();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element = {<ShowList shows={shows} />}/>
          <Route path="/show/:id" element={<ShowSummary/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
