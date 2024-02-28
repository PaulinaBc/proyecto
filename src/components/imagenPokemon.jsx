import React from 'react';
import detectiveImage from '../fondo/detective.png';

function ImagenPokemon() {
    return (
        <img src={detectiveImage} alt="Detective Pikachu" style={{ float: 'right', marginRight: '10px', width: '700px' }} />
    );
}

export default ImagenPokemon;