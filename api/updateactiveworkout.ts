import axios from 'axios';

const url = 'https://discoveri.azurewebsites.net/api/updatebasic/';

export async function updateUserbasicworkout(data:any) {
    console.log("api data",data)
    const requestData = {
        user_id: data.id,
        activeworkout: data.workoutid,
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
