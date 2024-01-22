"use client";

import { postDataToApi } from '@/api/makeWorkout';
import React, { useState, ChangeEvent } from 'react';

type Section = {
  dayname: string;
  subSections: {
    workoutname: string;
    reps: string;
    sets: string;
    url: string;
    comments:string;
    intensity:string,
    days: string,
  }[];
};
type Details = {
  splitnamename: string;
  thumbnailURL: string;
  days: string;
  levels: string;
  goals: string;
  conentration: string;
};
export function ProfileForm() {
  const [formSections, setFormSections] = useState<Section[]>([{ dayname: '', subSections: [{ reps: '', sets: '', workoutname: '', url: '', comments: '', intensity: '', days: '' }] }]);
  const [formDetails, setFormDetails] = useState<Details>({
    splitnamename: '',
    thumbnailURL: '',
    days: '',
    levels: '',
    goals: '',
    concentration: '',
  });

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>, sectionIndex: number, subSectionIndex: number) => {
    const updatedSections = [...formSections];
    if (event.target.name === 'Day name') {
      updatedSections[sectionIndex].dayname = event.target.value;
    } else {
      updatedSections[sectionIndex].subSections[subSectionIndex][event.target.name] = event.target.value;
    }
    setFormSections(updatedSections);
  };

  const handleDetailsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [event.target.name]: event.target.value,
    }));
  };

  const addSection = () => {
    setFormSections((prevSections) => [...prevSections, { dayname: '', subSections: [{ reps: '', sets: '', workoutname: '', url: '', comments: '', intensity: '', days: '' }] }]);
  };

  const addSubSection = (sectionIndex: number) => {
    setFormSections((prevSections) => {
      const updatedSections = [...prevSections];
      updatedSections[sectionIndex].subSections.push({ reps: '', sets: '', workoutname: '', url: '', comments: '', intensity: '', days: '' });
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

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Assuming formDetails and formSections are defined

    // Transforming the bigform structure
    const transformedForm = {
      "Days": formDetails.days,
      "Levels": formDetails.levels,
      "Concentration": formDetails.concentration,
      "Goals": formDetails.goals,
      "Name": formDetails.splitnamename,
      "thumbnailURL": formDetails.thumbnailURL,
    };

    // Create dynamic sectionsections based on formSections
    formSections.forEach((section, index) => {
      const sectionName = `sectionsection${index + 1}`;
      transformedForm[sectionName] = section.subSections.map(subSection => ({
        "dayname": section.dayname,
        "workouts": [{
          "workoutname": subSection.workoutname,
          "days": subSection.days,
          "intensity": subSection.intensity,
          "sets": subSection.sets,
          "reps": subSection.reps,
          "url": subSection.url,
          "comments": subSection.comments
        }]
      }));
    });

    console.log('Transformed Form:', transformedForm);

    try {
      const res = await postDataToApi(transformedForm);
      console.log('API Response:', res);
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    console.log('Form Sections:', formSections);
    console.log('Form Details:', formDetails);
  };

  return (
    <div className="App"> 
      <form onSubmit={submit}>
        <input
          name='splitnamename'
          placeholder='Name'
          onChange={handleDetailsChange}
          value={formDetails.splitnamename}
        />
        <input
          name='thumbnailURL'
          placeholder='ThumbnailURL'
          onChange={handleDetailsChange}
          value={formDetails.thumbnailURL}
        />
        <input
          name='days'
          placeholder='1'
          onChange={handleDetailsChange}
          value={formDetails.days}
        />
        <input
          name='levels'
          placeholder='Levels'
          onChange={handleDetailsChange}
          value={formDetails.levels}
        />
        <input
          name='goals'
          placeholder='Goals'
          onChange={handleDetailsChange}
          value={formDetails.goals}
        />
          <input
          name='conentration'
          placeholder='conentration'
          onChange={handleDetailsChange}
          value={formDetails.conentration}
        />

        {formSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <button onClick={() => addSubSection(sectionIndex)}>Add Workout</button>
            <button onClick={() => removeSection(sectionIndex)}>Remove Day</button>
            <button onClick={() => duplicateDay(sectionIndex)}>Duplicate Day</button>
            <input
              name='Day name'
              placeholder='Day Name'
              onChange={(event) => handleFormChange(event, sectionIndex, 0)}
              value={formSections[sectionIndex].dayname}
            />
            
            {section.subSections.map((subSection, subSectionIndex) => (
              <div key={subSectionIndex}>
                <button onClick={() => removeSubSection(sectionIndex, subSectionIndex)}>Remove Workout</button>
                <input
                  name='workoutname'
                  placeholder='Workout Name'
                  onChange={(event) => handleFormChange(event, sectionIndex, subSectionIndex)}
                  value={subSection.workoutname}
                />
                <input
                  name='reps'
                  placeholder='Reps'
                  onChange={(event) => handleFormChange(event, sectionIndex, subSectionIndex)}
                  value={subSection.reps}
                />
                <input
                  name='sets'
                  placeholder='Sets'
                  onChange={(event) => handleFormChange(event, sectionIndex, subSectionIndex)}
                  value={subSection.sets}
                />
                <input
                  name='url'
                  placeholder='Video Url'
                  onChange={(event) => handleFormChange(event, sectionIndex, subSectionIndex)}
                  value={subSection.url}
                />
                 <input
                  name='comments'
                  placeholder='Comments'
                  onChange={(event) => handleFormChange(event, sectionIndex, subSectionIndex)}
                  value={subSection.comments}
                />
                 <input
                  name='intensity'
                  placeholder='Intensity'
                  onChange={(event) => handleFormChange(event, sectionIndex, subSectionIndex)}
                  value={subSection.intensity}
                />
                       <input
                  name='days'
                  placeholder='days'
                  onChange={(event) => handleFormChange(event, sectionIndex, subSectionIndex)}
                  value={subSection.days}
                />
              </div>
            ))}
          </div>
        ))}
        <button onClick={addSection}>Add Day</button>
        <br />
        <button type="button" onClick={submit}>Submit</button>

      </form>
    </div>
  );
}
