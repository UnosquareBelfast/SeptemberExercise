import axios from 'axios';

const baseURL = process.env.API_URL || 'http://localhost:8080/todos/' || 'http://localhost8080/deletedtodos/';
const instance = axios.create({
  baseURL,
});

// ADD INTERCEPTORS HERE IF NEEDED.

export default instance;
