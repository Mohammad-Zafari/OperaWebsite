// src/app/page.tsx
"use client";

import React from "react";
import BlogList from "../components/Blog/BlogList";
import { blogPosts } from "../helper/data";
import ImageCarousel from "@/components/CustomersInfo/ImageCarousel";
import Hero from "@/components/hero/Hero";
import ServicesCards from "@/components/servicesCards/ServicesCards";
import AboutUsVideo from "@/components/aboutUsVideo/AboutUsVideo";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ContactUsLanding from "../components/ContactUs/ContactUsLanding";
const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div id="container" className="bg-[url('/ascdvfv.svg')] bg-cover shadow-[0px_-70px_100px_15px]">
      <ServicesCards/>
      <Cards/>
      <BlogList blogPosts={blogPosts}/>
      <ImageCarousel/>
      <AboutUsVideo/>
      <ContactUsLanding/>
      <div id="footerContainer" className="bg-[url('/Group-8738.svg')] bg-cover pt-16 pb-1">
        <Footer/>
      </div>
    </div>
    </>
  );
};

export default Home;
