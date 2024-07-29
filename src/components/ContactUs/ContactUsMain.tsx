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
    <div className="flex items-center mr-40 mb-48 flex-col mt-28 ">
      {/* <h1 className="text-black text-right mr-32 text-7xl font-bold  ">
        ارتباط با ما
      </h1> */}
      <p className="text-[#d9d9d9] text-6xl font-bold ml-44  ">ارتباط با ما</p>
      <div
        id="container"
        className="w-[90%] rounded-[40px] bg-white p-3 mt-24 shadow-customShadow1"
      >
        <div
          id="main"
          className=" o bg-white rounded-[44px] shadow-customShadow1 px-2 pt-10 pb-20 relative "
        >
          <p className="text-purple-700 text-base font-bold text-right pb-5">
            درصورت داشتن درخواست، نظر یا انتقاد برای ما بنویسید.
          </p>

          <div className="relative">
            <Input
              placeholder="نام و نام خانوادگی"
              className="text-right border-gray-500 border-[2px] my-3 pr-14 pl-5 py-5 placeholder-purple-300 text-sm  focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[35px] shadow-lg"
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
              className="absolute right-3 top-1/2 transform -translate-y-1/2 "
            />
          </div>
          <div className="relative">
            <Input
              placeholder="شماره تلفن همراه"
              value={phoneNumber}
              className="text-right border-gray-500 border-2 my-2 p-5 placeholder-purple-300 text-sm  pr-14 pl-5  focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[35px] shadow-lg "
              onChange={(phoneNumber) => {
                const newphoneNumber = phoneNumber.target.value;
                setPhoneNumber(newphoneNumber);
                console.log(newphoneNumber);
              }}
            />
            <img
              src="/call.svg"
              alt=""
              className="absolute right-3 top-1/2 transform -translate-y-1/2 "
            />
          </div>
          <div className="relative">
            <Textarea
              placeholder="متن درخواست / نظر / انتقاد"
              className="text-right border-gray-500 border-2 my-3  pt-3  placeholder-purple-300 text-sm  pr-14 pl-5 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[35px] shadow-lg pb-48"
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
              className="absolute right-3 top-8 transform -translate-y-1/2 "
            />
            <img
              src="/Group 2490.svg"
              alt=""
              className="absolute bottom-1 left-1"
            />
          </div>
          <Button
            variant="outline"
            className="text-right border-gray-600 border-[2px] px-11  text-purple-700 text-sm font-bold rounded-3xl focus-visible:ring-0 focus-visible:ring-offset-0  bottom-9 left-10 absolute  "
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
