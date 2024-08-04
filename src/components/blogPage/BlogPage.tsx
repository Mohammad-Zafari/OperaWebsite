import React from "react";
import { Button } from "../ui/button";

interface info {
  blogInfo: {
    text: string, 
  }
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
      className="bg-violet-900 px-4 sm:px-20 md:px-32 lg:px-32 xl:px-60 py-32 md:py-40"
      style={{ direction: "rtl" }}
    >
      <div id="title&img" className="md:flex justify-between items-center pl-10">
        <div id="" className="xl:w-4/12 text-center py-8 px-12">
          <h1 className="text-4xl text-sky-400 mb-8">بلاگ 1</h1>
          <p className="text-white mb-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
          <Button className="bg-sky-500 px-8 text-lg rounded-2xl">
            مشاهده سایر بلاگ‌ها
          </Button>
        </div>
        <img
          src="/card1.png"
          alt=""
          className="w-8/12 md:w-4/12 mx-auto mt-8 md:m-0"
        />
      </div>
      <div className="px-4 py-8 text-justify text-white">
        <p >
          {formatText(props.blogInfo.text)}
        </p>
      </div>
      <div className="flex justify-center p-12">
        <img className="w-full md:w-8/12 rounded-lg" src="/hero-pattern.png" alt="video" />
      </div>
    </div>
  );
};

export default BlogPage;
