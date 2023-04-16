import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:9999/clinic-management',
});

axiosInstance.interceptors.request.use(function(config) {

  const token = localStorage.getItem("token");  

  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }
  
  return config;
});
