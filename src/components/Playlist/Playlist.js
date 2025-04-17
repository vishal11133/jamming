import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.module.css';

function Playlist({ name, tracks, onRemove }) {
    return (
      <div className="Playlist">
        <h2>{name}</h2>
        <Tracklist tracks={tracks} onRemove={onRemove} />
        <button>Save to Spotify</button>
      </div>
    );
  }
  
export default Playlist;