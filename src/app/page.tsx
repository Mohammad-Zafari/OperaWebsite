
"use client"; // Ensures this component is client-side

import React from "react";
import Login from "@/components/login/Login";
import SignUp from "@/components/signUp/SignUp";

const Home = () => {
  return <div>
    {/* <Login/> */}
    <SignUp/>
  </div>;
};

export default Home;
