import axios from 'axios';

const baseURL = process.env.API_URL || 'http://localhost:8080/';
const instance = axios.create({
  baseURL,
});

// ADD INTERCEPTORS HERE IF NEEDED.

export default instance;
