"use client";

// import React from "react";
import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { CircleUserRound, Eye, EyeOff, Lock } from "lucide-react";
import {
  RsetUserName,
  selectUserName,
  RsetPassword,
  selectPassword,
  RsetShowPassword,
  selectShowPassword,
  RsetUserErrorStyle,
  selectUserErrorStyle,
  RsetPasswordErrorStyle,
  selectPasswordErrorStyle,
  RsetRememberMe,
  selectRememberMe,
} from "@/slices/MainSlice";
import { AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const userName = useSelector(selectUserName);
  const password = useSelector(selectPassword);
  const showPassword = useSelector(selectShowPassword);
  const rememberMe = useSelector(selectRememberMe);
  const userErrorStyle = useSelector(selectUserErrorStyle);
  const passwordErrorStyle = useSelector(selectPasswordErrorStyle);

  const userNameIsValid = userName !== "";
  const passwordIsValid = password.length > 7;
  const formIsValid = userNameIsValid && passwordIsValid;

  const [path, setPath] = useState("");

  const handleLogin = (event: any) => {
    if (formIsValid) {
      if (userName === "qwerty" && password === "Parsa123") {
        if (rememberMe) {
          localStorage.setItem("username", userName);
          localStorage.setItem("password", password);
          localStorage.setItem("rememberMe", "true");
        } else {
          localStorage.removeItem("username");
          localStorage.removeItem("password");
          localStorage.removeItem("rememberMe");
        }
        setPath("/");
        window.location.href = "/";
      } else {
        console.log("wrong username or password!");
        setPath("");
      }
    }
    if (path != "/") {
      event.preventDefault();
    }

    !userNameIsValid
      ? dispatch(RsetUserErrorStyle({ border: "3px solid red" }))
      : dispatch(RsetUserErrorStyle({ border: "none" }));
    !passwordIsValid
      ? dispatch(RsetPasswordErrorStyle({ border: "3px solid red" }))
      : dispatch(RsetPasswordErrorStyle({ border: "none" }));
  };

  useEffect(() => {
    dispatch(RsetUserName(""));
    dispatch(RsetPassword(""));
    dispatch(RsetShowPassword(false));
    const userStore = localStorage.getItem("username");
    const passStore = localStorage.getItem("password");
    const remStore = localStorage.getItem("rememberMe");

    if (userStore !== null && passStore !== null && remStore === "true") {
      dispatch(RsetUserName(userStore));
      dispatch(RsetPassword(passStore));
      console.log(rememberMe);
      dispatch(RsetRememberMe(!true));
      console.log(rememberMe);
    }

  }, []);

  return (
    <>
      <div id="container" dir="ltr" className="h-screen md:flex">
        <div
          id="leftPartContainer"
          className="md:h-full md:w-7/12 px-2 py-8 md:px-16"
          dir="rtl"
        >
          <img
            id="logo"
            className="w-44 h-16 mx-2 md:m-0"
            src="/logo.png"
            alt=""
          />
          <div
            id="formContiner"
            className="border4 rounded-2xl shadow-[0_-10px_60px_-15px] mx-auto px-2 sm:px-2 md:px-0 py-32 md:py-40 my-20 md:my-28"
          >
            <div
              id="userInput"
              className="w-full sm:w-5/6 lg:w-4/6 h-16 flex px-2 mb-4 mx-auto bg-zinc-800 rounded-3xl"
              style={userErrorStyle}
            >
              <div id="userIconContainer" className="w-1/12 h-4/6 my-auto">
                <CircleUserRound className="h-full w-full text-violet-700" />
              </div>
              <Input
                className="bg-transparent w-11/12 h-full focus-visible:ring-0 focus-visible:ring-offset-0 border-transparent focus:border-transparent focus:ring-0 mx-2 text-gray-400"
                value={userName!}
                onChange={(e) => dispatch(RsetUserName(e.target.value))}
                type="text"
                placeholder="نام کاربری"
              />
            </div>
            <div
              id="passInput"
              className="w-full sm:w-5/6 lg:w-4/6 h-16 flex mx-auto mb-4 px-2 pl-4 rounded-3xl bg-zinc-800"
              style={passwordErrorStyle}
            >
              <div
                id="passIconContainer"
                className="w-1/12 my-auto h-5/6 md:h-4/6"
              >
                <Lock className="h-full w-full text-violet-700" />
              </div>
              {showPassword ? (
                <>
                  <Input
                    className="bg-transparent w-11/12 h-full focus-visible:ring-0 focus-visible:ring-offset-0 border-transparent focus:border-transparent focus:ring-0 mx-2 text-gray-400"
                    value={password}
                    onChange={(e) => dispatch(RsetPassword(e.target.value))}
                    style={{ border: "none transparent", outline: "none" }}
                    type="text"
                    placeholder="رمز عبور"
                  />
                  <div
                    id="eyeOffIconContainer"
                    className="w-1/12 h-4/6 my-auto"
                    onClick={() => dispatch(RsetShowPassword(showPassword))}
                  >
                    <EyeOff className="h-full w-full text-violet-700" />
                  </div>
                </>
              ) : (
                <>
                  <Input
                    className="bg-transparent w-11/12 h-full focus-visible:ring-0 focus-visible:ring-offset-0 border-transparent focus:border-transparent focus:ring-0 mx-2 text-gray-400"
                    value={password}
                    onChange={(e) => dispatch(RsetPassword(e.target.value))}
                    type="password"
                    placeholder="رمز عبور"
                  />
                  <div
                    id="eyeIconContainer"
                    className="w-1/12 my-auto h-4/6"
                    onClick={() => dispatch(RsetShowPassword(showPassword))}
                  >
                    <Eye className="h-full w-full text-violet-700" />
                  </div>
                </>
              )}
            </div>
            <div
              id="submitContainer"
              className="w-full sm:w-5/6 lg:w-4/6 flex justify-between px-2 sm:px-4 py-1 mx-auto mt-4 rounded-3xl"
            >
              <div id="submitLinksContainer">
                <a
                  className="block py-1 text-amber-400 hover:text-amber-300"
                  href="/forgetPass"
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
              <div className="h-fit">
                <Label htmlFor="rememberMe" className="px-2 text-purple-600">
                  من را به خاطر بسپار
                </Label>
                <Checkbox
                  id="rememberMe"
                  checked={(rememberMe)}
                  onClick={() => dispatch(RsetRememberMe(!rememberMe))}
                  className="mb-4 bg-yellow-300 border-none data-[state=checked]:bg-purple-600"
                />
                <br />
                <a href={path}>
                  <Button
                    className="h-4/6 w-full focus-visible:ring-0 focus-visible:ring-offset-0 bg-gradient-to-t from-gray-300 to-purple-600 text-xl text-white rounded-lg py-2 px-10 hover:bg-gradient-to-t hover:from-gray-400 hover:to-purple-700"
                    onClick={(e) => {
                      handleLogin(e);
                    }}
                  >
                    ورود
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/design.png"
          className=" h-auto md:h-full w-full md:w-5/12"
          alt=""
        />
      </div>
    </>
  );
};

export default Login;
