import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  //Declaro state del componente
  const [categorias, setcategorias] = useState([]);
  const [offset, setOffset] = useState(9);

  return (
    <div className="contenedor">
      <h2 className="display-2 sm-display-2">Gifs Exporte App</h2>

      <AddCategory
        setcategorias={setcategorias}
        categorias={categorias}
        offset={offset}
        setOffset={setOffset}
      />
      <hr />

      {categorias.length === 0 ? (
        <h1 className="display-3 sm-display-3 text-center sm-text-left margen-superior">
          Ingrese una categoria
        </h1>
      ) : (
        categorias.map((cat) => (
          <GifGrid key={cat} categoria={cat} offset={offset} />
        ))
      )}
    </div>
  );
};

export default GifExpertApp;
