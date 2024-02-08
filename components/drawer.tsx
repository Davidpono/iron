import * as React from "react"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"



export function DrawerDemo(data:any) {
  console.log("from drawer",data, "index",data.index)
  console.log("sectionamount",Object.keys(data.sectionsection).length)
  
  let sectionbtouse;
  let sectionbtouse2;
  console.log("data1",data.index, data.data1,data.restdaylist)
  let workoutdays2 = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  for (let key in data.restdaylist) {
    if (data.restdaylist[key] !== "") {
        workoutdays2 = workoutdays2.filter(day => day !== data.restdaylist[key]);
    }
}

console.log("workoutdays:", workoutdays2);
  let workoutdays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (!data.resdaylist) {
    let workoutdays2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  }
  let amountofworkouts=Object.keys(data.sectionsection).length
  let sizeOfWorkoutdays = workoutdays2.length;
  console.log("sizeOfWorkoutdays",sizeOfWorkoutdays,"amountofworkouts",amountofworkouts)
  if(sizeOfWorkoutdays<amountofworkouts){
    // Get the keys of the object
// Get the keys of the object
let keys = Object.keys(data.sectionsection);

// Split the keys into two halves
let halfLength = Math.ceil(keys.length / 2);
let firstHalfKeys = keys.slice(0, halfLength);
let secondHalfKeys = keys.slice(halfLength);

// Create two new objects for each half
let firstHalf:any = {};
let secondHalf:any = {};

// Populate the first and second half objects
firstHalfKeys.forEach(key => {
    firstHalf[key] = data.sectionsection[key];
});

secondHalfKeys.forEach(key => {
    secondHalf[key] = data.sectionsection[key];
});

console.log("First half:", firstHalf);
console.log("Second half:", secondHalf);
let i=0
let y=0 

if (data.index % 2 != 0){
  console.log("First half: woooooo", firstHalf);
for (let key in firstHalf){

  if (data.data1 == workoutdays2[i] ) {
   
    sectionbtouse = firstHalf[key];
    break
  }
  else{
    sectionbtouse= "no workout"
  }
  y+=1
  i+=1
  if (i == 8) {
    i=0
  }
}
}

if (data.index % 2 == 0){
  console.log("Second half: woooooo", secondHalf);
  for (let key in secondHalf){
    
    if (data.data1 == workoutdays2[i] ) {
      
      sectionbtouse = secondHalf[key];
      break
    }
    else{
      sectionbtouse= "no workout"
    }
    y+=1
    i+=1
    if (i == 8) {
      i=0
    }
  }
  
}

console.log("Selected section weee:", sectionbtouse);

} else{

  let i=0
  let y=0
  for (let key in data.sectionsection){

    if (data.data1 == workoutdays2[i] ) {
     
      sectionbtouse = data.sectionsection[key];
      break
      
   
    }
    else{
      sectionbtouse= "no workout"
    }
    y+=1
    i+=1
    if (i == 8) {
      i=0
    }
  }
}

// Add more conditions for other days as needed
console.log("Selected section:", sectionbtouse);



  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full h-full" style={{backgroundColor: 'black', color: 'white',}}>
  
          
          <div className="flex flex-row justify-center items-center gap-2">
          <div>
          <span className="text-xl"> {data.data.match(/\d{2}$/)?.[0] || ""}</span> </div> <div className="flex flex-col"> <span className="hidden lg:block">{data.data1} </span>  <span className="hidden lg:block">{sectionbtouse[0].dayname}</span> </div>
          </div>
          
          </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
     
          </DrawerHeader>
          <div className=" bg-yellow-200" style={{  borderBottom: '.05rem solid blue', height: '55px' }}>
          <DrawerTitle>{sectionbtouse[0].dayname}</DrawerTitle>       
                          </div>
          {sectionbtouse === "no workout" ? (
    <h1>No workout today</h1>
    ) : (
      sectionbtouse.map((item: any, index: number) => (
          <div key={index}>
            
              {item.workouts.map((workout: any, workoutIndex: number) => (
                  <div key={workoutIndex}>
                      {/* Render each workout here */}
                      <div className="flex flex-row gap-1 bg-yellow-200">
                      
                         
                          <div className="flex flex-row gap-2" style={{ borderBottom: '.05rem solid blue',borderRight: '.05rem solid red', width: '55px' }}>
                            </div>
                      <div className="flex flex-row gap-2" style={{ borderLeft: '.05rem solid red', borderBottom: '.05rem solid blue', height: '55px', width: '100%' }}>
                    
                      <p className="text-sm">{workout.workoutname}</p>
                      <p className="text-sm">Sets:{workout.sets}</p>
                      <p className="text-sm">Reps: {workout.reps}</p>
                      <p  className="text-sm">Intensity:{workout.intensity}</p>
                      </div>
                      </div>
                      </div>
               
              ))}
          </div>
      ))
  )}

     
     
          <DrawerFooter>
 
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
