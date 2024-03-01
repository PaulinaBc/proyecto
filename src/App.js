// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Bayas from './components/Bayas';
import Busqueda_de_pokemon from './components/Busqueda_de_pokemon';
import Articulos from './components/Articulos';
import TagPumkin from './fondo/TagPumkin.png';
import TagDrash from './fondo/TagDrash.png';
import TagKelpsyBerry from './fondo/TagKelpsyBerry.png';

const bayasData = [
  {
    nombre: 'Pumkin Berry',
    ubicacion: 'Árboles en la Ruta 2',
    imagen: TagPumkin,
  },
  {
    nombre: 'Kelpsy Berry',
    ubicacion: 'Árboles en la Ruta 2',
    imagen: TagKelpsyBerry,
  },
  {
    nombre: 'Drash Berry',
    ubicacion: 'Árboles en la Ruta 4',
    imagen: TagDrash,
  },
];

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bayas" element={<Bayas bayasData={bayasData} />} />
        <Route path="/buscar-pokemon" element={<Busqueda_de_pokemon />} />
        <Route path="/articulos" element={<Articulos />} />
      </Routes>
    </Router>
  );
}

export default App;
