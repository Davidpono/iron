import { fetchDataWorkouts } from "@/api/getworkouts";
import { AllWorkouts } from "@/types";
import Image from 'next/image';
import Link from "next/link";
interface params {
  [x: string]: any;
  Days: string;
  Levels: string;
  Concentration: string;
  Goals: string;
}
export default async function ShowallWorkouts(params:any) {
    console.log(params.params)
    try {
        const response: AllWorkouts | undefined = await fetchDataWorkouts(params.params);
        console.log(response)
        if (response && response.Workouts.length > 0) {
          const Workouts: AllWorkouts = response;
    
          return (
            <>

            <div className="flex justify-center center ">
            <div className=" grid grid-cols-5 gap-4 w-4/5 ">
              {Workouts.Workouts.map((workout:any) => (

                <div key={workout._id} >
                      <Link    href={`/individualworkout/?ref=${workout._id}`} >
                <div className="bg-white rounded-lg hover:shadow-2xl hover:scale-110">
                  <h1>{workout.Name}</h1>
                  <p>{workout.Days}</p>
                  <p>{workout.Levels}</p>
                  <p>{workout.Concentration}</p>
                  <p>{workout.Goals}</p>
                  <Image src={workout.ThumbnailURL} alt={workout.Name} width={200} height={200} />
                  </div>
                  </Link>
                </div>
              ))}
              </div>
              </div>
            </>
          );
        }
      } catch (error) {
        console.error('Error fetching workouts:', error);
        // Handle the error as needed
      }
    
      return <span>Loading...</span>; // Or any other loading indicator
};
