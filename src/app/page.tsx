
"use client"; // Ensures this component is client-side

import React from "react";
import Login from "@/components/login/Login";
import SignUp from "@/components/signUp/SignUp";
import ForgetPass from "@/components/forgetPass/ForgetPass";

const Home = () => {
  return <div>
    <ForgetPass />
    {/* <Login/> */}
    {/* <SignUp/> */}
  </div>;
};

export default Home;
