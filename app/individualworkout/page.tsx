import { fetchindividualWorkout } from '@/api/getindividualworkout';
import { fetchDataWorkouts } from '@/api/getworkouts';
import ShowallWorkouts from '@/components2/allWorkouts';
import IndividualWorkouts from '@/components2/individualWorkouts';
import { AllWorkouts } from "@/types";
import Image from 'next/image';


  export default async function IndividualWorkout({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
    const id = searchParams['ref'] as string;
  console.log(id);

      return (
        <>

         <span>
          <IndividualWorkouts id={id} />
            we made it
        </span>

        </>
      );
    
  return <span>Loading...</span>; // Or any other loading indicator
}
