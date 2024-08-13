"use client";

import React from "react";

interface BlogPost {
  blogPost: {
    id: string;
    imageSrc: string;
    title: string;
    description: string;
    link: string;
  };
}

const weblogCards = (props: BlogPost) => {
  return (
    <div
      id="card"
      className="bg-white w-full border-8 border-gray rounded-3xl mt-4 mx-auto lg:mx-2 xl:mx-4"
      dir="rtl"
    >
      <img
        id="cardImage"
        className="w-full bg-gray-200"
        src={props.blogPost.imageSrc}
        alt=""
      />
      <div
        id="CardInfoContainer"
        className="flex flex-col h-68 lg:h-80 xl:h-72 bg-purple-800 rounded-b-xl rounded-t-3xl mx-auto px-4 py-4"
      >
        <h2 id="title" className="h-1/6 text-3xl text-yellow-500 font-bold">
          Lore ipsum
        </h2>
        <p id="topic" className="h-1/6 text-lg text-white font-bold mt-1 ">
          Lorem ipsum dolor sit.
        </p>
        <div
          id=""
          className="h-4/6 lg:flex lg:flex-col mx-auto mt-4 items-center relative"
        >
          <div id="discribtionContainer" className="lg:w- bg-inigo-500">
            <p id="discribtion" className="text-white text-xs">
              {props.blogPost.description}
            </p>
          </div>
          <div
            id="seeProductContainer"
            className="lg:w-5/12 flex  justify-center items-center mr-2 lg:absolute bottom-0"
          >
            <a
              id="seeProductBtn"
              className="text-center rounded-xl bg-yellow-500 mt-2 p-2 shadow-md shadow-black hover:shadow-none"
              href="/dargahPardakht"
            >
              خرید محصول
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default weblogCards;
