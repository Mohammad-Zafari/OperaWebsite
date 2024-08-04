"use client"; // Ensures this component is client-side

import React from "react";
import Hero from "@/components/hero/Hero";
import ServicesCards from "@/components/servicesCards/ServicesCards";
import BlogPages from "@/components/blogPages/BlogPages";
import AboutUsVideo from "@/components/aboutUsVideo/AboutUsVideo";

const Home = () => {
  return (
    <div>
      {/* <Hero/>
      <ServicesCards/>
      <AboutUsVideo/> */}
      <BlogPages/>  
    </div>
  );
};

export default Home;
