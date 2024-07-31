"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactUsLanding = () => {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [text, setText] = useState<string>("");
  return (
    <div
    // className="bg-purple-950 mt-20 py-36"
    >
      <h1 className="text-black text-right mr-32 text-7xl font-bold">
        ارتباط با ما
      </h1>
      <img src="/subtract.svg" alt="" className="ml-96 bottom my-5 size-28" />
      <div
        id="container"
        className="w-[60%] rounded-[20px] bg-white m-auto p-3 "
      >
        <div
          id="main"
          className=" m-auto bg-white rounded-[24px] shadow-customShadow1 p-8 pb-4 pt-10 "
        >
          <p className="text-purple-700 text-3xl font-bold text-right pb-5">
            درصورت داشتن درخواست، نظر یا انتقاد برای ما بنویسید.
          </p>

          <div className="relative">
            <Input
              placeholder="نام و نام خانوادگی"
              className="text-right border-gray-800 border-[2px] my-3 pr-14 pl-5 py-12 placeholder-purple-300 text-2xl font-bold focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl shadow-lg"
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
              type="number"
              className="text-right border-gray-800 border-2 my-5 p-5 placeholder-purple-300 text-2xl font-bold pr-14 pl-5 py-12 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl shadow-lg "
              onChange={(phoneNumber) => {
                const newphoneNumber = parseInt(phoneNumber.target.value);
                setPhoneNumber(newphoneNumber);
                console.log(newphoneNumber);
                console.log(typeof(newphoneNumber))
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
              className="text-right border-gray-800 border-2 my-5 pb-4 pt-12  placeholder-purple-300 text-2xl font-bold pr-14 pl-5 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl shadow-lg h-72 placeholder-opacity-100"
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
              className="absolute bottom-0 left-0"
            />
          </div>
          <Button
            variant="outline"
            className="text-right border-gray-800 border-2 mb-0 px-9 py-8  text-purple-700 text-2xl font-bold rounded-2xl focus-visible:ring-0 focus-visible:ring-offset-0 "
            onClick={() => {
              setName("");
              setPhoneNumber(undefined);
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

export default ContactUsLanding;
