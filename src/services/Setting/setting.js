import axios from 'axios';

export const getSetting = async () => {
  const response = await axios.get('/setting');
  return response;
};
