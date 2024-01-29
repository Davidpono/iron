import { AllWorkouts } from "@/types";

export async function fetchDataWorkouts(params:any): Promise<AllWorkouts> {
  const baseUrl = 'https://discoveri.azurewebsites.net/api/workouts/';
  const queryParams = {
    Days: '5',
    Levels: 'Beginner',
    Concentration: 'Bodybuilding',
    Goals: 'Legs'
  };
  console.log("queary",queryParams)
  console.log("params",params)
  // Constructing the full URL
  const fullUrl = baseUrl + '?' + new URLSearchParams(params).toString();

  try {
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData: AllWorkouts = await response.json();
    const Workouts: AllWorkouts = responseData;
  return Workouts;
   
  } catch (error) {
    // Re-throw the error to let the calling code handle it
    throw error;
  }
}
