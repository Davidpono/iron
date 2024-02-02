const axios = require('axios');

// Function to make a POST request to the userworkouts endpoint
export async function addUserWorkout(userId:any, workoutId:any, workoutName:any) {
    const requestData = {
        user_id: userId,
        id: workoutId,
        name: workoutName
    };
    console.log(requestData)
    try {
        const response = await axios.post('https://discoveri.azurewebsites.net/api/userworkouts/', requestData);
        console.log('Response:', response.data);
        return response.data;
    } catch (error:any) {
        console.error('Error:', error.response.data);
        throw error.response.data;
    }
}

