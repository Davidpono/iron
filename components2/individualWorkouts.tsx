import { fetchindividualWorkout } from "@/api/getindividualworkout";
import { fetchDataWorkouts } from "@/api/getworkouts";
import { WorkoutTabs } from "@/components/workoutTabs";
import { AllWorkouts } from "@/types";
import Image from 'next/image';
import Link from "next/link";
import React from 'react'
import ReactPlayer from 'react-player'
import VideoPlayer from "./videoPlayer";
export default async function ShowallWorkouts( id: any) {
        console.log("individual component",id)
    try {
        const response: AllWorkouts | undefined = await fetchindividualWorkout(id);
        console.log(response)
        if (response && response.Workouts.length > 0) {
          const Workouts: AllWorkouts = response;
          console.log(Workouts.Workouts[0].sectionsection1[0].workouts[0].sets)
          console.log(Workouts.Workouts[0])
          return (
            <>
            <div className="flex justify-center">
      <div className="flex justify-center border border-black rounded-lg w-4/5" style={{ margin: '20px' }}>
              {Workouts.Workouts.map((workout:any) => (
                <div key={workout._id}>

                  <h1>workout name: {workout.Name}</h1>
         
                  <p>Days {workout.Days}</p>
                  <p>Levels {workout.Levels}</p>
                  <p>Concentration {workout.Concentration}</p>
                  <p>Goals {workout.Goals}</p>
                  <Image src={workout.ThumbnailURL} alt={workout.Name} width={200} height={200} />
    
                  
               <div className="flex flex-col gap-4 ">
                  {/* Rendering sections dynamically */}
                  {Object.keys(workout).map((sectionKey) => {
                    
                    if (sectionKey.startsWith('section')) {
                      return (
                        
                        
                        <>
                        <div >
                     
                        <div className="flex flex-row">
                        <div key={sectionKey}  className="flex flex-row gap-2  border border-black rounded-lg w-1/2">
                          {workout[sectionKey].map((section: any) => (

                            <div key={section.dayname} className="w-1/4">
                              <div className="flex flex-col mb-4 gap-4 justify-between m-5">
                                <div className="flex flex-col m-5">
                                  <div>
                                    <span className="text-4xl" style={{ fontSize: '20px' }}>Workout Name: {section.workouts[0].workoutname}</span>
                                  </div>
                                  
                                  <div>

                                    <span>  dayname: {section.dayname}</span>
                                  </div>
                                  <div>
                                    <span>  sets: {section.workouts[0].sets}</span>
                                  </div>
                                  <div>
                                    <span>  reps: {section.workouts[0].reps}</span>
                                  </div>
                                  <div>
                                    <span>  intensity: {section.workouts[0].intensity} of 1 Rep Max</span>
                                  </div>
                                </div>
                                <div className="flex flex-col">
                                  <div>

                                   {//<VideoPlayer url={section.workouts[0].url} />
                                   }
                                  </div>
                                  <div>
                                    <span>  comments: {section.comments}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                          ))}

                        </div>
                        </div>
                        </div>
                        </>

                      );
                    }
                    return null;
                  }
                  
                  )}
                </div>
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
