import React from "react";
import {useAxiosGifs} from "../hooks/useAxiosGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({categoria, offset}) => {
	const {data: gifs, loading} = useAxiosGifs(categoria, offset);

	return (
		<div className="grid col-1">
			<div className="span-1">
				<h3 className="display-3 sm-display-3  no-margen-inferior sm-text-center">
					{categoria}
				</h3>
				{loading && (
					<p className="animate__animated animate__flash">Cargando....</p>
				)}
			</div>

			<div className="grid col-4 med-col-2 sm-col-1">
				{gifs.map((gif) => (
					<GifGridItem key={gif.id} {...gif} />
				))}
			</div>
		</div>
	);
};

export default GifGrid;
