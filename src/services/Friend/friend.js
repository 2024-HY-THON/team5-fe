import axios from 'axios';

export const getFriends = async () => {
  const response = await axios.post(
    '/http://localhost:8080/user/friends/received'
  );
  console.log(response);
  return response;
};
