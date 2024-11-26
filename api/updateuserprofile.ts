import axios from 'axios';

const url1 = 'https://discoveri.azurewebsites.net/api/updatebasic/';
const url = 'https://discoverii-main.onrender.com/api/updatebasic/';

export async function updateUserbasic(data:any) {

    const requestData = {
        user_id: data.user_id,
        username: data.username,
        lastname: data.lastname,
        firstname: data.firstname,
        age: data.age,
        email: data.email
    };

    try {
        const response = await axios.post(url, requestData);

        return response.data;
    } catch (error:any) {
        console.error('Error:', error.response.data || error.message);
        throw new Error('Failed to update user');
    }
}
