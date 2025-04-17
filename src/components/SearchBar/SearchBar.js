import React from 'react';
import './SearchBar.module.css';

function SearchBar() {
    return (
        <div className='SearchBar'>
            <input type='text' placeholder='Search for songs, albums, or artists' />
            <button>Search</button>
        </div>
    );
}

export default SearchBar;