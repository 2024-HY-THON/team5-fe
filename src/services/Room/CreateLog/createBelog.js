import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // .env에서 API URL 가져오기
  headers: {
    'Content-Type': 'application/json',
  },
});

const createBelog = async ({ body }) => {
  try {
    const response = await api.post(`/belogs/create`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sharing belog:', error);
    throw error;
  }
};

export default createBelog;
