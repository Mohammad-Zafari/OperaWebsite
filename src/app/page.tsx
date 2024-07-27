"use client"; // Ensures this component is client-side

import React from "react";
import Hero from "@/components/hero/Hero";
import ServicesCards from "@/components/servicesCards/ServicesCards";

const Home = () => {
  return <div>
    <Hero/>
    <ServicesCards/>
  </div>;
};

export default Home;
