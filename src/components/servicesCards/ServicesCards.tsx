import React from "react";
import ServiceCard from "../serviceCard/ServiceCard";

const ServicesCards = () => {
  const cardContents = [
    {
      title: "اپــراگو",
      topic: "سرویس تبدیل متن به گفتار با هوش مصنوعی",
      discribtion:
        "این محصول امکان تماس صوتی خودکار با مشتریان را ایجاد می نماید. ",
      imgUrl: "/card1.png",
    },
    {
      title: "اپــرا گپ",
      topic: "سرویس گفت‌و‌گو، استعلام و هدایت هوشمند تماس",
      discribtion:
        "اپرا محصولی مبتنی بر فناوری های هوش مصنوعی است که امکان پاسخگویی موتور هوش مصنوعی را به صورت مستقیم با مشتریان ایجاد می نماید.",
      imgUrl: "/card2.png",
    },
  ];

  return (
    <>
      <div
        id="servicesCardsContainer"
        className="bg-purple-400 border-b-1 py-20 px-2 sm:px-6 xl:px-12 2xl:px-48"
        dir="rtl"
      >
        <h1 id="title" className="text-3xl w-fit text-gray-800 font-semibold border-b-2 pb-2 mx-auto md:mr-20">
          طرح ها
        </h1>
        <div id="cardsContainer" className="block lg:flex justify-center mx-auto pt-24">
          <ServiceCard cardInfo={cardContents[0]} />
          <ServiceCard cardInfo={cardContents[1]} />
          <ServiceCard cardInfo={cardContents[0]} />
        </div>
      </div>
    </>
  );
};

export default ServicesCards;
