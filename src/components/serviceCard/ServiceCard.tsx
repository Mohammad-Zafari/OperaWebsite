import React from "react";

interface info {
  cardInfo: {
    imgUrl: string;
    title: string;
    topic: string;
    discribtion: string;
  };
}

const ServiceCard = (props: info) => {
  return (
    <div
      className="border-gray border-8 w-4/12 rounded-2xl mx-2 xl:mx-4"
      style={{ direction: "rtl" }}
    >
      <img className="w-full bg-gray-200" src={props.cardInfo.imgUrl} alt="" />
      <div className="flex-col h-96 lg:h-80 xl:h-72 bg-purple-800 rounded-xl px-4 py-4">
        <h2 className="h-1/6 text-3xl text-yellow-500 font-bold">
          {props.cardInfo.title}
        </h2>
        <p className="h-1/6 text-lg text-white font-bold mt-1">
          {props.cardInfo.topic}
        </p>
        <div className="h-4/6 flex mt-4">
          <div className="w-7/12 bg-inigo-500">
            <p className="text-white">{props.cardInfo.discribtion}</p>
          </div>
          <div className="w-5/12 flex justify-center items-center mr-2">
            <a
              className="text-center rounded-xl bg-yellow-500 p-2 shadow-md shadow-black hover:shadow-none"
              href="#"
            >
              مشاهده محصول
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
