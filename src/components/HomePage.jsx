import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Importa Link de react-router-dom
import '../App.css';
import imagenPokemon from '../fondo/logo_switch.png';
import logoandroid from '../fondo/logo_android.png';
import pokemonImages from './pokemon_data';

function HomePage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        const newIndex = currentImageIndex + 1;
        setCurrentImageIndex(newIndex >= pokemonImages.length ? 0 : newIndex);
    };

    const prevImage = () => {
        const newIndex = currentImageIndex - 1;
        setCurrentImageIndex(newIndex < 0 ? pokemonImages.length - 1 : newIndex);
    };

    return (
        <div className="homePage rounded-lg p-4 " style={{
            marginLeft: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '1px',
        }}>
            <div style={{ position: 'absolute', top: 150, left: 70, padding: '10px', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <p className="text-slate-500/75 text-xl font-semibold mb-2" style={{ textAlign: 'left' }}>
                    Plataformas
                </p>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                    <img className="w-5"src={imagenPokemon} style={{marginRight: '10px' }} />
                    <img src={logoandroid} style={{ width: '20px' }} />
                </div>
                <div style={{ marginLeft: '2px' }}>
                    <p className="text-white font-mono text-xl" style={{ whiteSpace: 'pre-line', textAlign: 'left', marginTop: '30px' }}>
                        Conoce a los pokemones más populares
                        <br />
                        elige tu favorito
                        <br />
                        y buscalo en la sección de búsqueda
                    </p>
                    <p className="text-white font-sans text-sm" style={{ whiteSpace: 'pre-line', textAlign: 'left', marginTop: '30px' }}>
                        Obten información sobre las bayas y sus efectos
                        <br />
                        Diviertete encontrando cada una de estas
                    </p>
                </div>
                
                <Link to="/bayas">
                    <button className="rounded-full border-4 border-r-pink-300 border-l-pink-300 text-black font-sans px-6 py-3, border-t-0 border-b-0 bg-white" style={{ marginLeft: '0px', margin: '30px' }}>Leer Más</button>
                </Link>
            </div>
            <p className="text-white text-2xl font-semibold mb-6 rounded-lg p-2 border border-r-white border-l-white " style={{ textAlign: 'left' }}>
                Pokemon Más Populares
            </p>
            <img src={pokemonImages[currentImageIndex]} alt={`pokemon ${currentImageIndex + 1}`} className="" style={{ width: '500px', height: '500px' }} />
            <div>
                <button className="bg-white rounded-full border-4 border-y-blue-300 border-r-0 border-l-0 font-sans px-6 py-3" onClick={prevImage} style={{ margin: '10px' }}>Anterior</button>
                <button className="bg-white rounded-full border-4  border-y-blue-300 border-r-0 border-l-0 font-sans px-6 py-3" onClick={nextImage} style={{ margin: '10px' }}>Siguiente</button>
            </div>
        </div>
    );
}

export default HomePage;
