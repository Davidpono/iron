// pages/index.js

import MyForm from "@/components/logincomponents/loginForm";

import { register } from "@/api/registeruser";
import Login from "@/components/logincomponents/actualLoginForm";

const Home = async () => {
  //const res = await register();
  //console.log(res);
  return (
    <div>
   
      <Login />
    </div>
  );
};

export default Home;
