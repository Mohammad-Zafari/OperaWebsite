import React from "react";
import ServiceCard from "../serviceCard/ServiceCard";

const ServicesCards = () => {
  const cardContents = [
    {
      title: "اشتراک 1 ماهه",
      topic: "آشنایی اولیه و ارزیابی امکانات",
      discribtion:
        "این طرح مناسب کسب‌وکارهایی است که می‌خواهند به طور آزمایشی از خدمات اپرا استفاده کنند و قابلیت‌های تبدیل گفتار به متن و تحلیل مکالمات را بررسی کنند.",
      imgUrl: "/card1.png",
    },
    {
      title: "اشتراک 3 ماهه",
      topic: "تحلیل منظم مکالمات",
      discribtion:
        "این طرح برای شرکت‌هایی طراحی شده که به تحلیل مداوم و دقیق مکالمات نیاز دارند و به بهبودهای قابل توجه در خدمات خود دست یابند.",
      imgUrl: "/card1.png",
    },
    {
      title: "اشتراک 6 ماهه",
      topic: "بهینه‌سازی بلندمدت عملکرد",
      discribtion:
        "این طرح به شرکت‌هایی که به دنبال ارتقاء سطح کیفیت خدمات و بهینه‌سازی بلندمدت عملکرد تماس‌ها هستند، توصیه می‌شود.",
      imgUrl: "/card1.png", 
    },
  ];


  return (
    <>
      <div
        id="servicesCardsContainer"
        className="py-80 px-6 sm:px-12 xl:px-12 2xl:px-48"
        dir="rtl"

      >
        <h1 id="title" className="text-3xl w-fit text-gray-800 font-semibold border-b-2 pb-2 mx-auto md:mr-20"        data-aos="fade-up"
        >
          طرح ها
        </h1>
        <div id="cardsContainer" className="block lg:flex justify-center mx-auto pt-24"         data-aos="fade-left"
        >
          <ServiceCard cardInfo={cardContents[0]} />
          <ServiceCard cardInfo={cardContents[1]} />
          <ServiceCard cardInfo={cardContents[2]} />
        </div>
      </div>
    </>
  );
};

export default ServicesCards;
