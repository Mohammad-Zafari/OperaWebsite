import { space } from "postcss/lib/list";
import Card from "./Card";
import React, { useEffect } from "react";

const cardData = [
  {
    title: "امکان جستجو در تماس ها",
    description:
      "اپرا این امکان را به شما میدهد که در تمامی تماس های ورودی و خروجی جستجو و تماس مدنظر را پیدا کنید.",
    imagesrc: "/call-search-item.svg",
    extratext:
      "here you can add extea explanation to each cart... here you can add extea explanation to each cart...",
  },
  {
    title: "امکان جستجو در تماس ها",
    description:
      "اپرا این امکان را به شما میدهد که در تمامی تماس های ورودی و خروجی جستجو و تماس مدنظر را پیدا کنید.",
    imagesrc: "/call-search-item.svg",
    extratext:
      "here you can add extea explanation to each cart... here you can add extea explanation to each cart...",
  },
  {
    title: "امکان جستجو در تماس ها",
    description:
      "اپرا این امکان را به شما میدهد که در تمامی تماس های ورودی و خروجی جستجو و تماس مدنظر را پیدا کنید.",
    imagesrc: "/call-search-item.svg",
    extratext:
      "here you can add extea explanation to each cart... here you can add extea explanation to each cart...",
  },
  {
    title: "امکان جستجو در تماس ها",
    description:
      "اپرا این امکان را به شما میدهد که در تمامی تماس های ورودی و خروجی جستجو و تماس مدنظر را پیدا کنید.",
    imagesrc: "/call-search-item.svg",
    extratext:
      "here you can add extea explanation to each cart... here you can add extea explanation to each cart...",
  },
  {
    title: "امکان جستجو در تماس ها",
    description:
      "اپرا این امکان را به شما میدهد که در تمامی تماس های ورودی و خروجی جستجو و تماس مدنظر را پیدا کنید.",
    imagesrc: "/call-search-item.svg",
    extratext:
      "here you can add extea explanation to each cart... here you can add extea explanation to each cart...",
  },
  {
    title: "امکان جستجو در تماس ها",
    description:
      "اپرا این امکان را به شما میدهد که در تمامی تماس های ورودی و خروجی جستجو و تماس مدنظر را پیدا کنید.",
    imagesrc: "/call-search-item.svg",
    extratext:
      "here you can add extea explanation to each cart... here you can add extea explanation to each cart...",
  },
  {
    title: "امکان جستجو در تماس ها",
    description:
      "اپرا این امکان را به شما میدهد که در تمامی تماس های ورودی و خروجی جستجو و تماس مدنظر را پیدا کنید.",
    imagesrc: "/call-search-item.svg",
    extratext:
      "here you can add extea explanation to each cart... here you can add extea explanation to each cart...",
  },
];

const Cards = () => {
 
  return (
    <div className="w-[95%] mx-auto">
      <div className="lg:flex items-center justify-center">
        <img className="" src="/whyOpera.svg" alt="" data-aos="fade-left"
        />
        <h1
          className="text-[#333333]  lg:text-6xl font-bold w-fit mx-auto lg:mx-0 md:text-5xl text-4xl"
          data-aos="fade-up"
        >
          چرا
          <span className="text-customPurple mr-3">اپرا </span>؟
        </h1>
      </div>

      <div className="flex flex-wrap mt-14 justify-center">
        {cardData.map((cart, index) => (
          <div key={index} data-aos="fade-up">
            <Card
              title={cart.title}
              description={cart.description}
              imagesrc={cart.imagesrc}
              extratext={cart.extratext}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;