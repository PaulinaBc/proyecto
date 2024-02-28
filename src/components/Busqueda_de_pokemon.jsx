// busqueda_de_pokemon.jsx
import React, { useState } from 'react';
import pokemonData from './pokemon__Data';

function BusquedaDePokemon() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleSearch = () => {
        const result = pokemonData.find(pokemon => pokemon.name.toLowerCase() === searchTerm.toLowerCase());

        if (result) {
            setSearchResult(result);
        } else {
            setSearchResult(null);
        }
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
            <button className= "text-slate-200 rounded-full border border-teal-200 px-6 py-3"onClick={handleSearch}>Buscar</button>

            {searchResult && (
                <div>
                    <h2>{searchResult.name}</h2>
                    <p>Tipo: {searchResult.type}</p>
                    <p>Evoluciones: {searchResult.evolutions.join(', ')}</p>
                
                </div>
            )}
        </div>
    );
}

export default BusquedaDePokemon;
