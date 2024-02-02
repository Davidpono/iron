import axios from 'axios';

const url = 'https://discoveri.azurewebsites.net/api/updatebasic/';

export async function updateUserbasic(data:any) {
    console.log("api data",data)
    const requestData = {
        user_id: data.user_id,
        username: data.username,
        lastname: data.lastname,
        firstname: data.firstname,
        age: data.age,
        email: data.email
    };
    console.log("requestData",requestData)
    try {
        const response = await axios.post(url, requestData);
        console.log('Response fromapi:', response.data);
        return response.data;
    } catch (error:any) {
        console.error('Error:', error.response.data || error.message);
        throw new Error('Failed to update user');
    }
}
