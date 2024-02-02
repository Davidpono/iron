// import statements...
"use client";
import { register } from "@/api/registeruser";
import { useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';

import Link from "next/link";
import { login } from "@/api/loginuser";
const url = 'https://discoveri.azurewebsites.net/api/register/';

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    try {
      
      const registrationData = {
        email: formData.email,
        password: formData.password,
      };
  
      // Assuming register() is an asynchronous function
      const registerRes = await login(registrationData);
      console.log('Registration response:', registerRes.user_id);
  
      console.log('Form submitted:', formData);
      router.push(`/profile`);
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };
  

  return (
    <div className="flex justify-center ">
      
    <form onSubmit={handleSubmit} className="border-2 border-black rounded-lg lg:w-1/5 md:w-2/3 sm:w-3/5 whitebgdiv">
    <div>
    <h1 className="text-3xl font-bold mb-4">Login.</h1>
    </div>
      <div className="flex flex-col gap-4 items-center justify-center">
      <div className="border-2 border-black rounded-lg lg:w-5/6">
   
       
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="border-0 border-transparent rounded-lg h-10 w-full"/>
      
      </div>
      <div className="border-2 border-black rounded-lg lg:w-5/6">

      
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Your Password " className="border-0 border-transparent rounded-lg h-10 w-full"/>
 
      </div>
    
     <div className="flex justify-center">
      <button type="submit" className="bg-black hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Login</button>
      </div>
     
      </div>
    </form>
    </div>
  );
};

export default Login;
