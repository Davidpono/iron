"use client";
import { useState, useEffect } from 'react';

import { addUserWorkout } from '@/api/updateuserworkouts';
export default function SaveWorkoutBut({ id, name }: { id: any, name: any }) {
    const [token, setToken] = useState<string | null>(null); // Specify the type explicitly

    useEffect(() => {
        // Fetch token from localStorage when component mounts
        const tokenFromStorage = localStorage.getItem('token');
        setToken(tokenFromStorage); // Set the token to the value retrieved from localStorage
    }, []);

    const addworkout = async () => {
        // Implement your logic to add the workout here
        const res= await addUserWorkout(token, id.id, name)
        console.log(token, id.id, name);
        console.log(res)
    }


    return (
        <div className="hoverbutton-div">
            <button onClick={addworkout}>Add Workout</button>
          
            {/* Uncomment the following line to fetch individual workout data */}
            {/* <button onClick={() => fetchIndividualWorkout(id)}>Fetch Workout</button> */}
        </div>
    );
}
