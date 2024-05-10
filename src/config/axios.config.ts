// config/axios.config.ts

import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: `http://www.omdbapi.com/`,
  params: {
    apikey: '2534613a',
  },
});

export default api;
