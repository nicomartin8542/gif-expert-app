import React, { useState } from "react";

const GifExpertApp = () => {
  //Declaro state del componente
  const [categorias, setcategorias] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  //Agrego cateroria para practica.
  const handleAdd = () => {
    setcategorias([...categorias, "Nueva categoria"]);
  };

  return (
    <div>
      <h2>Gifs Exporte App</h2>
      <hr />
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categorias.map((cat, i) => (
          <li key={cat}>{cat}</li>
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
