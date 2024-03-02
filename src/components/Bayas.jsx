import React, { useState, useEffect } from 'react';
// Estructura de la respuesta esperada de la API para las bayas:
// {
//   "id": number,
//   "name": string,
//   "growth_time": number,
//   "max_harvest": number,
//   "natural_gift_power": number,
//   "size": number,
//   "smoothness": number,
// }
function Bayas() {
    const [bayasData, setBayasData] = useState([]);
    const [selectedBaya, setSelectedBaya] = useState(null);

    useEffect(() => {
        const fetchBayasData = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/berry/');
                const data = await response.json();
                setBayasData(data.results.slice(0, 4));
            } catch (error) {
                console.error('Error fetching bayas data:', error);
            }
        };

        fetchBayasData();
    }, []);

    const fetchDetailedBayaData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
           
            setSelectedBaya(data);
        } catch (error) {
            console.error('Error fetching detailed baya data:', error);
        }
    };

    const closeDetails = () => {
        setSelectedBaya(null);
    };

    return (
        <div className="bayas">
            <h2 className="text-white text-2xl font-semibold mb-4">Bayas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {bayasData.map((baya, index) => (
                    <div key={index} className="baya-card p-4 rounded-lg shadow-md">
                       
                        <img
                            src={`https://pokeapi.co/media/sprites/pokemon/other/official-artwork/${index + 1}.png`}
                            alt={baya.name}
                            className="baya-image w-20 h-20 object-cover mb-4"
                        />
                        <h3 className="text-white text-lg font-semibold mb-2">{baya.name}</h3>
                 
                        <button onClick={() => fetchDetailedBayaData(baya.url)}>
                            Ver Detalles
                        </button>
                    </div>
                ))}
            </div>
     
            {selectedBaya && (
                <div className="baya-details p-4 mt-4 rounded-lg border border-gray-300">
                    <h3 className="text-xl font-semibold mb-2">{selectedBaya.name}</h3>
                    <p>Growth Time: {selectedBaya.growth_time}</p>
                    <p>Max Harvest: {selectedBaya.max_harvest}</p>
                    <p>Natural Gift Power: {selectedBaya.natural_gift_power}</p>
                    <p>Size: {selectedBaya.size}</p>
                    <p>Smoothness: {selectedBaya.smoothness}</p>
                  
                    <button onClick={closeDetails}>Cerrar</button>
                </div>
            )}
        </div>
    );
}

export default Bayas;
