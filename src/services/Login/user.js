import axios from 'axios';

export const login = async (data) => {
  const response = await axios.post('/login', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export const logout = async () => {
  const response = await axios.get('/logout', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  });
  return response;
};

export const join = async (data) => {
  const response = await axios.post('/join', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};
