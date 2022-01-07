import axios from 'axios';

const baseUrl = 'http://127.0.0.1:3000';

export const getProfile = (vendorId) => {
  return axios.get(`${baseUrl}/vendor/${vendorId}/profile`);
} 
