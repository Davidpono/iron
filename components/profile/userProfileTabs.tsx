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

export function UserProfileTabs(userprofile:any) {
  // Destructure userprofile props to access user data
  const { username, age, email, firstname, lastname } = userprofile.userprofile.userprofile.user;

  // State variables for managing form data
  const [updatedUsername, setUpdatedUsername] = useState(username);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedAge, setUpdatedAge] = useState(age);
  const [updatedFirstname, setUpdatedFirstname] = useState(firstname); // Updated state variable name
  const [updatedLastname, setUpdatedLastname] = useState(lastname); // Updated state variable name
  
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

  return (
    <Tabs defaultValue="account" className="w-[200px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
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
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
