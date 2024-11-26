const axios = require('axios');

//https://discoveri.azurewebsites.net/api
// Function to make a POST request to the userworkouts endpoint
export async function updateuserrestdays(  restdays:any) {
   
    const requestData = {
    user_id: restdays.user_id,

    restdaylist:{
     restdayMonday: restdays.restmonday,
     restdayTuesday:    restdays.resttuesday,
     restdayWednesday:    restdays.restwednesday,
     restdayThursday:     restdays.restthursday,
     restdayFriday:       restdays.restfriday,
     restdaySaturday:       restdays.restsaturday,
     restdaySunday:       restdays.restsunday
    }
    };

    try {
        const response = await axios.post('https://discoverii-main.onrender.com/api/updatebasic/', requestData);
   
        return response.data;
    } catch (error:any) {
        console.error('Error:', error.response.data);
        throw error.response.data;
    }
}

