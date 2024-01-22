import axios, { AxiosResponse, AxiosError } from 'axios';

export async function postDataToApi(data: any): Promise<string | undefined> {
  const apiUrl = 'https://discoveri.azurewebsites.net/api/workouts/'; // Replace with your API endpoint
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    // Send POST request to the API endpoint
    const response: AxiosResponse = await axios.post(apiUrl, data, { headers });

    // Check if the response is successful
    if (response.status === 200) {
      console.log('POST request successful');
      console.log('Response:', response.data);
      return response.data;
    } else {
      console.error('POST request failed with status:', response.status);
      return undefined;
    }
  } catch (error: AxiosError) {
    // Handle connection errors, timeouts, or other request-related issues
    console.error('An error occurred during the POST request:', error.message);
    console.log('Response content:', error.response?.data);
    console.log('Response headers:', error.response?.headers);

    // Handle specific error status codes if needed
    if (error.response?.status === 401) {
      // Unauthorized error handling
    }

    return undefined;
  }
}

// Example usage:
const formData = {
  // your form data here
};

postDataToApi(formData)
  .then((result) => {
    if (result !== undefined) {
      // Process the result as needed
      console.log('API response:', result);
    } else {
      // Handle the case where the request failed
      console.error('API request failed.');
    }
  })
  .catch((error) => {
    // Handle unexpected errors
    console.error('An unexpected error occurred:', error);
  });
