"use client";

// import React from "react";
import React , { useEffect } from "react";
import { Input } from "../ui/input"
import { Button } from "../ui/button";
import { CircleUserRound, Eye, EyeOff, Lock } from "lucide-react";
import { RsetUserName, selectUserName, RsetPassword, selectPassword, RsetShowPassword, selectShowPassword, RsetUserErrorStyle, selectUserErrorStyle, RsetPasswordErrorStyle, selectPasswordErrorStyle } from "@/slices/MainSlice";
import { AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";


const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const userNameIsValid = useSelector(selectUserName) !== "";
  const passwordIsValid = useSelector(selectPassword).length > 7;
  const formIsValid = userNameIsValid && passwordIsValid;

  const handleLogin = () => {
    // if (userName === "qwerty" && password === "Parsa123") {
    //   console.log("logged in!");
    // } else {
    //   console.log("wrong password!");
    // }
  
    !userNameIsValid? dispatch(RsetUserErrorStyle({border:"3px solid red"})): dispatch(RsetUserErrorStyle({border:"none"}));
    !passwordIsValid? dispatch(RsetPasswordErrorStyle({border:"3px solid red"})): dispatch(RsetPasswordErrorStyle({border:"none"}));
  };

useEffect(() => {
    dispatch(RsetUserName(""))
    dispatch(RsetPassword(""))
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
          <div id="formContiner" className="flex flex-col px-2 bg-ate-500 border-4 md:px-0 mx-auto rounded-2xl shadow-md py-32 md:py-40 my-20 md:my-28">
            <div id="userInput" className="w-full sm:w-5/6 lg:w-4/6 h-16 flex mb-4 px-2 mx-auto bg-zinc-800 rounded-3xl" style={useSelector(selectUserErrorStyle)}>
              <div id="userIconContainer" className="w-1/12 my-auto h-4/6">
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
            <div id="passInput" className="w-full sm:w-5/6 lg:w-4/6 h-16 flex mb-4 px-2 pl-4 mx-auto rounded-3xl bg-zinc-800" style={useSelector(selectPasswordErrorStyle)}>
              <div id="passIconContainer" className="w-1/12 my-auto h-5/6 md:h-4/6">
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
                    className="w-1/12 my-auto h-4/6"
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
                    className="w-1/12 my-auto h-4/6"
                    onClick={() => dispatch(RsetShowPassword((prev) => !prev))}
                  >
                    <Eye className="h-full w-full text-violet-700" />
                  </div>
                </>
              )}
            </div>
            <div id="submitContainer" className="w-full sm:w-5/6 lg:w-4/6 py-1 flex justify-between px-2 sm:px-4 mx-auto mt-4 rounded-3xl">
              <div id="submitLinksContainer">
                <a
                  className="block py-1 text-amber-400 hover:text-amber-300"
                  href="/signUp"
                >
                  فراموشی رمز عبور
                </a>
                <a
                  className="block py-1 text-purple-600 hover:text-purple-400"
                  href="/signUp"
                >
                  ایجاد حساب کاربری
                </a>
              </div>
              <Button
                className="h-4/6 bg-gradient-to-t focus-visible:ring-0 focus-visible:ring-offset-0 from-gray-300 to-purple-600 text-xl text-white rounded-lg py-2 px-10 hover:bg-gradient-to-t hover:from-gray-400 hover:to-purple-700"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                ورود
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

export default Login;
