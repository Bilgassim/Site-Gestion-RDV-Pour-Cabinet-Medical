import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/data`);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the data!", error);
    throw error;
  }
};

export const postData = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/data`, data);
    return response.data;
  } catch (error) {
    console.error("There was an error posting the data!", error);
    throw error;
  }
};
