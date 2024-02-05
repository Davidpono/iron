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
import { Button } from "../ui/button";
import Link from "next/link";
import { updateUserbasicworkout } from "@/api/updateactiveworkout";
export function Workoutcouressel(workout: any) {

  const workouts = workout.workout || []; // Ensure workouts is defined and default to an empty array if it's not
console.log("fromcoursel",workout)
const token = localStorage.getItem('token');
console.log("workout",workouts)

// Define updateactiveworkout as an async function
const updateactiveworkout = async (workid:any) => {
    console.log(workouts)
  if (token) {
    const data = {
      id: token,
      workoutid: workid,
    };
    // Assuming updateUserbasicworkout is a function defined elsewhere
    const result = await updateUserbasicworkout(data);
    // Handle result if needed
  }
};
  return (
    <>
    <div className="flex flex-col justify-center items-center ">
      <h3 className="">Your Saved Workouts</h3>
        <Carousel
      opts={{
        align: "start",
      }}
      className="w-4/5 max-w-sm"
    >
            <CarouselContent className="">
              {workouts.map((workout: any, index: number) => (

                <CarouselItem className="basis-4/5" key={index}>
                   <div className="p-1 ">
                   <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6  " >
                  <div className="flex flex-col gap-4">
                  <span className="text-md font-semibold text-wrap">{workout.id}</span> {/* Render workout ID */}
                  <span className="text-md font-semibold text-wrap">{workout.name}</span> {/* Render workout name */}
                 <Button onClick={() => updateactiveworkout(workout.id)}>
                    Make active workout
                 </Button>
                 <Button >
                    <Link href={`/individualworkout/?ref=${workout._id}`}>
                    See workout
                    </Link>
                 </Button>
              
                  </div>
                  </CardContent>
              </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          </div>
     
    </>
  );
}
