import { fetchDataWorkouts } from '@/api/getworkouts';
import ShowallWorkouts from '@/components2/allWorkouts';
import { AllWorkouts } from "@/types";
import Image from 'next/image';

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const id = searchParams['ref'] as string;
console.log(id);
const inputParams = JSON.parse(id)
      return (
        <>
         
          <ShowallWorkouts params={inputParams}/>
        </>
      );
    
  return <span>Loading...</span>; // Or any other loading indicator
}
