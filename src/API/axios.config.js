import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: window.localStorage.getItem('Authorization')
  }
});
instance.interceptors.request.use(config => {
  const token = window.localStorage.getItem('Authorization');
  if (token) {
    config.headers['Authorization'] = token;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default instance;