import axios from 'axios';

const url = 'https://discoveri.azurewebsites.net/api/updatebasic/';

export async function updateUserbasicworkout(data:any) {
 
    const requestData = {
        user_id: data.id,
        activeworkout: data.workoutid,
    };

    try {
        const response = await axios.post(url, requestData);
   
        return response.data;
    } catch (error:any) {
        console.error('Error:', error.response.data || error.message);
        throw new Error('Failed to update user');
    }
}
