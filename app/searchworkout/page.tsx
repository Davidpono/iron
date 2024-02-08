
import { ProfileForm } from '@/components/profilecomponent/makeWorkout';
import { SearchWorkout } from '@/components/profilecomponent/searchWorkout';



export default async function Home({
  
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) 


{
  const id = searchParams['ref'] as string;
      return (
        <>
        <div className="formdiv">
    <SearchWorkout/>  
    </div>
       </>
      );
    
  return <span>Loading...</span>; // Or any other loading indicator
}
