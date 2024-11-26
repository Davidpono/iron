import { AllWorkouts } from "@/types";

export async function fetchindividualWorkout(id:any): Promise<AllWorkouts> {

  const baseUrl1 = 'https://discoveri.azurewebsites.net/api/workouts/';
  const baseUrl = 'https://discoverii-main.onrender.com/api/workouts/';
  const queryParams = {

    id: id.id
  };

  // Constructing the full URL
  const fullUrl = baseUrl + '?' + new URLSearchParams(queryParams).toString();

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
