import { fetchindividualWorkout } from "@/api/getindividualworkout";
import { AllWorkouts } from "@/types";
import Image from 'next/image';
import Link from "next/link";
import React from 'react'
import SaveWorkoutBut from "./buttonAddWorkout";

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
      <div className="flex justify-center border border-black rounded-lg w-4/5 whitebgdiv" style={{ margin: '20px' }}>
              {Workouts.Workouts.map((workout:any) => (
                <div key={workout._id}>
<div className="flex sm:flex-col flex-col lg:flex-row md:flex-col">
  <div>
    
   <SaveWorkoutBut id={id} name={workout.Name}/>
                  <h1>{workout.Name} Program</h1>
                  <br/>
                  <p>{workout.Days} Day Program</p>
                  <br/>
                  <p>{workout.Levels} Program</p>
                  <br/>
                  <p>Focuses on {workout.Concentration}</p>
                  <br/>
                  <p>Goals {workout.Goals}</p>
                  <br/>
                  <Image src={workout.ThumbnailURL} alt={workout.Name} width={200} height={200} />
    
                  </div> 
                  <div>

                  <span>
    <strong>Workout Name:</strong> This is the name given to a specific workout routine, such as "Push-ups" or "Squats".
</span><br/>

<span>
    <strong>Days:</strong> Indicates the number of days per week the workout routine is recommended to be performed.
</span><br/>

<span>
    <strong>Levels:</strong> Refers to the difficulty levels of the workout routine, such as beginner, intermediate, or advanced.
</span><br/>

<span>
    <strong>Concentration:</strong> Describes the focus area of the workout routine, such as upper body, lower body, or full body.
</span><br/>

<span>
    <strong>Goals:</strong> Represents the objectives or targets the workout routine aims to achieve, like muscle gain, weight loss, or endurance improvement.
</span><br/>

<span>
    <strong>Thumbnail Image:</strong> This is a small preview image associated with the workout routine, providing a visual representation.
</span><br/>

<span>
    <strong>Sets:</strong> Sets refer to the number of cycles of repetitions of a particular exercise that are performed during a workout session. For example, if an exercise specifies 3 sets, it means the exercise should be performed three times with rest intervals in between.
</span><br/>

<span>
    <strong>Reps (Repetitions):</strong> Reps refer to the number of times a specific exercise is performed within each set. For example, if an exercise specifies 10 reps, it means the exercise should be repeated ten times within each set.
</span><br/>

<span>
    <strong>Intensity:</strong> Intensity indicates the level of effort or resistance applied during an exercise. It is often expressed as a percentage of one's One Repetition Maximum (1RM), which is the maximum weight an individual can lift for a single repetition of a given exercise. For instance, if the intensity is stated as 80% of 1RM, it means the weight used for the exercise is 80% of the individual's maximum lifting capacity for that exercise.
</span><br/>



                  </div>
         </div>         
               <div className="flex flex-col gap-4 ">
                  {/* Rendering sections dynamically */}
                  {Object.keys(workout).map((sectionKey) => {
                    
                    if (sectionKey.startsWith('section')) {
                      return (
                        
                        
                        <>
                        <div className="allworkoutscontainer" >
                     
                        <div >
                        <div key={sectionKey} className="containerworkoutsinfo">
  {workout[sectionKey].map((section: any) => (

                            <div key={section.dayname} className="wholeworkoutcard">
                              <div className="flex flex-col mb-4 gap-4 justify-between m-5">
                                <div className="flex flex-col m-5" >
                                  <div className="workoutcard">
                                  <div className="flex items-center flex flex-col"> 
                                  <br/>
                                    <span className="workoutcardheadertext"> {section.workouts[0].workoutname}</span>
                                    <br/>
                                    <span className="workoutcardheadertext"> {section.dayname}</span>
                                  </div>
                                  
                                
                                  </div>


                                  <div>
                                  <br/>
                                    <span className="internalnonheaderworkouttext">  Sets: {section.workouts[0].sets} </span>
                                  </div>
                                  <div>
                                  <br/>
                                    <span className="internalnonheaderworkouttext">  Reps: {section.workouts[0].reps}</span>
                                  </div>
                                  <div>
                                  <br/>
                                    <span className="internalnonheaderworkouttext">  Intensity: {section.workouts[0].intensity} of 1 Rep Max</span>
                                  </div>
                                </div>
                                <div className="flex flex-col">
                                  <div> 
                               

                                   {//<VideoPlayer url={section.workouts[0].url} />
                                   }
                                  </div>
                                  <div>
                                    <span className="internalnonheaderworkouttext">  Comments: {section.comments}</span>
                                  </div>
                                  <div className="flex justify-center">
                                  <Link href={section.workouts[0].url} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                                  <div    className="rounded-lg hoverbutton-div">
                                  <span className="genericbuttonspan">
                                  <strong>Click to See an Example</strong>
                              </span>
                                    </div>

                                  </Link>
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
