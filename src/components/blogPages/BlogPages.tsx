"use client";

import React, { useEffect } from "react";
import BlogPage from "@/components/blogpages/BlogPage";
import Navbar from "../navbar/Navbar";
import { blogPosts } from "@/helper/data";

interface inf {
  id: number;
}

const BlogPages = (props: inf) => {
 
  return (
    <div>
      <Navbar />
      {blogPosts.map(
        (content : object, i:number) => i == props.id - 1 && <BlogPage blogPost={content} />
      )}
    </div>
  );
};

export default BlogPages;
