import axios from 'axios';

export default  tokenAuth = async (token) => {
  try {
    const response = await axios.post('https://charactercraft-staging.fly.dev/verification', {
      idToken: token
    });
    return response.data.data;
  } catch (error) {
    console.error('Error al realizar la solicitud POST:', error);
  }
};