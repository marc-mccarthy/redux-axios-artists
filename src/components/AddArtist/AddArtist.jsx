import axios from 'axios';
import React, {useState} from 'react';

function AddArtist() {

    const [artist, setArtist] = useState('');

    const enterArtist = (event) => {
        setArtist(event.target.value);
        console.log(artist);
    }

    const checkArtist = () => {
        if (artist === '') {
            alert('Please enter an artist');
        } else {
            axios.post('/artist', {name: artist}).then(response => {
                console.log(response);
                setArtist('');
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
