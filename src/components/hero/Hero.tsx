import React from "react";
import { MoveLeft } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div
        id="heroContainer"
        className="bg-[url('/hero-pattern.png')] bg-cover bg-right pb-96 pt-32 sm:pt-44"
        style={{ direction: "rtl" }}
      >
        <div id="textsContainer" className="bg-re-200 lg:w-5/12 xl:2/12 lg:mr-40 p-8">
          <h1 id="heroTitle" className="text-violet-800 font-semibold text-7xl sm:text-8xl">
            اپرا
          </h1>
          <h3 id="discribtion" className="text-2xl sm:text-4xl text-white mt-8 leading-relaxed">
            سرویس ها و محصولات مبتنی بر هوش مصنوعی در مراکز تماس و ارتباط با
            مشتریان
          </h3>
          <div id="buttonContainer" className="flex justify-end bg-late-200 py-12">
            <a
              id="linkToSeeProducts"   
              href="#"
              className="flex items-end p-4 rounded-xl text-black text-lg shadow-sm shadow-white hover:shadow-none"
              style={{
                background:
                  "linear-gradient(90deg,rgba(120, 104, 47, 1) ,rgba(222, 193, 87, 1)",
              }}
            >
              مشاهده محصولات
              <MoveLeft className="mr-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
