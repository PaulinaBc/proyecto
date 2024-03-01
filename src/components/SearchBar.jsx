
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div>
            <input
                style={{ width: '500px', margin: '30px', color: 'white', marginLeft: '10px' }}
                className='border border-teal-400 bg-transparent placeholder-white  '
                type="text"
                placeholder="Buscar Pokémon"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="text-slate-200 rounded-full border border-teal-200 px-6 py-3" onClick={handleSearch}>
                Buscar
            </button>
        </div>
    );
}

export default SearchBar;

