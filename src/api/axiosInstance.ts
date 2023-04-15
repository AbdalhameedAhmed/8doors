// import axios from 'axios';
// import { useSelector } from 'react-redux';
// import store from "redux/store"


// export const axiosInstance = axios.create({
//   baseURL: `http://localhost:9999/clinic-management`,
//   headers: {
//     'Authorization': `Bearer ${'token'}`
//   }
// })

import axios from 'axios';
import store from 'redux/store';

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
