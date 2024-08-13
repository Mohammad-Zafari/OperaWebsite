"use client";

import React, { useEffect } from "react";
import BlogPage from "@/components/blogpages/BlogPage";
import Navbar from "../navbar/Navbar";
import { blogPosts } from "@/helper/data";

interface inf {
  id: number;
}

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

const BlogPages = (props: inf,{}) => {
 
  return (
    <div>
      <Navbar />
      {blogPosts.map(
        (content, i) => i == props.id - 1 && <BlogPage blogPost={content} />
      )}
    </div>
  );
};

export default BlogPages;
