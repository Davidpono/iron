import axios from 'axios';

const url1 = 'https://discoveri.azurewebsites.net/api/updatebasic/';
const url = 'https://discoverii-main.onrender.com/api/updatebasic/'; 
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
