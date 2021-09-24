import React from "react";

const GifGridItem = ({ id, title, url }) => (
  <img key={id} src={url} alt={title} className="img-height-150" />
);

export default GifGridItem;
