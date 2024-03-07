import React, { useState, useEffect } from 'react';
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {bayasData.map((baya, index) => (
                    <div key={index} className="baya-card p-4 rounded-lg shadow-md ">
                       
                        <img
                            src={`https://pokeapi.co/media/sprites/pokemon/other/official-artwork/${index + 1}.png`}
                            alt={baya.name}
                            className="baya-image w-20 h-20  mb-4"
                        />
                        <h3 className="text-black text-lg font-semibold mb-2 capitalize ">{baya.name}</h3>
                 
                        <button className= "rounded-full border-4 rounded-lg border-r-pink-300 border-l-pink-300 text-black font-sans px-4 py-3, border-t-0 border-b-0 bg-white"onClick={() => fetchDetailedBayaData(baya.url)}>
                            Ver Detalles
                        </button>
                    </div>
                ))}
            </div>
     
            {selectedBaya && (
                <div className="flex items-center justify-center mt-10">
                    <div className="baya-details p-4 mt-4 r border-4 border-r-pink-300 border-l-pink-300 text-black font-sans bg-transparent w-1/4 place-items-center">
                        <h3 className="text-xl font-semibold mb-2 capitalize">{selectedBaya.name}</h3>
                        
                        <p className='rounded-full border-4 rounded-lg border-r-pink-300 border-l-pink-300 text-black font-sans px-4 py-3, m-5 border-t-0 border-b-0 bg-white' >Growth Time: {selectedBaya.growth_time}</p>
                        <p className='rounded-full border-4 rounded-lg border-r-pink-300 border-l-pink-300 text-black font-sans px-4 py-3, m-5 border-t-0 border-b-0 bg-white' >Max Harvest: {selectedBaya.max_harvest}</p>
                        <p className='rounded-full border-4 rounded-lg border-r-pink-300 border-l-pink-300 text-black font-sans px-4 py-3, m-5 border-t-0 border-b-0 bg-white' >Natural Gift Power: {selectedBaya.natural_gift_power}</p>
                        <p className='rounded-full border-4 rounded-lg border-r-pink-300 border-l-pink-300 text-black font-sans px-4 py-3, m-5 border-t-0 border-b-0 bg-white' >Size: {selectedBaya.size}</p>
                        <p className='rounded-full border-4 rounded-lg border-r-pink-300 border-l-pink-300 text-black font-sans px-4 py-3, m-5 border-t-0 border-b-0 bg-white' >Smoothness: {selectedBaya.smoothness}</p>

                        <button className='rounded-full border-4 rounded-lg border-r-pink-300 border-l-pink-300 text-black font-sans px-4 py-3, m-5 border-t-0 border-b-0 bg-white' onClick={closeDetails}>Cerrar</button>
                    </div>
                </div>

            )}
        </div>
    );
}

export default Bayas;
