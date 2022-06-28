import axios from 'axios';
import React, {useState} from 'react';

function AddArtist(refreshArtists) {

    const [artist, setArtist] = useState('');

    const enterArtist = (event) => {
        setArtist(event.target.value);
    }

    const checkArtist = () => {
        if (artist === '') {
            alert('Please enter an artist');
        } else {
            axios.post('/artist', {name: artist}).then(response => {
                setArtist('');
                refreshArtists.refreshArtists();
            })
        }
    }

    return (
        <div>
            <input value={artist} onChange={enterArtist} type='text' placeholder='Enter Artist Name...'/>
            <button onClick={checkArtist}>Submit</button>
        </div>
    );
}

export default AddArtist;
