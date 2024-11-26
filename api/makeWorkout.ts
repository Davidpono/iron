import axios, { AxiosResponse, AxiosError } from 'axios';

export async function postDataToApi(data: any): Promise<string | undefined> {
  const apiUrl1 = 'https://discoveri.azurewebsites.net/api/workouts/'; // Replace with your API endpoint
  const apiUrl = 'https://discoverii-main.onrender.com/api/workouts/'; 
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    // Send POST request to the API endpoint
    const response: AxiosResponse = await axios.post(apiUrl, data, { headers });

    // Check if the response is successful
    if (response.status === 200) {

      return response.data;
    } else {
      console.error('POST request failed with status:', response.status);
      return undefined;
    }
  } catch (error: any) {
    // Handle connection errors, timeouts, or other request-related issues
    console.error('An error occurred during the POST request:', error.message);


    // Handle specific error status codes if needed
    if (error.response?.status === 401) {
      // Unauthorized error handling
    }

    return undefined;
  }
}

