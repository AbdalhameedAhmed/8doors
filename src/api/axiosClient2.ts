import axios from 'axios';
import { parse } from 'cookie';

const axiosClient2 = axios.create({
  baseURL: 'http://localhost:9094/api/lookup/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient2.interceptors.request.use(
  (config) => {
    const token = parse(document.cookie).token;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient2.interceptors.response.use((response) => {
  return response.data;
});

export default axiosClient2;
