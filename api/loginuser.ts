import axios from 'axios';

const url1 = 'https://discoveri.azurewebsites.net/api/login/';
const url = 'https://discoverii-main.onrender.com/api/register/';

export async function login(data:any) {
    
  try {
    const response = await axios.post(url, data);
    const { token } = response.data; // Assuming your API returns a token
    localStorage.setItem('token', response.data.user_id); // Set token in local storage
  
    return response.data; // Return token upon successful login
  } catch (error:any) {
    console.error('Error:', error?.response?.data || error.message);
    throw new Error('Login failed');
  }
}
