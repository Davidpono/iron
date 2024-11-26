import axios from 'axios';

const url1 = 'https://discoveri.azurewebsites.net/api/user/';
const url = 'https://discoverii-main.onrender.com/api/user/';
export async function getUser(userId:any) {
  try {
    const response = await axios.post(url, { user_id: userId });
    return response.data;
  } catch (error:any) {
    console.error('Error:', error.response.data);
    throw new Error('Failed to fetch user data');
  }
}
