import axios from 'axios';
import React, {useState} from 'react';
import {Button} from '@mui/material';

function AddArtist(refreshArtists) {

    const [artist, setArtist] = useState('');
    const [painting, setPainting] = useState('');
    const [age, setAge] = useState('');

    const enterArtist = (event) => {
        setArtist(event.target.value);
    }

    const enterPainting = (event) => {
        setPainting(event.target.value);
    }

    const enterAge = (event) => {
        setAge(event.target.value);
    }

    const checkArtist = () => {
        if (artist === '' || painting === '' || age === '') {
            alert('Please fill out all info');
        } else {
            axios.post('/artist', {
                name: artist,
                painting: painting,
                age: age
            }).then(response => {
                setArtist('');
                setPainting('');
                setAge('');
                refreshArtists.refreshArtists();
            })
        }
    }

    return (
        <div>
            <input value={artist} onChange={enterArtist} type='text' placeholder='Artist Name...'/>
            <input value={painting} onChange={enterPainting} type='text' placeholder='Painting Name...'/>
            <input value={age} onChange={enterAge} type='number' placeholder='Age of Painting (years)...'/>
            <div>
                <Button variant="contained" onClick={checkArtist}>Submit</Button>
            </div>
        </div>
        
    );
}

export default AddArtist;
