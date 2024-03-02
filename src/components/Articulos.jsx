import React, { useState, useEffect } from 'react';

const ItemInfo = ({ item }) => {
  if (!item) {
    return <p>Cargando información...</p>;
  }
  // Estructura de la respuesta esperada de la API:
  // {
  //   "id": number,
  //   "name": string,
  //   "cost": number,
  //   },
  //   
  // }
  return (
    <div className="text-white p-4 m-2 w-64 rounded shadow-lg">
      <h2 className="font-bold text-xl mb-2">{item.name}</h2>
      <img src={item.sprites.default} alt={`Imagen de ${item.name}`} className="mb-2" />
      <p className="text-base border-2">ID: {item.id}</p>
      <p className="text-base border-2">Costo: {item.cost}</p>
    </div>
  );
};

function Articulos() {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/item/');
        const data = await response.json();
        setItems(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchItemData = async () => {
      if (currentIndex >= 0 && currentIndex < items.length) {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/item/${items[currentIndex].name}/`);
          const data = await response.json();
          setCurrentItem(data);
        } catch (error) {
          console.error('Error fetching item data:', error);
        }
      }
    };

    fetchItemData();
  }, [currentIndex, items]);

  const handleNextItem = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-around bg-clip-contentucio mt-4">
      <div className="mb-4">
    
        <ItemInfo item={currentItem} />
      </div>
      <div className="flex justify-center w-full">
        <button className="rounded-full border-4  border-y-lime-100 border-r-0 border-l-0 font-sans px-6 py-3 mr-10" onClick={handlePrevItem} disabled={currentIndex === 0}>
          Anterior
        </button>
        <button className="rounded-full border-4  border-y-lime-100 border-r-0 border-l-0 font-sans px-6 py-3" onClick={handleNextItem} disabled={currentIndex === items.length - 1}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Articulos;
