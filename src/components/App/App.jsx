// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ArtistList from '../ArtistList/ArtistList';

function App() {
  // TODO - remove this local state and replace with Redux state 
  let [artists, setArtists] = useState([]);
    
  // get Artists data from server on load
  useEffect(() => {
    console.log('in useEffect');
    refreshArtists();
  }, []);

  // Keep this method in App, as it will be used by multiple components
  // You want to keep the code DRY (Don't Repeat Yourself!)
  // We'll look at another way to handle this with next week's topic: Sagas.
  const refreshArtists = () => {
    axios({
      method: 'GET',
      url: '/artist'
    })
      .then((response) => {
        // response.data is the array of artists
        console.log(response.data);
        // TODO - update this to dispatch to Redux
        setArtists(response.data)
      })
      .catch((error) => {
        console.log('error on GET', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Famous Artists</h1>
      </header>
      <p>Welcome to our collection of amazing artists!</p>
      <ArtistList refreshArtists={refreshArtists} artistList={artists} />
    </div>
  );

}

export default App;
