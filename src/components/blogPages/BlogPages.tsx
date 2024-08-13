"use client";

import React from "react";
import BlogPage from "./BlogPage";
import Navbar from "../navbar/Navbar";
import { blogPosts } from "../../helper/data";

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
