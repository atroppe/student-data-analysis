import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001" });

export const fetchData = () => API.get("/");
