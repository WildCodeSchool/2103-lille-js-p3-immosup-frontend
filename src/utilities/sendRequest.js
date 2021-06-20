import axios from 'axios';

const sendRequest = async (options) => {
  try {
    const response = await axios({
      ...options,
      baseURL: 'http://localhost:5050/',
    });
    return response.data;
  } catch (err) {
    return err;
  }
};

export default sendRequest;
