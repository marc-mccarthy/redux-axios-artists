// App.js
import React, {useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {Route, HashRouter as Router} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Nav from '../Nav/Nav';
import AllArtists from '../AllArtists/AllArtists';
import AddArtist from '../AddArtist/AddArtist';
import Box from '@mui/material/Box';

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
            <div id="boxDiv">
                <Box display="flex" justifyContent="center" alignItems="center" margin="20px" sx={{ borderRadius: 5, width: 325, height: 325, backgroundColor: 'green'}}>
                    <img src="https://yt3.ggpht.com/ytc/AKedOLSRSl8xsTNuQU_f6sg3bHI19gZYUSqLu2I78S90MQ=s900-c-k-c0x00ffffff-no-rj"/>
                </Box>
            </div>
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
