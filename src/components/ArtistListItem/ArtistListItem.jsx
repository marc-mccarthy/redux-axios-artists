import React from 'react';
import axios from 'axios';

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
            <td>{artist.age}</td>
            <td>
                <button onClick={deleteArtist}>DELETE</button>
            </td>
        </tr>
    );
}

export default ArtistListItem;
