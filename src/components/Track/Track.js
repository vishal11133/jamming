import React from 'react';
import './Track.module.css';

function Track({ track, onAdd }) {
    return (
        <div className='Track'>
            <h3>{track.name}</h3>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            <button onClick={() => onAdd(track)}>Add to Playlist</button>
        </div>
    )
}

export default Track;