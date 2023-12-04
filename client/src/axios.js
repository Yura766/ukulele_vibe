import axios from 'axios';

const API_BASE_URL = `${process.env.REACT_APP_API_KEY}:3001/api`;

export const get = (url) => { 
  return axios.get(`${API_BASE_URL}${url}`);
};