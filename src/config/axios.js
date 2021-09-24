import axios from "axios";
const ClientAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default ClientAxios;
