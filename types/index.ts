export interface AllWorkouts {
    [x: string]: any;
    _id: string;
    Days: string;
    Levels: string;
    Concentration: string;
    Goals: string;
    Name: string;
    ThumbnailURL: string;
    // Specific property for dynamic sectionsections
    sectionsections: {
      [section: string]: WorkoutSection[];
    };
  
    // Properties for static sections
    section1: { dayname: string }[];
    section2: { dayname: string }[];
    section3: { dayname: string }[];
    // Add more sections as needed
  }
  
  export interface WorkoutSection {
    workoutname: string;
    days: string;
    intensity: string;
    sets: string;
    reps: string;
    url: string;
    comments: string;
  }
  