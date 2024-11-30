import axios from 'axios';

export const getFriends = async (userId) => {
  const response = await axios.get(`/users/${userId}/friends`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  });
  return response.data;
};

export const getFriendRequests = async (userId) => {
  const response = await axios.get(`/users/${userId}/friend-requests`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  });
  return response.data;
};

export const removeFriend = async (userId, friendId) => {
  const response = await axios.delete(`/users/${userId}/friends/${friendId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  });
  return response.data;
};
