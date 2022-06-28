import React from 'react';
import axios from 'axios';
import {Button} from '@mui/material';

function ArtistListItem({ refreshArtists, artist }) {

    const deleteArtist = () => {
        axios({
        method: 'DELETE',
        url: `/artist/${artist.id}`
        })
        .then((response) => { 
            refreshArtists();
        })
        .catch((error) => {
            console.log('error on delete: ', error)
        })
    };

    return (
        <tr>
            <td>{artist.name}</td>
            <td>{artist.painting}</td>
            <td>{artist.age} years old</td>
            <td>
                <Button variant="outlined" onClick={deleteArtist}>Delete</Button>
            </td>
        </tr>
    );
}

export default ArtistListItem;
