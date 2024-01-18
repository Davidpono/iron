// pages/index.js

import MyForm from "@/components/logincomponents/loginForm";

import { register } from "@/api/registeruser";

const Home = async () => {
  
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <MyForm />
    </div>
  );
};

export default Home;
