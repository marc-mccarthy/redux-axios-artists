import React from 'react';
import ArtistList from '../ArtistList/ArtistList';


function AllArtists({ refreshArtists, artists }) {

    return (
        <div>
            <ArtistList refreshArtists={refreshArtists} artistList={artists}/>
        </div>
    );
}

export default AllArtists;
