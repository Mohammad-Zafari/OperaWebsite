"use client"; // Ensures this component is client-side

import React from "react";
import Carts from "../components/Carts/Carts";
import ContactUs from "../components/ContactUs/ContactUsLanding";
import Footer from "../components/Footer";
import ContactUsPage from "../components/ContactUs/ContactUsPage";
import Navbar from "@/components/Navbar/Navbar";
import Footer2 from "@/components/Footer";
const Home = () => {
  return (
    <div className=" flex justify-center items-center border font-vazir">
      {/* <Navbar/> */}
      {/* <Carts />
      <ContactUs />
      <Footer /> */}
      <ContactUsPage />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
