// src/app/page.tsx

"use client";

import React from "react";
import BlogList from "../components/Blog/BlogList";
import { blogPosts } from "../helper/data";
import ImageCarousel from "@/components/CustomersInfo/ImageCarousel";
import GoogleLoginHandler from "@/components/GoogleLoginHandler";

const Home = () => {
  return (
    <div>
      {/* <BlogList blogPosts={blogPosts} />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl text-center mt-10 mb-10">
          Welcome to My Next.js App
        </h1>
        <ImageCarousel />
        <GoogleLoginHandler />
      </div> */}
    </div>
  );
};

export default Home;
