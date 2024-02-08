
import { ProfileForm } from '@/components/profilecomponent/makeWorkout';



export default async function Home() {

      return (
        <>
        <div className="formdiv">
    <ProfileForm/>  
    </div>
       </>
      );
    
  return <span>Loading...</span>; // Or any other loading indicator
}
