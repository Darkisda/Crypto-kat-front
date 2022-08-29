import axios from "axios";

const api = axios.create({
  baseURL: "https://kryptokat.herokuapp.com/api",
});

export default api;
