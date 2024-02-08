// pages/index.js

import MyForm from "@/components2/logincomponents/loginForm";

import { register } from "@/api/registeruser";
import Login from "@/components2/logincomponents/actualLoginForm";

const Home = async () => {
  //const res = await register();
  //console.log(res);
  return (
    <div className="formdiv">
   
      <Login />
    </div>
  );
};

export default Home;
