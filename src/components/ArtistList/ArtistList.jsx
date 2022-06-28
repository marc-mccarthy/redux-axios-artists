import React from 'react';
import ArtistListItem from '../ArtistListItem/ArtistListItem';

function ArtistList({ refreshArtists, artistList }) {

    return (
        <div>
            <table>
                <tr>
                    <th>Artist</th>
                    <th>Painting</th>
                    <th>Age of Painting</th>
                    <th>Remove</th>
                </tr>
                <tbody>
                    {artistList.map((artist) => {return (<ArtistListItem key={artist.id} refreshArtists={refreshArtists} artist={artist}/>);})}
                </tbody>
            </table>
        </div>
    );
}

export default ArtistList;
