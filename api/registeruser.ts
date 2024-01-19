import axios from 'axios';

export async function register(data: any) {
  console.log(data);
  const url = 'https://discoveri.azurewebsites.net/api/register/';
  const headers = {
    'Content-Type': 'application/json',
  };

  /*const data = {
    email: 'vercenyour_email@example.com',
    password: 'your_password test vercen8',
    username: 'your_username vercen8',
  };  */

  const maxRetries = 3;
  const retryDelay = 2000; // in milliseconds

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      // Send POST request to the registration API endpoint
      const response = await axios.post(url, data);
      
      // Registration successful, check if inserted_id is present in the response
      const insertedId = response.data.inserted_id;
      if (insertedId) {
        console.log('Inserted document ID:', insertedId);
        return insertedId;
      }

      // Redirect the user or handle success as needed
      // Assuming there's a function to handle success, replace the line below accordingly
      handleSuccess();

      return insertedId;
    } catch (error:any) {
      // Handle connection errors, timeouts, or other request-related issues
      console.error(`An error occurred during registration request (Attempt ${attempt}):`, error);
      console.log('Response content:', error.response.data);
      console.log('Response headers:', error.response.headers);

      // Sleep before retrying
      await new Promise(resolve => setTimeout(resolve, retryDelay));
    }
  }

  // Registration failed after max retries
  console.error('Registration failed. Please try again.');
}

// Replace this function with the actual function to handle success
function handleSuccess() {
  // Add your success handling logic here
  console.log('Registration successful!');
}


