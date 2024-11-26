const axios = require('axios');
//'https://discoveri.azurewebsites.net/api/userworkouts/'
// Function to make a POST request to the userworkouts endpoint
export async function addUserWorkout(userId:any, workoutId:any, workoutName:any) {
    const requestData = {
        user_id: userId,
        id: workoutId,
        name: workoutName
    };
    console.log(requestData)
    try {
        const response = await axios.post('https://discoverii-main.onrender.com/api/userworkouts/', requestData);

        return response.data;
    } catch (error:any) {
        console.error('Error:', error.response.data);
        throw error.response.data;
    }
}

