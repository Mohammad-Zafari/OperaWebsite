"use client"; // Ensures this component is client-side

import React from "react";
import Carts from "../components/carts/carts";
import ContactUs from "../components/contactUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Carts />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
