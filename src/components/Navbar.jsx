// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Bayas from './Bayas';

const Navbar = () => {
    return (
        <nav className="navbar border-b-2 border-y-gray-900 rounded-full">
            <ul>
                <li><Link to="/" className='text-gray-950/50'>HomePage</Link></li>
                <li><Link to="/bayas" className="text-gray-950/50">Bayas</Link></li>
                <li><Link to="/buscar-pokemon">Buscar Pokémon</Link></li>
                <li><Link to="/articulos" className="text-gray-950/50">Artículos</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;