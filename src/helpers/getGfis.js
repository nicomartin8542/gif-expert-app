import ClientAxios from "../config/axios";

//Get Gifs
export const getGifs = async (categoria, offset) => {
	const apiKey = process.env.REACT_APP_API_KEY;
	const query = `search?api_key=${apiKey}&q=${categoria}&limit=8&offset=${offset}`;
	const respuesta = await ClientAxios(query);
	const data = respuesta.data.data.map((data) => ({
		id: data.id,
		title: data.title,
		url: data.images.downsized_medium.url,
	}));

	//Valido encuentre algo
	if (!data) return null;

	return data;
};
