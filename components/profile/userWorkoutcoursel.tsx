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
export function Workoutcouressel(workout: any) {

  const workouts = workout.workout || []; // Ensure workouts is defined and default to an empty array if it's not
console.log("fromcoursel",workout)
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
                  <span className="text-lg font-semibold text-wrap">{workout.id}</span> {/* Render workout ID */}
                  <span className="text-lg font-semibold text-wrap">{workout.name}</span> {/* Render workout name */}
                 <Button>
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
