import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGfis";

export const useAxiosGifs = (categoria, offset = 0) => {
	const [state, setstate] = useState({
		data: [],
		loading: true,
	});

	//Use Effect para traer los gifs
	useEffect(() => {
		getGifs(categoria, offset).then((data) => {
			setstate({
				data,
				loading: false,
			});
		});
	}, [categoria, offset]);

	return state;
};
