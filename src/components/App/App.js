import React, { useState } from 'react';
import SearcBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.module.css';

function App() {

    const [searchResults, setSearchResults] = useState();
    const [playlistTracks, setPlaylistTracks] = useState([]);

    return (
        <div className='App'>
            <h1>Jamming</h1>
            <SearcBar />
            <SearchResults />
            <Playlist />
        </div>
    );
}

export default App;