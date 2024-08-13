import React from "react";

interface info {
  blogPost: {
    id: string;
    imageSrc: string;
    title: string;
    subtitle: string;
    description: string;
    link: string;
  };
}

// interface BlogListProps {
//   blogPosts: BlogPost[];
// }

const BlogPage = (props : info) => {

  const formatText = (txt : string) => {
    return txt.split('\n').map((item, key) => {
      return <span key={key}>{item}<br /></span>
    });
  };

  return (
    <div
      id="blogContainer"
      className="border-b-2 border-gray-500 px-4 sm:px-20 md:px-32 lg:px-32 xl:px-60 py-10 sm:py-32 md:py-40"
      style={{ direction: "rtl" }}
    >
      <div id="title&img" className="md:flex justify-between items-center xl:px-16">
        <div id="" className="text-center py-8 md:pl-4">
          <h1 className="text-4xl text-sky-400 mb-8">{props.blogPost.title}</h1>
          <p className="text-purple-600 mb-8">
            {props.blogPost.subtitle}
          </p>
          <a href="/weblog" className="bg-sky-500 px-8 py-2 text-lg shadow-md shadow-black rounded-2xl hover:bg-sky-400 hover:shadow-none">
            مشاهده سایر بلاگ‌ها
          </a>
        </div>
        <div id="imageContainer" className="sm:px-16 md:px-0">
          <img
            src="/card1.png"
            alt=""
            className="mx-auto w-full md:w-72 mt-8 md:m-0"
          />
        </div>
      </div>
      <div className="py-8 my-12 text-justify flex justify-center bg-purple-600 px-8 rounded-xl shadow-black shadow-[0_-10px_30px_-10px] text-white">
        <p >
          {formatText(props.blogPost.description)}
        </p>
      </div>
      <div className="flex justify-center w-full py-12 lg:px-32 2xl:px-52">
        <img className="rounded-lg" src="/hero-pattern.png" alt="video" />
      </div>
    </div>
  );
};

export default BlogPage;
