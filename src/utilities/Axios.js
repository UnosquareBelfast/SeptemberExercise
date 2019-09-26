import axios from 'axios';

const baseURL = process.env.API_URL || 'http://localhost:80/todos/';
const instance = axios.create({
  baseURL,
});

// ADD INTERCEPTORS HERE IF NEEDED.

export default instance;
