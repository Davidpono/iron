"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUser } from "@/api/getuserprofile";
import { UserProfile } from "@/components/profile/userProfile";
import Calendar from '@/components/calendar/calendarComponent';

const Call = ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {

    const id = searchParams['ref'] as string;



  return (
    <>
     <Calendar/>
    </>
  );
};

export default Call;
