import axios from "axios";

const instance = axios.create({
  baseURL: 'https://socialworld-backend-nestjs.onrender.com/api',
  withCredentials: true
});

export default instance;