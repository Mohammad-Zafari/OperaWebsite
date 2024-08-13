import React from "react";

interface info {
  blogPost: {
    id: string;
    imageSrc: string;
    title: string;
    subtitle: string;
    description: string;
    link: string;
    date: string;
  };
}


const BlogPage = (props : info) => {

  const formatText = (txt : string) => {
    return txt.split('\n').map((item, key) => {
      return <span key={key}>{item}<br /></span>
    });
  };

  return (
    <>
    <img
      src={props.blogPost.imageSrc}
      alt=""
      className="mx-auto w-full h-[500px] md:h-[700px]"
    />
    <div
      id="blogContainer"
      className="px-4 sm:px-20 md:px-32 lg:px-32 xl:px-60 py-4 sm:py-22 md:py-20"
      style={{ direction: "rtl" }}
    >
      <div id="title-container" className="justify-between items-center xl:px-16">
        <div id="" className="text-center md:text-right py-8 md:pl-4">
          <h1 className="text-4xl text-sky-400 mb-8">{props.blogPost.title}</h1>
          <p className="text-purple-600 mb-8">
            {props.blogPost.subtitle}
          </p>
          <a href="/weblog" className="bg-sky-500 px-8 py-2 text-lg shadow-md shadow-black rounded-2xl hover:bg-sky-400 hover:shadow-none">
            مشاهده سایر بلاگ‌ها
          </a>
        </div>
        <div id="imageContainer" className="sm:px-16 md:px-0">
        </div>
      </div>
      <div className="py-8 my-8 text-justify flex justify-center px-8 rounded-xl text-black">
        <p >
          {formatText(props.blogPost.description)}
        </p>
      </div>
      <div className="flex justify-center w-full py-12 lg:px-32 2xl:px-52">
        <img className="rounded-lg" src="/hero-pattern.png" alt="video" />
      </div>
    </div>
    </>
  );
};

export default BlogPage;
