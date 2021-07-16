import axios from 'axios';

const request = (options) => {
  const port = process.env.REACT_APP_API_PORT || 5050;
  const path = process.env.REACT_APP_API_PATH_DEV;

  return axios({
    ...options,
    baseURL: `http://${path}:${port}/`,
  });
};

export default request;
