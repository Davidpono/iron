import { fetchDataWorkouts } from '@/api/getworkouts';
import ShowallWorkouts from '@/components/allWorkouts';
import { AllWorkouts } from "@/types";
import Image from 'next/image';

export default async function Home() {

      return (
        <>
          <ShowallWorkouts />
        </>
      );
    
  return <span>Loading...</span>; // Or any other loading indicator
}
