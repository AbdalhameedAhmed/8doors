import axios from 'axios';
import { parse } from 'cookie';

const axiosClient = axios.create({
  baseURL: 'http://localhost:9090/api/patient-app/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
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

axiosClient.interceptors.response.use((response) => {
  return response.data;
});

export default axiosClient;
