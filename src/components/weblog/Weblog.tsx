"use client";
import React from "react";
import BlogCard from "../blog/BlogCard";
import ServiceCard from "../servicescards/ServiceCard";
import WeblogCards from "./weblogCards";

interface BlogPost {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

interface BlogListProps {
  blogPosts: BlogPost[];
}

const Weblog: React.FC<BlogListProps> = ({ blogPosts }) => {
    console.log(blogPosts)
  return (
    <div id="weblog-container" dir="rtl">
      <div
        id="weblog-hero"
        className="bg-violet-900 flex-col text-center py-32"
      >
        <h1 id="weblog-title" className="text-white text-3xl p-2">
          به وبلاگ ما خوش آمدید
        </h1>
        <p id="weblog-subtitle" className="text-yellow-200 p-2">
          کاوش در هوش مصنوعی: از مبانی تا پیشرفته‌ترین کاربردها
        </p>
      </div>
      <div id="weblog-body" className="px-80 pt-8 text-2xl">
        <h2 id="weblog-body-title" className="w-fit p-2 border-b-2">
          آخرین مطالب
        </h2>
        <div id="weblog-cards-container" className="grid grid-cols-3 gap-4 bg-red-400 p-8">
        <WeblogCards blogPost={blogPosts[1]}/>
        {/* <WeblogCards/>
        <WeblogCards/>
        <WeblogCards/>
        <WeblogCards/> */}
        {/* <div className="bg-red-500">1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div> */}



        </div>
      </div>
    </div>
  );
};

export default Weblog;
