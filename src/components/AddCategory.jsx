import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setcategorias, setOffset, offset, categorias }) => {
  //State local
  const [inputValue, setinputValue] = useState("");
  const [error, setError] = useState(false);

  //Cambio el valor
  const handleChange = (e) => {
    setinputValue(e.target.value);
  };

  //HandleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    //Valido que no este vacio
    if (inputValue.trim().length === 0) {
      return;
    }

    //Valido que no este repetido
    const existeCat = categorias.some(
      (cat) => cat.toLowerCase() === inputValue.toLowerCase()
    );
    if (existeCat) {
      setError(true);
      return;
    }

    setcategorias([inputValue, ...categorias]);
    setError(false);
    setinputValue("");
  };

  //Actualiso offset
  const handleClick = () => {
    const addOffset = offset + 10;
    setOffset(addOffset);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && <p>La categoria ingresada ya existe</p>}
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Agregue una categoria"
        />
      </form>
      <button className="boton" onClick={handleClick}>
        Actualizar
      </button>
    </>
  );
};

AddCategory.propTypes = {
  setcategorias: PropTypes.func.isRequired,
  categorias: PropTypes.array.isRequired,
};

export default AddCategory;
