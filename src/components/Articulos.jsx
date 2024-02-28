import React from 'react';

const articulos = [
  { titulo: 'Ala arcoíris', generacion: 'Segunda' },
  { titulo: 'Altarianita', generacion: 'Sexta' },
  { titulo: 'Alo-Raistal Z', generacion: 'Septima' },
  

];

function Articulos() {
  return (
    <div className="flex flex-wrap justify-around bg-clip-contentucio" >
      {articulos.map((articulo, index) => (
        <div key={index} className="text-white p-4 m-2 w-64 rounded shadow-lg">
          <h2 className="font-bold text-xl mb-2">{articulo.titulo}</h2>
          <p className="text-base border-2">{articulo.generacion}</p>
        </div>
      ))}
    </div>
  );
}

export default Articulos;
