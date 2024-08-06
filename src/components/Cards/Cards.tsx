import { space } from "postcss/lib/list";
import Card from "./Card";

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
    <div className=" lg:w-[70%] md:w-[80%] w-[100%] mx-auto">
      <div className="lg:flex items-center justify-center">
        <img className="" src="/whyOpera.svg" alt="" />
        <h1 className="text-[#333333]  lg:text-6xl font-bold w-fit mx-auto lg:mx-0 md:text-5xl text-4xl">
          چرا
          <span className="text-customPurple mr-3">اپرا </span>؟
        </h1>
      </div>

      <div className="flex flex-wrap mt-14 justify-center">
        {cardData.map((cart, index) => (
          <Card
            key={index} // Use index as key, but try to use unique IDs if possible
            title={cart.title}
            description={cart.description}
            imagesrc={cart.imagesrc}
            extratext={cart.extratext}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
