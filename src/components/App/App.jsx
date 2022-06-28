// App.js
import React, {useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {Route, HashRouter as Router} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Nav from '../Nav/Nav';
import AllArtists from '../AllArtists/AllArtists';
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
            dispatch({type: 'SEND_ARTISTS', payload: response.data});
        }).catch((error) => {
            console.log('error on GET', error);
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Famous Artists</h1>
                <Nav/>
            </header>
            <Router>
                <Route path="/">
                </Route>
                <Route path="/addArtist">
                    <AddArtist refreshArtists={refreshArtists} artists={artists}/>
                </Route>
                <Route path="/allArtists">
                    <AllArtists refreshArtists={refreshArtists} artists={artists}/>
                </Route>
            </Router>
        </div>
    );
}

export default App;
