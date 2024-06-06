/* eslint-disable no-useless-escape */
// src/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Modifiez l'URL de base selon vos besoins
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default instance;
