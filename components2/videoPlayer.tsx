"use client";
import React from 'react'
import ReactPlayer from 'react-player'
  
export default function VideoPlayer( url:any){ 
  
  return ( 
    <div> 

      <ReactPlayer url={url.url} /> 
    </div> 
  ) 
} 