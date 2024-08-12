import React from "react";
import { Button } from "../ui/button";

interface info {
  blogInfo: {
    text: string;
    id?: number; // id is now optional
  };
}

const BlogPage = (props : info) => {

  const formatText = (txt : string) => {
    return txt.split('\n').map((item, key) => {
      return <span key={key}>{item}<br /></span>
    });
  };

  return (
    <div
      id="blogContainer"
      className="bg-violet-900 border-b-2 border-gray-500 px-4 sm:px-20 md:px-32 lg:px-32 xl:px-60 py-10 sm:py-32 md:py-40"
      style={{ direction: "rtl" }}
    >
      <div id="title&img" className="md:flex justify-between items-center xl:px-16">
        <div id="" className="text-center py-8 md:pl-4">
          <h1 className="text-4xl text-sky-400 mb-8">بلاگ 1</h1>
          <p className="text-white mb-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
          <Button className="bg-sky-500 px-8 text-lg rounded-2xl">
            مشاهده سایر بلاگ‌ها
          </Button>
        </div>
        <div id="imageContainer" className="sm:px-16 md:px-0">
          <img
            src="/card1.png"
            alt=""
            className="mx-auto w-full md:w-72 mt-8 md:m-0"
          />
        </div>
      </div>
      <div className="py-8 text-justify flex justify-center text-white">
        <p >
          {formatText(props.blogInfo.text)}
        </p>
      </div>
      <div className="flex justify-center w-full py-12 lg:px-32 2xl:px-52">
        <img className="rounded-lg" src="/hero-pattern.png" alt="video" />
      </div>
    </div>
  );
};

export default BlogPage;
