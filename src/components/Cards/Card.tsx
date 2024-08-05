import React, { useState } from "react";

const Card = ({ title, description, imagesrc, extratext }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="first-container" className=" w-fit">
      <div
        id="second-container"
        className="bg-customBackWhite w-[180px] md:w-[203px] lg:w-[243px] rounded-[29px] flex items-center justify-center md:m-6 m-4 lg:m-8 lg:p-2 p-1 hover:scale-105 transition-transform duration-300"
      >
        <div
          id="main-container"
          className="bg-customFrontWhite border-solid shadow-customShadow1 rounded-[29px] relative overflow-hidden"
        >
          <div
            id="image-container"
            className="relative justify-center flex mb-[-32px]"
          >
            <img
              src={imagesrc}
              alt={title}
              className="z-10 lg:w-[151px] lg:h-[156px] md:h-[136px] md:w-[131px] h-[116px] w-[111px] absolute"
            />
            <div className="lg:w-[151px] lg:h-[156px] md:h-[136px] md:w-[131px] h-[116px] w-[111px] z-20 rounded-full bg-custom-cart-gradient"></div>
          </div>
          <div id="text-container" className="text-right flex flex-col  p-4 ">
            <h1 className="text-customPurple font-semibold lg:text-lg md:text-sm text-xs">{title}</h1>
            <p className="mx-1 text-center font-semibold lg:text-[9px] md:text-[7px] text-[6px]">
              {description}
            </p>

            <button
              onClick={toggleExpand}
              className="mt-2 text-customPurple w-fit"
            >
              {isExpanded ? (
                <img className="size-4" src="keyboard_arrow_up.svg" alt="" />
              ) : (
                <img className="size-4 md:size-5 lg:size-7" src="keyboard_arrow_down.svg" alt="" />
              )}
            </button>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isExpanded ? "max-h-40" : "max-h-0"
              }`}
            >
              {isExpanded && (
                //enter the rest of your text
                <p className="text-center font-normal text-xs mt-2">
                  {extratext}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
