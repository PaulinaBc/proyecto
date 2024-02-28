import React from 'react';



function Bayas({bayasData}) {
    return (
        <div className="bayas">
            <h2 className="text-white text-2xl font-semibold mb-4">Bayas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {bayasData.map((baya, index) => (
                    <div key={index} className="baya-card p-4 rounded-lg shadow-md">
                        <img src={baya.imagen} alt={baya.nombre} className="baya-image w-15 h-16 object-cover mb-4" />
                        <h3 className="text-white text-lg font-semibold mb-2">{baya.nombre}</h3>
                        <p className="text-gray-300">{baya.ubicacion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bayas;

