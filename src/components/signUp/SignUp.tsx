"use client";

import React , { useEffect } from "react";
import { Input } from "../ui/input"
import { Button } from "../ui/button";
import { CircleUserRound, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { RsetUserName, selectUserName, RsetPassword, selectPassword, RsetShowPassword, selectShowPassword, RsetFirstName, selectFirstName, RsetLastName, selectLastName, RsetEmail, selectEmail, RsetPasswordConfirmation, selectPasswordConfirmation, RsetShowPasswordConfirmation, selectShowPasswordConfirmation } from "@/slices/MainSlice";
import { AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";



const SignUp = () => {

 const dispatch = useDispatch<AppDispatch>();

//  const firstNameIsValid = useSelector(selectFirstName) !== "";
//  const lastNameIsValid = useSelector(selectLastName) !== "";
//  const passwordIsValid = useSelector(selectPassword).length > 7;

 const handleLogin = () => {
    
 }

  useEffect(() => {
    dispatch(RsetUserName(""));
    dispatch(RsetPassword(""));
  },[]);

  return (
    <>
      <div id="container" className="h-screen md:flex">
        <div
          id="leftPartContainer" 
          className="md:h-full md:w-7/12 px-2 py-8 md:px-16"
          style={{ direction: "rtl" }}
        >
          <img id="logo" className="w-44 h-16 mx-2 md:m-0" src="/logo.png" alt="" />
          <div id="formContiner" className="flex flex-col px-2 bg-ate-500 border-4 md:px-0 mx-auto rounded-2xl shadow-md py-12 md:py-20 my-12 md:my-16">
            <div id="fullNameInput" className="w-full sm:w-5/6 lg:w-4/6 h-16 flex justify-items-center mb-4 mx-auto">
              <div id="firstNameInput" className="w-full h-16 flex px-2 ml-2 bg-zinc-800 rounded-3xl">
                <div id="firstNameIconContainer" className="w-2/12 my-auto h-3/6">
                  <CircleUserRound className="h-full w-full text-violet-700" />
                </div>
                <Input
                  className="bg-transparent h-full focus-visible:ring-0 focus-visible:ring-offset-0 mx-2 text-gray-400 w-11/12"
                  value={useSelector(selectFirstName)}
                  onChange={(e) => dispatch(RsetFirstName(e.target.value))}
                  style={{ border: "none transparent", outline: "none" }}
                  type="text"
                  placeholder="نام"
                />
              </div>
              <div id="lastNameInput" className="w-full h-16 flex mb-4 px-2 mr-2 bg-zinc-800 rounded-3xl">
                <div id="lastNameIconContainer" className="w-2/12 my-auto h-3/6">
                  <CircleUserRound className="h-full w-full text-violet-700" />
                </div>
                <Input
                  className="bg-transparent h-full focus-visible:ring-0 focus-visible:ring-offset-0 mx-2 text-gray-400 w-11/12"
                  value={useSelector(selectLastName)}
                  onChange={(e) => dispatch(RsetLastName(e.target.value))}
                  style={{ border: "none transparent", outline: "none" }}
                  type="text"
                  placeholder="نام خانوادگی"
                />
              </div>
            </div>
            <div id="userNameInput" className="w-full sm:w-5/6 lg:w-4/6 h-16 flex mb-4 px-2 mx-auto bg-zinc-800 rounded-3xl">
              <div id="userIconContainer" className="w-1/12 my-auto h-3/6">
                <CircleUserRound className="h-full w-full text-violet-700" />
              </div>
                <Input
                  className="bg-transparent h-full focus-visible:ring-0 focus-visible:ring-offset-0 mx-2 text-gray-400 w-11/12"
                  value={useSelector(selectUserName)}
                  onChange={(e) => dispatch(RsetUserName(e.target.value))}
                  style={{ border: "none transparent", outline: "none" }}
                  type="text"
                  placeholder="نام کاربری"
                />
            </div>
            <div id="userNameInput" className="w-full sm:w-5/6 lg:w-4/6 h-16 flex mb-4 px-2 mx-auto bg-zinc-800 rounded-3xl">
              <div id="userIconContainer" className="w-1/12 my-auto h-3/6">
                <Mail className="h-full w-full text-violet-700" />
              </div>
                <Input
                  className="bg-transparent h-full focus-visible:ring-0 focus-visible:ring-offset-0 mx-2 text-gray-400 w-11/12"
                  value={useSelector(selectEmail)}
                  onChange={(e) => dispatch(RsetEmail(e.target.value))}
                  style={{ border: "none transparent", outline: "none" }}
                  type="email"
                  placeholder="ایمیل"
                />
            </div>
            <div id="passInput" className="w-full sm:w-5/6 lg:w-4/6 h-16 flex mb-4 px-2 pl-4 mx-auto rounded-3xl bg-zinc-800">
              <div id="passIconContainer" className="w-1/12 my-auto h-3/6">
                <Lock className="h-full w-full text-violet-700" />
              </div>
              {useSelector(selectShowPassword) ? (
                <>
                  <Input
                    className="bg-transparent h-full focus-visible:ring-0 focus-visible:ring-offset-0 mx-2 text-gray-400 w-11/12"
                    value={useSelector(selectPassword)}
                    onChange={(e) => dispatch(RsetPassword(e.target.value))}
                    style={{ border: "none transparent", outline: "none" }}
                    type="text"
                    placeholder="رمز عبور"
                  />
                  <div
                    id="eyeOffIconContainer"
                    className="w-1/12 my-auto h-3/6"
                    onClick={() => dispatch(RsetShowPassword((prev) => !prev))}
                  >
                    <EyeOff className="h-full w-full text-violet-700" />
                  </div>
                </>
              ) : (
                <>
                  <Input
                    className="bg-transparent h-full focus-visible:ring-0 focus-visible:ring-offset-0 mx-2 text-gray-400 w-11/12"
                    value={useSelector(selectPassword)}
                    onChange={(e) => dispatch(RsetPassword(e.target.value))}
                    style={{ border: "none transparent", outline: "none" }}
                    type="password"
                    placeholder="رمز عبور"
                  />
                  <div
                    id="eyeIconContainer"
                    className="w-1/12 my-auto h-3/6"
                    onClick={() => dispatch(RsetShowPassword((prev) => !prev))}
                  >
                    <Eye className="h-full w-full text-violet-700" />
                  </div>
                </>
              )}
            </div>
            <div id="passInput" className="w-full sm:w-5/6 lg:w-4/6 h-16 flex mb-4 px-2 pl-4 mx-auto rounded-3xl bg-zinc-800">
              <div id="passIconContainer" className="w-1/12 my-auto h-3/6">
                <Lock className="h-full w-full text-violet-700" />
              </div>
              {useSelector(selectShowPasswordConfirmation) ? (
                <>
                  <Input
                    className="bg-transparent h-full focus-visible:ring-0 focus-visible:ring-offset-0 mx-2 text-gray-400 w-11/12"
                    value={useSelector(selectPasswordConfirmation)}
                    onChange={(e) => dispatch(RsetPasswordConfirmation(e.target.value))}
                    style={{ border: "none transparent", outline: "none" }}
                    type="text"
                    placeholder="تأیید رمز عبور"
                  />
                  <div
                    id="eyeOffIconContainer"
                    className="w-1/12 my-auto h-3/6"
                    onClick={() => dispatch(RsetShowPasswordConfirmation((prev) => !prev))}
                  >
                    <EyeOff className="h-full w-full text-violet-700" />
                  </div>
                </>
              ) : (
                <>
                  <Input
                    className="bg-transparent h-full focus-visible:ring-0 focus-visible:ring-offset-0 mx-2 text-gray-400 w-11/12"
                    value={useSelector(selectPasswordConfirmation)}
                    onChange={(e) => dispatch(RsetPasswordConfirmation(e.target.value))}
                    style={{ border: "none transparent", outline: "none" }}
                    type="password"
                    placeholder="تأیید رمز عبور"
                  />
                  <div
                    id="eyeIconContainer"
                    className="w-1/12 my-auto h-3/6"
                    onClick={() => dispatch(RsetShowPasswordConfirmation((prev) => !prev))}
                  >
                    <Eye className="h-full w-full text-violet-700" />
                  </div>
                </>
              )}
            </div>
            <div id="submitContainer" className="w-full sm:w-5/6 lg:w-4/6 py-1 flex justify-between px-2 sm:px-4 mx-auto mt-4 rounded-3xl">
              <div id="submitLinksContainer">
                <a
                  className="block py-1  text-amber-600 hover:text-amber-500"
                  href="/login"
                >
                  حساب کاربری دارم
                </a>
              </div>
              <Button
                className="h-4/6 bg-gradient-to-t focus-visible:ring-0 focus-visible:ring-offset-0 from-gray-300 to-purple-600 text-xl text-white rounded-lg py-2 px-10 hover:bg-gradient-to-t hover:from-gray-400 hover:to-purple-700"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                ثبت نام
              </Button>
            </div>
          </div>
        </div>
        <img
          src="/design.png"
          className="md:h-full h-auto md:w-5/12 w-full"
          alt=""
        />
      </div>
    </>
  );
};

export default SignUp;

