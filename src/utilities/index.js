import axios from 'axios';

const request = (options) => {
  return axios({
    ...options,
    baseURL: process.env.REACT_APP_API_PATH_DEV,
  });
};

const dateFormat = (date, parser = '%d/%m/%y', separator = '/') => {
  const format = {
    '%y': date.slice(0, 4),
    '%m': date.slice(5, 7),
    '%d': date.slice(8, 10),
  };

  return parser
    .split('/')
    .filter((part) => part === '%y' || part === '%m' || part === '%d')
    .map((part) => format[part])
    .join(separator);
};

export { request, dateFormat };
