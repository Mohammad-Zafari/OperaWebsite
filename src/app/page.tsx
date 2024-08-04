// src/app/page.tsx
"use client";

import React from "react";
import BlogList from "../components/Blog/BlogList";
import { blogPosts } from "../helper/data";
import ImageCarousel from "@/components/CustomersInfo/ImageCarousel";
import GoogleLoginHandler from "@/components/GoogleLoginHandler";import Hero from "@/components/hero/Hero";
import ServicesCards from "@/components/servicesCards/ServicesCards";
import BlogPages from "@/components/blogPages/BlogPages";
import AboutUsVideo from "@/components/aboutUsVideo/AboutUsVideo";
import Cards from "../components/Cards/Cards";
import ContactUs from "../components/ContactUs/ContactUsLanding";
import Footer from "../components/Footer";
import ContactUsPage from "../components/ContactUs/ContactUsPage";
import Navbar from "@/components/Navbar/Navbar";
import Footer2 from "@/components/Footer";
import { NavbarResponsive } from "@/components/Navbar/NavbarResponsive";
import ContactUsLanding from "../components/ContactUs/ContactUsLanding";
import ContactUsMain from "@/components/ContactUs/ContactUsMain";
const Home = () => {
  return (
    <div className="font-vazir">
      <Navbar/>
      <Hero/>
      <ServicesCards/>
      <Cards/>
      <BlogList blogPosts={blogPosts}/>
      <ImageCarousel/>
      <AboutUsVideo/>
      <ContactUsLanding/>
      <Footer/>
    </div>
  );
};

export default Home;
