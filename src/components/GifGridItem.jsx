import React from "react";

const GifGridItem = ({id, title, url}) => (
	<div className="card no-margen-inferior animate__animated animate__fadeIn animate__delay-0.5s ">
		<img key={id} src={url} alt={title} className="img-height-150" />
		<p className="text-center text-bold no-margen-superior">{title}</p>
	</div>
);

export default GifGridItem;
