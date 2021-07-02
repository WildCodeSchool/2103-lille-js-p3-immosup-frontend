import axios from 'axios';

const request = (options) => {
  const port = process.env.REACT_APP_API_PORT || 5050;

  return axios({
    ...options,
    baseURL: `http://localhost:${port}/`,
  });
};

export default request;
