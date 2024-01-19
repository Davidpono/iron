import { fetchDataWorkouts } from '@/api/getworkouts';
import { ProfileForm } from '@/components/profilecomponent/makeWorkout';
import ShowallWorkouts from '@/components2/allWorkouts';

import { AllWorkouts } from "@/types";
import Image from 'next/image';

export default async function Home() {

      return (
        <>
    <ProfileForm/>  
       </>
      );
    
  return <span>Loading...</span>; // Or any other loading indicator
}
