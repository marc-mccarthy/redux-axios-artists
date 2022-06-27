// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ArtistList from '../ArtistList/ArtistList';
import {useSelector, useDispatch} from 'react-redux';
import AddArtist from '../AddArtist/AddArtist';

function App() {

    const dispatch = useDispatch();
    const artists = useSelector(store => store.artistReducer)
        
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
        }).then(response => {
            // response.data is the array of artists
            console.log(response.data);
            // TODO - update this to dispatch to Redux
            dispatch({type: 'SEND_ARTISTS', payload: response.data});
        }).catch((error) => {
            console.log('error on GET', error);
        });
    };

    return (
        <div className="App">
        <header className="App-header">
            <h1 className="App-title">Famous Artists</h1>
        </header>
        <p>Welcome to our collection of amazing artists!</p>
        <AddArtist/>
        <ArtistList refreshArtists={refreshArtists} artistList={artists} />
        </div>
    );

}

export default App;
