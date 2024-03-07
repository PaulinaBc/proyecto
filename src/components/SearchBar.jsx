
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div>
            <input
                className='w-1/4 m-30px ml-3.5 border border-rose-400 bg-transparent placeholder-black bg-white h-8 rounded-full px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent'
                type="text"
                placeholder="Buscar Pokémon"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="text-black rounded-full border border-rose-400 px-6 py-3 m-4 bg-white " onClick={handleSearch}>
                Buscar
            </button>
        </div>
    );
}

export default SearchBar;

