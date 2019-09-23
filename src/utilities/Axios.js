import axios from 'axios';

const baseURL = process.env.API_URL || 'http://localhost:8080/todos/';
const instance = axios.create({
  baseURL,
});

const deleteInstance = axios.create({
  baseURL: 'http://localhost:8080/deletedtodos/'
});

// ADD INTERCEPTORS HERE IF NEEDED.

export {
  instance,
  deleteInstance
};
