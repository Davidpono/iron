"use client";

import { postDataToApi } from "@/api/makeWorkout";
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, useEffect, useRef } from "react";
 
type Section = {
  dayname: string;
  subSections: {
    workoutname: string;
    reps: string;
    sets: string;
    url: string;
    comments: string;
    intensity: string;
    days: string;
  }[];
};
type Details = {
  splitnamename: string;
  thumbnailURL: string;
  days: string;
  levels: string;
  goals: string;
  concentration: string;
};

export function SearchWorkout() {

  useEffect(() => {
    console.log("Component rendered");
  }, []);
  const inputclassName =
    "text-black font-bold py-2 px-4 rounded mb-2 border-2 border-black";
  const [formSections, setFormSections] = useState<Section[]>([
    {
      dayname: "",
      subSections: [
        {
          reps: "",
          sets: "",
          workoutname: "",
          url: "",
          comments: "",
          intensity: "",
          days: "",
        },
      ],
    },
  ]);
  const [formDetails, setFormDetails] = useState<Details>({
    splitnamename: "",
    thumbnailURL: "",
    days: "",
    levels: "",
    goals: "",
    concentration: "",
  });


  

  const handleDetailsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [event.target.name]: event.target.value,
    }));
  };
  

  

  const router = useRouter();

  const submit = async (e:any) => {
    e.preventDefault();
   
    const transformedForm: any = {
      Days: formDetails.days,
      Levels: formDetails.levels,
      Concentration: formDetails.concentration,
      Goals: formDetails.goals,
    };



    console.log("Transformed Form:", transformedForm);

    try {
   
        const queryString = encodeURIComponent(JSON.stringify(transformedForm));
        router.push(`/workout?ref=${queryString}`);
      
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    console.log("Form Sections:", formSections);
    console.log("Form Details:", formDetails);
  };

  return (
    <div className=" flex justify-center">
      <form
        onSubmit={submit}
        className="lg:w-2/5 w-4/5   border-2 border-black rounded-lg p-4"
      >
        <h1 className="text-3xl font-bold mb-4">create workout.</h1>
        <div className=" flex lg:flex-row  flex-col justify-center gap-4">
          <div className="flex flex-col ">
         
            <input
              className={inputclassName}
              name="days"
              placeholder="1"
              onChange={handleDetailsChange}
              value={formDetails.days}
            />
          </div>
          <div className="flex flex-col">
            <select
              placeholder="Beginner"
              className="text-black font-bold text-sm py-2 px-4 rounded mb-2 border-2 border-black"
              name="levels"
              onChange={handleDetailsChange}
              value={formDetails.levels}
            >
              <option value="Beginner">Begginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>

              {/* Add other options as needed */}
            </select>
            <select
              className="text-black font-bold text-sm py-2 px-4 rounded mb-2 border-2 border-black"
              name="goals"
              placeholder="General Fitness"
              onChange={handleDetailsChange}
              value={formDetails.goals}
            >
              <option value="General Fitness">General Fitness</option>
              <option value="BodyBuilding">BodyBuilding</option>
              <option value="Fat Loss">Fat Loss</option>
              <option value="Strong Man">Strong Man</option>
              <option value="Power Lifting">Power Lifting</option>
              <option value="General Strength">General Strength</option>

              {/* Add other options as needed */}
            </select>

            <select
              placeholder="Full Body"
              className="text-black font-bold text-sm py-2 px-4 rounded mb-2 border-2 border-black"
              name="concentration"
              onChange={handleDetailsChange}
              value={formDetails.concentration}
            >
              <option value="Full Body">Full Body</option>
              <option value="Legs">Legs</option>
              <option value="Arms">Arms</option>
              <option value="Chest">Chest</option>
              <option value="Back">Back</option>
              <option value="Legs">Legs</option>
              <option value="Glutes">Glutes</option>

              {/* Add other options as needed */}
            </select>
      
          </div>
        </div>
        <button
          className="bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
          key="submit"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
