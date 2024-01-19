// import statements...
"use client";
import { register } from "@/api/registeruser";
import { useState } from "react";
import { useRouter } from 'next/navigation';

import Link from "next/link";
import path from "path";
import { redirect } from "next/navigation";

const url = 'https://discoveri.azurewebsites.net/api/register/';

const Register = () => {
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
      console.log("weclicked");
      const registrationData = {
        email: formData.email,
        username: formData.name,
        password: formData.password,
      };
  
      const registerRes: any = await register(registrationData);
  
      // Wait for 1000 milliseconds (if needed)
      // await new Promise(resolve => setTimeout(resolve, 1000));
  
      console.log('Registration response:', registerRes);
      console.log('Form submitted:', formData);
      
      // Redirect to login page with the registration response as a query parameter
      router.push(`/profile?ref=${registerRes}`);
    
    } catch (error) {
      console.error('Error during form submission:', error);
    }
    
    
     
    
   

  };
  

  return (
    <div className="flex justify-center">
      
    <form onSubmit={handleSubmit} className=" flex flex-col  border-2 border-black rounded-lg lg:w-1/5 md:w-2/3 sm:w-3/5">
    <div>
    <h1 className="text-3xl font-bold mb-4">Register.</h1>
    </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="border-2 border-black rounded-lg lg:w-5/6">
      
     
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="border-0 border-transparent rounded-lg h-10 w-full  hover:scale-115"/>
      
      </div>
      <div className="border-2 border-black rounded-lg lg:w-5/6">
   
       
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="border-0 border-transparent rounded-lg h-10 w-full"/>
      
      </div>
      <div className="border-2 border-black rounded-lg lg:w-5/6">

      
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Your Password " className="border-0 border-transparent rounded-lg h-10 w-full"/>
 
      </div>
      <div className="border-2 border-black rounded-lg  lg:w-5/6">
   
        <input type="password" name="password2" value={formData.password} onChange={handleChange} placeholder="Confirm Password" className="border-0 border-transparent rounded-lg h-10 w-full" />
   </div>
     <div className="flex justify-center">
      <button type="submit" className="bg-black hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Submit</button>
      </div>
      <h1 className="text-md  mb-4 ">Already have an account? 
      <Link
       href="/login"> <span className="text-md font-bold mb-4 hover:underline hover:text-blue-500">Login</span></Link>
      
      </h1>
      </div>
    </form>
    </div>
  );
};

export default Register;
