"use client";

import { postDataToApi } from "@/api/makeWorkout";
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

export function ProfileForm() {
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

  const handleFormChange = (
    event: any,
    sectionIndex: number,
    subSectionIndex: number
  ) => {
    const updatedSections: any = [...formSections];
    if (event.target.name === "Day name") {
      updatedSections[sectionIndex].dayname = event.target.value;
    } else if (event.target.name === 'days') {
      updatedSections[sectionIndex].subSections[subSectionIndex].days = event.target.value;
      // Use event.target.value instead of value
    } else {
      updatedSections[sectionIndex].subSections[subSectionIndex][event.target.name] = event.target.value;
    }
    setFormSections(updatedSections);
  };
  

  const handleDetailsChange = (event: any) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [event.target.name]: event.target.value,
    }));
  };
  

  const addSection = () => {
    setFormSections((prevSections) => [
      ...prevSections,
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
  };

  const addSubSection = (sectionIndex: number) => {
    setFormSections((prevSections) => {
      const updatedSections = [...prevSections];
      const newSubSection = {
        reps: "",
        sets: "",
        workoutname: "",
        url: "",
        comments: "",
        intensity: "",
        days: "",
      };
      updatedSections[sectionIndex].subSections.push(newSubSection);
  
      return updatedSections;
    });
  };
  
 

  const removeSection = (sectionIndex: number) => {
    setFormSections((prevSections) => {
      const updatedSections = [...prevSections];
      updatedSections.splice(sectionIndex, 1);
      return updatedSections;
    });
  };

  const removeSubSection = (sectionIndex: number, subSectionIndex: number) => {
    setFormSections((prevSections) => {
      const updatedSections = [...prevSections];
      updatedSections[sectionIndex].subSections.splice(subSectionIndex, 1);
      return updatedSections;
    });
  };

  const duplicateDay = (sectionIndex: number) => {
    setFormSections((prevSections) => {
      const duplicatedDay = { ...prevSections[sectionIndex] };
      return [...prevSections, duplicatedDay];
    });
  };

  const submit = async (e:any) => {
    e.preventDefault();
    // Assuming formDetails and formSections are defined

    // Transforming the bigform structure
    const transformedForm: any = {
      Days: formDetails.days,
      Levels: formDetails.levels,
      Concentration: formDetails.concentration,
      Goals: formDetails.goals,
      Name: formDetails.splitnamename,
      thumbnailURL: formDetails.thumbnailURL,
    };

    // Create dynamic sectionsections based on formSections
    formSections.forEach((section, index) => {
      const sectionName = `sectionsection${index + 1}`;
      transformedForm[sectionName] = section.subSections.map((subSection) => ({
        dayname: section.dayname,
        workouts: [
          {
            workoutname: subSection.workoutname,
            days: subSection.days,
            intensity: subSection.intensity,
            sets: subSection.sets,
            reps: subSection.reps,
            url: subSection.url,
            comments: subSection.comments,
          },
        ],
      }));
    });

    console.log("Transformed Form:", transformedForm);

    try {
      const res = await postDataToApi(transformedForm);
      console.log("API Response:", res);
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
              name="splitnamename"
              placeholder="Name"
              onChange={handleDetailsChange}
              value={formDetails.splitnamename}
            />
            <input
              className={inputclassName}
              name="thumbnailURL"
              placeholder="ThumbnailURL"
              onChange={handleDetailsChange}
              value={formDetails.thumbnailURL}
            />
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
        {formSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <div className="flex lg:flex-row flex-col gap-2 justify-center">
              <div>
                <input
                  className={inputclassName}
                  placeholder="Day Name"
                 
  name="Day name"
                  onChange={(event) => handleFormChange(event, sectionIndex, 0)}
                  value={formSections[sectionIndex].dayname}
                />
              </div>
              <div>
                <button
                  className="bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
                  type="button"
                  onClick={() => addSubSection(sectionIndex)}


                >
                  Add Workout
                </button>
              </div>
              <div>
                <button
                  className="bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
                  type="button"
                  onClick={() => removeSection(sectionIndex)}
                >
                  Remove Day
                </button>
              </div>
              <div>
                <button
                  className="bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
                  type="button"
                  onClick={() => duplicateDay(sectionIndex)}
                >
                  Duplicate Day
                </button>
              </div>
            </div>

            {section.subSections.map((subSection, subSectionIndex) => (
              <div key={subSectionIndex}>
                <div className="flex lg:flex-row md:flex-col flex-col justify-between">
                  <div className="flex flex-col w-1/3">
                    <input
                      className=" text-black font-bold py-2 px-4 rounded mb-2 border-2 border-black"
                      name="workoutname"
                      placeholder="Workout Name"
                      onChange={(event) =>
                        handleFormChange(event, sectionIndex, subSectionIndex)
                      }
                      value={subSection.workoutname}
                    />
                    <input
                      className=" text-black font-bold py-2 px-4 rounded mb-2 border-2 border-black"
                      name="url"
                      placeholder="Video Url"
                      onChange={(event) =>
                        handleFormChange(event, sectionIndex, subSectionIndex)
                      }
                      value={subSection.url}
                    />
                    <button
                      className="bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
                      type="button"
                      onClick={() =>
                        removeSubSection(sectionIndex, subSectionIndex)
                      }
                    >
                      Remove Workout
                    </button>
                  </div>
                  <div className="flex flex-col w-1/4">
                    <input
                      className=" text-black font-bold py-2 px-4 rounded mb-2 border-2 border-black"
                      name="reps"
                      placeholder="Reps"
                      onChange={(event) =>
                        handleFormChange(event, sectionIndex, subSectionIndex)
                      }
                      value={subSection.reps}
                    />

                    <input
                      className=" text-black font-bold py-2 px-4 rounded mb-2 border-2 border-black"
                      name="sets"
                      placeholder="Sets"
                      onChange={(event) =>
                        handleFormChange(event, sectionIndex, subSectionIndex)
                      }
                      value={subSection.sets}
                    />

               

<input
  placeholder={`Day ${sectionIndex + 1}`}
  className="text-black font-bold text-sm py-2 px-4 rounded mb-2 border-2 border-black"
  name='days'
  onChange={(event) => handleFormChange(event, sectionIndex, subSectionIndex)}
  value={formSections[sectionIndex].subSections[subSectionIndex].days || `Day ${sectionIndex + 1}`}
/>





                    <select
                    
                      className="text-black font-bold text-sm py-2 px-4 rounded mb-2 border-2 border-black"
                      name="intensity"
                      onChange={(event) =>
                        handleFormChange(event, sectionIndex, subSectionIndex)
                      }
                      value={subSection.intensity}
                    >
                      <option value="50%">50% of 1 RM</option>
                      <option value="60%">60% of 1 RM</option>
                      <option value="70%">70% of 1 RM</option>
                      <option value="75%">75% of 1 RM</option>
                      <option value="80%">80% of 1 RM</option>
                      <option value="85%">85% of 1 RM</option>
                      <option value="90%">90% of 1 RM</option>
                      <option value="95%">95% of 1 RM</option>
                      <option value="100%">100% of 1 RM</option>

                      {/* Add other options as needed */}
                    </select>
                  </div>

                  <textarea
                    className=" text-black font-bold py-2 px-4 rounded mb-2 border-2 border-black"
                    name="comments"
                    placeholder="Comments"
                    onChange={(event) =>
                      handleFormChange(event, sectionIndex, subSectionIndex)
                    }
                    value={subSection.comments}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
        <button
          className="bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
          type="button"
          onClick={addSection}
        >
          Add Day
        </button>
        <br />
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
