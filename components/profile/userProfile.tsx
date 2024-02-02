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
export function UserProfile(userprofile: any) {
  console.log(userprofile);
  console.log(userprofile.userprofile.user.workouts);

  const workouts = userprofile.userprofile.user.workouts || []; // Ensure workouts is defined and default to an empty array if it's not

  return (
    <>
      <div className="flex justify-center">
        <div className="userprofilemaindiv">
          <div>
            <span>Welcome {userprofile.userprofile.user.username}</span>
          </div>
        
        <UserProfileTabs userprofile={userprofile}/>
          <Workoutcouressel workout={workouts}/>
        
        </div>
      </div>
    </>
  );
}
