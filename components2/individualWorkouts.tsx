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
          console.log(Workouts.Workouts[0].sectionsection1[0].workouts[0].sets)
          return (
            <>
              {Workouts.Workouts.map((workout:any) => (
                <div key={workout._id}>

                  <h1>workout name: {workout.Name}</h1>
         
                  <p>Days {workout.Days}</p>
                  <p>Levels {workout.Levels}</p>
                  <p>Concentration {workout.Concentration}</p>
                  <p>Goals {workout.Goals}</p>
                  <Image src={workout.ThumbnailURL} alt={workout.Name} width={200} height={200} />
    
                 
    
                  {/* Rendering sections dynamically */}
                  {Object.keys(workout).map((sectionKey) => {
                    if (sectionKey.startsWith('section')) {
                      return (
                        <div key={sectionKey}>
                          {workout[sectionKey].map((section: any) => (
                           
                            <div key={section.dayname}>
                                <span>workoutname: {section.workouts[0].workoutname}</span>
                                <span>  dayname: {section.dayname}</span>
                                <span>  sets: {section.workouts[0].sets}</span>
                                <span>  reps: {section.workouts[0].reps}</span>
                                <span>  url: {section.workouts[0].url}</span>
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
