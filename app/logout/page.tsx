"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const logout = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if localStorage is available (client-side)
    if (typeof window !== 'undefined') {
      // Access localStorage only on the client-side
      if(localStorage.getItem('token')) {
        localStorage.removeItem('token');
         // Redirect to login page after logout
      }
    }
    router.replace('/login');
  }, []); // Run this effect only once after component mounts

  return null; // No need to render anything for logout process
};

export default logout;
