"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactUsMain = () => {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [text, setText] = useState();
  return (
    <div className="flex items-center mb-24 md:mb-48 flex-col lg:mt-28 mt-8 md:mx-20 lg:mr-10  ">
      {/* <h1 className="text-black text-right mr-32 text-7xl font-bold  ">
        ارتباط با ما
      </h1> */}
      <p className="text-[#d9d9d9] text-2xl md:text-4xl lg:text-5xl font-bold lg:ml-44 lg:mt-0 md:mt-8 mt-5">ارتباط با ما</p>
      <div
        id="container"
        className="w-[75%] md:w-[70%] lg:w-[90%] rounded-[40px] bg-white p-1 sm:p-2 md:p-3 lg:mt-20 md:mt-16 sm:mt-10 mt-8 shadow-customShadow1"
      >
        <div
          id="main"
          className=" bg-white rounded-[44px] shadow-customShadow1 px-2 pt-10 pb-8 md:pb-20 relative "
        >
          <p className="text-purple-700 md:text-base sm:text-sm text-[10px] font-bold text-right pb-5">
            درصورت داشتن درخواست، نظر یا انتقاد برای ما بنویسید.
          </p>

          <div className="relative">
            <Input
              placeholder="نام و نام خانوادگی"
              className="text-right border-gray-500 border-2 md:my-3 pr-14 pl-5 md:py-5 py-1 placeholder-purple-300 md:text-sm text-[8px]   focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[35px] shadow-lg sm:text-xs"
              style={{
                color: "customPurple", // or your default text color
              }}
              value={name}
              onChange={(name) => {
                const newValue = name.target.value;
                setName(newValue);
                console.log(newValue);
              }}
            />
            <img
              src="/account_circle.svg"
              alt=""
              className="absolute right-3 top-1/2 transform -translate-y-1/2 md:size-9 sm:size-7 size-5"
            />
          </div>
          <div className="relative">
            <Input
              placeholder="شماره تلفن همراه"
              value={phoneNumber}
              className="text-right border-gray-500 border-2 my-1 lg:my-2 lg:py-5 placeholder-purple-300 sm:text-xs md:text-sm text-[8px] pr-14 lg:pl-5  focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[35px] shadow-lg "
              onChange={(phoneNumber) => {
                const newphoneNumber = phoneNumber.target.value;
                setPhoneNumber(newphoneNumber);
                console.log(newphoneNumber);
              }}
            />
            <img
              src="/call.svg"
              alt=""
              className="absolute right-3 top-1/2 transform -translate-y-1/2 md:size-9 sm:size-7 size-5 "
            />
          </div>
          <div className="relative">
            <Textarea
              placeholder="متن درخواست / نظر / انتقاد"
              className="text-right border-gray-500 border-2 md:my-3  pt-3  placeholder-purple-300 md:text-sm sm:text-xs text-[8px] pr-14 pl-5 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[35px] shadow-lg pb-48"
              value={text}
              onChange={(text) => {
                const newText = text.target.value;
                setText(newText);
                console.log(newText);
              }}
            />
            <img
              src="/chat.svg"
              alt=""
              className="absolute right-3 top-8 transform -translate-y-1/2 md:size-9 sm:size-7 size-5"
            />
            <img
              src="/Group 2490.svg"
              alt=""
              className="absolute bottom-2 left-2 md:size-9 sm:size-7 size-5 "
            />
          </div>
          <Button
            variant="outline"
            className="text-right border-gray-600 border-[2px] md:px-11 sm:px-7 px-5 text-purple-700 md:text-sm text-[8px] sm:text-xs font-bold md:rounded-3xl rounded-2xl focus-visible:ring-0 focus-visible:ring-offset-0 md:bottom-9 md:left-10 md:absolute ml-5 md:ml-0 md:mt-0 mt-4 "
            onClick={() => {
              setName("");
              setPhoneNumber("");
              setText("");
            }}
          >
            ارسال
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsMain;
