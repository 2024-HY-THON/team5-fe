import axios from 'axios';

const shareBelog = async (belogId, data) => {
  try {
    const response = await axios.post(`/belogs/${belogId}/share`, data, {
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

export default shareBelog;
