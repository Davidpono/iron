// pages/index.js

import MyForm from "@/components2/logincomponents/loginForm";
import Navbar from "@/components2/navbar/navbar";

const Home = async () => {
  //const res = await register();
  //console.log(res);
  return (
    <>

     
      
     <Navbar />
       <MyForm />

    </>
  );
};

export default Home;
