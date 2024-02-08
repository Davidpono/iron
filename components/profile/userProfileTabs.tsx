import { updateUserbasic } from "@/api/updateuserprofile";
import { useState } from "react"; // Import useState hook for managing component state
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { updateuserrestdays } from "@/api/updateuserrestdays";
 
export function UserProfileTabs(userprofile:any) {
  // Destructure userprofile props to access user data
  const { username, age, email, firstname, lastname } = userprofile.userprofile.userprofile.user;
  const { restmonday, resttuesday, restwednesday, restthursday, restfriday, restsaturday, restsunday } = { restmonday: '', resttuesday: '', restwednesday: '', restthursday: '', restfriday: '', restsaturday: '', restsunday: '' };

  // State variables for managing form data
  const [updatedUsername, setUpdatedUsername] = useState(username);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedAge, setUpdatedAge] = useState(age);
  const [updatedFirstname, setUpdatedFirstname] = useState(firstname); // Updated state variable name
  const [updatedLastname, setUpdatedLastname] = useState(lastname); // Updated state variable name
  const [restdayMonday, setrestdatMonday] = useState(restmonday); // Updated state variable name
  const [restdayTuesday, setrestdatTuesday] = useState(resttuesday); // Updated state variable name
  const [restdayWednesday, setrestdatWednesday] = useState(restwednesday); // Updated state variable name
  const [restdayThursday, setrestdatThursday] = useState(restthursday); // Updated state variable name
  const [restdayFriday, setrestdatFriday] = useState(restfriday); // Updated state variable name
  const [restdaySaturday, setrestdatSaturday] = useState(restsaturday); // Updated state variable name
  const [restdaySunday, setrestdatSunday] = useState(restsunday); // Updated state variable name

  const token = localStorage.getItem('token');

  // Function to handle updating user profile
  const handleUpdateUser = async () => {
    try {
      // Call updateUser function with updated data
      await updateUserbasic({
        user_id: token, // Replace with actual user ID
        username: updatedUsername,
        email: updatedEmail,
        age: updatedAge,
        firstname: updatedFirstname, // Pass updated first name
        lastname: updatedLastname, // Pass updated last name
      });
      console.log('User profile updated successfully');
    } catch (error:any) {
      console.error('Failed to update user profile:', error.message);
    }
  };
  const handleUpdaterestdays = async () => {
    try {
      // Call updateUser function with updated data
      console.log('restdaylist', restdayMonday, restdayTuesday, restdayWednesday, restdayThursday, restdayFriday, restdaySaturday, restdaySunday)
      await updateuserrestdays({
        user_id: token,
        restmonday: restdayMonday,
        resttuesday: restdayTuesday,
        restwednesday: restdayWednesday,
        restthursday: restdayThursday,
        restfriday: restdayFriday,
        restsaturday: restdaySaturday,
        restsunday: restdaySunday
      });
      console.log('User profile updated successfully');
    } catch (error:any) {
      console.error('Failed to update user profile:', error.message);
    }
  };

  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Workout</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 w-full">
            <div className="space-y-1">
              <Label htmlFor="name">Username</Label>
              <Input id="username" value={updatedUsername} onChange={(e) => setUpdatedUsername(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="age">Age</Label>
              <Input id="age" value={updatedAge} onChange={(e) => setUpdatedAge(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" value={updatedFirstname} onChange={(e) => setUpdatedFirstname(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" value={updatedLastname} onChange={(e) => setUpdatedLastname(e.target.value)} />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleUpdateUser}>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password" className="w-full">
        <Card  className="w-full">
          <CardHeader>
            <CardTitle>Workout</CardTitle>
            <CardDescription>
              Select Your Rest Days
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 w-full">


          <RadioGroup className="w-full">
  <div className="flex items-center space-x-2">
    <input
      type="radio"
      id="monday"
      value="Monday"
      checked={restdayMonday === 'Monday'}
      onChange={(e) => setrestdatMonday(e.target.value)}
    />
    <label htmlFor="monday">Monday</label>
  </div>
</RadioGroup>
<RadioGroup>
  <div className="flex items-center space-x-2">
    <input
      type="radio"
      id="tuesday"
      value="Tuesday"
      checked={restdayTuesday === 'Tuesday'}
      onChange={(e) => setrestdatTuesday(e.target.value)}
    />
    <label htmlFor="tuesday">Tuesday</label>
  </div>
</RadioGroup>

<RadioGroup>
  <div className="flex items-center space-x-2">
    <input
      type="radio"
      id="wednesday"
      value="Wednesday"
      checked={restdayWednesday === 'Wednesday'}
      onChange={(e) => setrestdatWednesday(e.target.value)}
    />
    <label htmlFor="wednesday">Wednesday</label>
  </div>
</RadioGroup>

<RadioGroup>
  <div className="flex items-center space-x-2">
    <input
      type="radio"
      id="thursday"
      value="Thursday"
      checked={restdayThursday === 'Thursday'}
      onChange={(e) => setrestdatThursday(e.target.value)}
    />
    <label htmlFor="thursday">Thursday</label>
  </div>
</RadioGroup>

<RadioGroup>
  <div className="flex items-center space-x-2">
    <input
      type="radio"
      id="friday"
      value="Friday"
      checked={restdayFriday === 'Friday'}
      onChange={(e) => setrestdatFriday(e.target.value)}
    />
    <label htmlFor="friday">Friday</label>
  </div>
</RadioGroup>

<RadioGroup>
  <div className="flex items-center space-x-2">
    <input
      type="radio"
      id="saturday"
      value="Saturday"
      checked={restdaySaturday === 'Saturday'}
      onChange={(e) => setrestdatSaturday(e.target.value)}
    />
    <label htmlFor="saturday">Saturday</label>
  </div>
</RadioGroup>

<RadioGroup>
  <div className="flex items-center space-x-2">
    <input
      type="radio"
      id="sunday"
      value="Sunday"
      checked={restdaySunday === 'Sunday'}
      onChange={(e) => setrestdatSunday(e.target.value)}
    />
    <label htmlFor="sunday">Sunday</label>
  </div>
</RadioGroup>




         
          </CardContent>
          <CardFooter>
            <Button onClick={handleUpdaterestdays}>Save preferences</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
