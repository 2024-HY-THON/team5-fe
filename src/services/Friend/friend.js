import axios from 'axios';

export const getFriends = async () => {
  const response = await axios.get('/api/friend');
  console.log(response);
  return response;
};
