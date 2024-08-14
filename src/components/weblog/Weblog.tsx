"use client";
import React from "react";
import WeblogCards from "@/components/weblog/WeblogCards";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

interface BlogPost {
  id: string;
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

interface BlogListProps {
  blogPosts: BlogPost[];
}

const Weblog: React.FC<BlogListProps> = ({ blogPosts }) => {
  console.log(blogPosts);
  return (
    <>
    <Navbar/>
    <div
      id="weblog-container"
      className=" bg-gradient-to-b py-4 to-yellow-800 from-violet-700"
      dir="rtl"
    >
      <div id="weblog-hero" className="shadow-xl flex-col text-center py-32 pt-52">
        <h1 id="weblog-title" className="text-white text-3xl p-2">
          به وبلاگ ما خوش آمدید
        </h1>
        <p id="weblog-subtitle" className="text-yellow-200 p-2">
          کاوش در هوش مصنوعی: از مبانی تا پیشرفته‌ترین کاربردها
        </p>
      </div>
      <div
        id="weblog-body"
        data-AOS="fade-up"
        className="px-2 min-[460px]:px-16 sm:px-4 md:px-16 lg:px-20 xl:px-40 2xl:px-80 py-20 text-2xl "
      >
        <h2
          id="weblog-body-title"
          className="w-fit text-white p-2 border-b-2 border-gray-400"
        >
          آخرین مطالب
        </h2>
        <div
          id="weblog-cards-container"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center py-4"
        >
          {[...blogPosts].reverse().map((post) => (
            <WeblogCards blogPost={post} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Weblog;
