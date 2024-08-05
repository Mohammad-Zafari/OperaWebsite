import React, { useState } from "react";
import BlogCard from "./BlogCard";

interface BlogPost {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  date?: string;
}

interface BlogListProps {
  blogPosts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ blogPosts }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + blogPosts.length) % blogPosts.length);
  };

  const getVisiblePosts = () => {
    const posts = [];
    for (let i = 0; i < 3; i++) {
      posts.push(blogPosts[(activeIndex + i) % blogPosts.length]);
    }
    return posts;
  };

  return (
    <div id="blog-container" className="relative p-6 flex flex-col items-center">
      <div className="relative w-full flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-200 text-black rounded-full hover:bg-gray-300 absolute left-2 z-10"
        >
          &#8249;
        </button>
        <div className="flex justify-center gap-4 overflow-hidden">
          {getVisiblePosts().map((post, index) => (
            <BlogCard
              key={index}
              imageSrc={post.imageSrc}
              title={post.title}
              description={post.description}
              link={post.link}
              isActive={index === 1} // Always make the middle card active
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="p-2 bg-gray-200 text-black rounded-full hover:bg-gray-300 absolute right-2 z-10"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default BlogList;
