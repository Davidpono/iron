"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"
import { Workoutcouressel } from "./userWorkoutcoursel";
import { UserProfileTabs } from "./userProfileTabs";
import Calendar from "../calendar/calendarComponent";
import { Activeworkout } from "./activeWorkout";
import { AllWorkouts } from "@/types";
export function UserProfile(userprofile: any, activeworkout:AllWorkouts) {
  console.log("userprofile active", userprofile.workouts);
 
  
  const workouts = userprofile.userprofile.user.workouts || []; // Ensure workouts is defined and default to an empty array if it's not
  const activeworkout1= userprofile.workouts
  return (
    <>
      <div className="flex justify-center">
        <div className="userprofilemaindiv">
          <div className="flex justify-center items-center h-2/3">
            <span className="flex justify-center text-center">Welcome {userprofile.userprofile.user.username}</span>
          </div>
          <div className="flex flex-col">
        <div className="flex flex-row justify-between">
        <div>
        <UserProfileTabs userprofile={userprofile}/>
        </div>
        <div style={{ width: '800px', height: '850px', margin: '0 auto' }}>
  <Calendar data={activeworkout1}/>
</div>
        </div>
        <div className="flex flex-row">

        <div className="flex w-1/3">
<Activeworkout data={activeworkout1}/>
        </div>
<div className="flex flex justify-center content-center w-2/3">
          <Workoutcouressel workout={workouts}/>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
