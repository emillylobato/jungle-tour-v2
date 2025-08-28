import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3005/ap',
  timeout: 10000,
});

export default api;