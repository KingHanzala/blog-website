import axios from 'axios';
import getBackendURL from '../config.js';

const backendURL = getBackendURL();

const API = axios.create({
  baseURL: `${backendURL}/api`,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

export default API;
