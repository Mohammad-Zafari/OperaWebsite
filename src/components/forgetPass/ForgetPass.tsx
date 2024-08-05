"use client";

import React, { useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RsetEmail, selectEmail } from "@/slices/MainSlice";
import { AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

const ForgetPass = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleForgetPass = () => {};

  useEffect(() => {
    dispatch(RsetEmail(""));
  }, []);

  return (
    <>
      <div className="w-11/12 sm:w-8/12 lg:w-6/12 xl:w-4/12 bg-gray-100 rounded-2xl shadow-lg py-8 mx-auto mt-40">
        <h3 className="text-center text-xl text-purple-800">فراموشی رمزعبور</h3>
        <div className="p-8 sm:p-16" style={{ direction: "rtl" }}>
          <Input
            className="h-12 text-white placeholder:text-purple-300 mb-12 focus-visible:ring-0 focus-visible:ring-offset-0 px-8 border-none rounded-xl bg-purple-800"
            placeholder="ایمیل خود را وارد کنید"
            value={useSelector(selectEmail)}
            onChange={(e) => dispatch(RsetEmail(e.target.value))}
            type="email"
          />
          <Button
            onClick={() => {
              handleForgetPass();
            }}
            className="px-8 py-5 mr-1 text-white text-lg bg-violet-600 hover:text-violet-600 hover:bg-white"
          >
            ارسال
          </Button>
        </div>
      </div>
    </>
  );
};

export default ForgetPass;
