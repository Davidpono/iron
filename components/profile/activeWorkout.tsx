"use client";
import React from "react";

export function Activeworkout(workout: any) {
    console.log("from active", workout.data)

    function openmodal(): void {
        throw new Error("Function not implemented.");
    }

  return (
    <>
    <div className="bg-black w-full rounded-md flex justify-center content-center" onClick={openmodal}>
    <span className="text-white justify-center content-center">
    {workout.data.Name}

    </span>
    </div>

    </>
  );
}
