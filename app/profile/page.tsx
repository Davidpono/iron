"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUser } from "@/api/getuserprofile";
import { UserProfile } from "@/components/profile/userProfile";

const IndividualWorkout = ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const router = useRouter();
  const [userProfile, setUserProfile] = useState(null);


  useEffect(() => {
    const id = searchParams['ref'] as string;

    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/login'); // Redirect to login page if token is not found
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const res = await getUser(token);
        setUserProfile(res);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [searchParams, router]);

  if (!userProfile) {
    return <span>Loading...</span>; // Or any other loading indicator
  }

  return (
    <>
      <UserProfile userprofile={userProfile} />
    </>
  );
};

export default IndividualWorkout;
