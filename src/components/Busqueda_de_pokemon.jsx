import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

function BusquedaDePokemon() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            if (searchTerm) {
                try {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}/`);
                    const data = await response.json();

                    // Obtener evoluciones
                    const evolutionResponse = await fetch(data.species.url);
                    const evolutionData = await evolutionResponse.json();
                    const evolutionChainResponse = await fetch(evolutionData.evolution_chain.url);
                    const evolutionChainData = await evolutionChainResponse.json();

                    const evolutions = parseEvolutions(evolutionChainData);

                    setSearchResult({
                        name: capitalizeFirstLetter(data.name),
                        type: data.types.map(type => type.type.name).join(', '),
                        evolutions: evolutions
                    });
                } catch (error) {
                    console.error('Error fetching Pokemon data:', error);
                    setSearchResult(null);
                }
            } else {
                setSearchResult(null);
            }
        };

        fetchPokemonData();
    }, [searchTerm]);

    const handleSearch = () => {
        setSearchResult(null);
    };

    const parseEvolutions = (evolutionChainData) => {
        const evolutions = [];
        let currentEvolution = evolutionChainData.chain;

        while (currentEvolution) {
            evolutions.push({
                name: capitalizeFirstLetter(currentEvolution.species.name),
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentEvolution.species.url.split("/")[6]}.png`
                // Modifica la URL de la imagen según tus necesidades y la estructura de la API
            });

            currentEvolution = currentEvolution.evolves_to[0];
        }

        return evolutions;
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div>
            <SearchBar onSearch={setSearchTerm} />

            {searchResult && (
                <div className="mt-4 p-4 rounded-full border border-y-green-200 text-center">
                    <h2 className="text-2xl font-bold text-zinc-200/75 mb-4">{searchResult.name}</h2>
                    <p className="font-bold text-xl mb-2 underline decoration-1">Tipo: {searchResult.type}</p>

                    {searchResult.evolutions.length > 0 && (
                        <div className="flex flex-wrap justify-center">
                            {searchResult.evolutions.map((evolution, index) => (
                                <div key={index} className="mb-4 mr-4">
                                    <p>{evolution.name}</p>
                                    <img src={evolution.image} alt={evolution.name} className="w-20 h-20 mt-2" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default BusquedaDePokemon;
