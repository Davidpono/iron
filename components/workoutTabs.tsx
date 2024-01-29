"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import { postDataToApi } from "@/api/makeWorkout";
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, useEffect, useRef } from "react";
 


export function WorkoutTabs(params:any ) {


  return (
  <>
  <Tabs defaultValue="account" className="w-[400px]">

  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>

  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>

</Tabs>

  
  
  </>
  );
}
