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
          <div className="flex justify-center items-center bg-red-600 rounded-lg shadow-lg" style={{ height: "30%" }}>
            <span className="flex justify-center text-center text-5xl font-bold">Welcome {userprofile.userprofile.user.username}</span>
          </div>
          <div className="flex flex-col gap-10">
        <div className="flex lg:flex-row flex-col gap-4 justify-between">
        <div>
        <UserProfileTabs userprofile={userprofile}/>
        </div>
        <div className="calmaindiv" >
  <Calendar data={activeworkout1} data2={userprofile}/>
</div>
        </div>
        <div className="flex lg:flex-row flex-col">

        <div className="flex w-1/3">
<Activeworkout data={activeworkout1}/>
        </div>
<div className="flex flex justify-center content-center lg:w-2/3">
          <Workoutcouressel workout={workouts}/>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
