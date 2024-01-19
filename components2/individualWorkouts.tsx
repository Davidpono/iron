import { fetchindividualWorkout } from "@/api/getindividualworkout";
import { fetchDataWorkouts } from "@/api/getworkouts";
import { AllWorkouts } from "@/types";
import Image from 'next/image';
import Link from "next/link";
export default async function ShowallWorkouts( id: any) {
        console.log("individual component",id)
    try {
        const response: AllWorkouts | undefined = await fetchindividualWorkout(id);
        console.log(response)
        if (response && response.Workouts.length > 0) {
          const Workouts: AllWorkouts = response;
    
          return (
            <>
              {Workouts.Workouts.map((workout:any) => (
                <div key={workout._id}>

                  <h1>{workout.Name}</h1>
         
                  <p>{workout.Days}</p>
                  <p>{workout.Levels}</p>
                  <p>{workout.Concentration}</p>
                  <p>{workout.Goals}</p>
                  <Image src={workout.ThumbnailURL} alt={workout.Name} width={200} height={200} />
    
                 
    
                  {/* Rendering sections dynamically */}
                  {Object.keys(workout).map((sectionKey) => {
                    if (sectionKey.startsWith('section')) {
                      return (
                        <div key={sectionKey}>
                          {workout[sectionKey].map((section: any) => (
                           
                            <div key={section.dayname}>
                                <span>workoutname: {section.workoutname}</span>
                                <span>  dayname: {section.dayname}</span>
                                <span>  sets: {section.sets}</span>
                                <span>  reps: {section.reps}</span>
                                <span>  url: {section.url}</span>
                                <span>  comments: {section.comments}</span>
                                
                                </div>
                                
                            
                          ))}
                          
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              ))}
            </>
          );
        }
      } catch (error) {
        console.error('Error fetching workouts:', error);
        // Handle the error as needed
      }
    
      return <span>Loading...</span>; // Or any other loading indicator
};
