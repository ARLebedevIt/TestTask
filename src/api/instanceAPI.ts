import axios from 'axios';

export const instanceAPI = axios.create(
  {
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
})