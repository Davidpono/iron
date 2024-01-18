import { fetchindividualWorkout } from '@/api/getindividualworkout';
import { fetchDataWorkouts } from '@/api/getworkouts';
import ShowallWorkouts from '@/components/allWorkouts';
import IndividualWorkouts from '@/components/individualWorkouts';
import { AllWorkouts } from "@/types";
import Image from 'next/image';


  export default async function IndividualWorkout({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
    const id = searchParams['ref'] as string;
  console.log(id);
  //const response = await fetchindividualWorkout();
  //console.log("response",response);
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
