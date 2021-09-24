import React, { useEffect, useState } from "react";
import ClientAxios from "../config/axios";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ categoria, offset }) => {
  //State local
  const [gifs, setGif] = useState([]);

  //Use Effect para traer los gifs
  useEffect(() => {
    getGifs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  //Get Gifs
  const getGifs = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const query = `search?api_key=${apiKey}&q=${categoria}&limit=10&offset=${offset}`;
    const respuesta = await ClientAxios(query);
    const data = respuesta.data.data.map((data) => ({
      id: data.id,
      title: data.title,
      url: data.images.downsized_medium.url,
    }));

    //Valido encuentre algo
    if (!data) return;

    setGif([...data]);
  };

  if (gifs.length === 0) return null;

  return (
    <div className="grid col-1">
      <div className="span-1">
        <h3 className="display-3 sm-display-3  no-margen-inferior">
          {categoria}
        </h3>
      </div>

      <div className="grid col-5 med-col-3 sm-col-1 ">
        {gifs.map((gif) => (
          <GifGridItem key={gif.id} {...gif} />
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
