// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import HomeImg from '../fondo/HomeImg.png';
import Pokeball from '../fondo/Pokeball.png';
import tagDrash from '../fondo/TagDrash.png';
import EscamaBella from '../fondo/Escama_bella_29.png';

const Navbar = () => {
    return (
        <nav className="navbar border-b-2 shadow-2xl border-red-300 rounded-full">
            <ul className="flex space-x-4">
                <li className="text-pink-500 flex items-center">
                    <img src={HomeImg} alt="Home" className="w-6 h-6 mr-2" />
                    <Link to="/">HomePage</Link>
                </li>
                <li className="text-pink-500 flex items-center">
                    <img src={tagDrash} alt="Bayas" className="w-6 h-6 mr-2" />
                    <Link to="/bayas">Bayas</Link>
                </li>
                <li className="text-pink-500 flex items-center">
                    <img src={Pokeball} alt="Buscar Pokemon" className="w-6 h-6 mr-2" />
                    <Link to="/buscar-pokemon">Buscar Pokemon</Link>
                </li>
                <li className="text-pink-500 flex items-center">
                    <img src={EscamaBella} alt="Artículos" className="w-6 h-6 mr-2" />
                    <Link to="/articulos">Artículos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
