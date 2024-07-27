
"use client"; // Ensures this component is client-side

import React from "react";
import Login from "@/components/login/Login";
import SignUp from "@/components/signUp/SignUp";
import ForgetPass from "@/components/forgetPass/ForgetPass";
import ServicesCards from "@/components/servicesCards/ServicesCards";

const Home = () => {
  return <div>
    <ServicesCards/>
  </div>;
};

export default Home;
