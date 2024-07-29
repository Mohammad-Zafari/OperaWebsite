"use client";

import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CircleUserRound, Eye, EyeOff, Lock, Mail } from "lucide-react";
import {
  RsetUserName,
  selectUserName,
  RsetPassword,
  selectPassword,
  RsetShowPassword,
  selectShowPassword,
  RsetFirstName,
  selectFirstName,
  RsetLastName,
  selectLastName,
  RsetEmail,
  selectEmail,
  RsetPasswordConfirmation,
  selectPasswordConfirmation,
  RsetShowPasswordConfirmation,
  selectShowPasswordConfirmation,
  RsetFormErrors,
  selectFormErrors,
  RsetGender,
  selectGender,
} from "@/slices/MainSlice";
import { AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Label } from "../ui/label";

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();

  const gender = useSelector(selectGender);
  const firstName = useSelector(selectFirstName);
  const lastName = useSelector(selectLastName);
  const userName = useSelector(selectUserName);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const passwordConfirmation = useSelector(selectPasswordConfirmation);
  const showPassword = useSelector(selectShowPassword);
  const showPasswordConfirmation = useSelector(selectShowPasswordConfirmation);
  const formErrors = useSelector(selectFormErrors);

  const chars = userName !== null ? userName.split("") : [];
  let usernameValidation = 0;
  chars.forEach((char, i) => {
    if (char === "-" || (char >= "0" && char <= "9" && i == 0)) {
      usernameValidation++;
    }
  });

  const passwordValidation = (pass: string) => {
    const hasNumber = /[0-9]/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/;
    const isEnough = pass.length > 7;

    return (
      hasNumber.test(pass) &&
      hasUpperCase.test(pass) &&
      hasSymbol.test(pass) &&
      hasLowerCase.test(pass) &&
      isEnough
    );
  };

  const firstNameIsValid = firstName !== "";
  const lastNameIsValid = lastName !== "";
  const userNameIsValid = usernameValidation > 0 ? false : true;
  const userNameIsEmpty = userName == "";
  const emailIsValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const emailIsEmpty = email === "";
  const passwordIsValid = passwordValidation(password);
  const passwordIsEmpty = password === "";
  const passwordConfirmIsValid = password === passwordConfirmation;
  const passwordConfirmIsEmpty = passwordConfirmation === "";
  const formIsValid =
    firstNameIsValid &&
    lastNameIsValid &&
    !userNameIsEmpty &&
    userNameIsValid &&
    emailIsValid &&
    !emailIsEmpty &&
    passwordIsValid &&
    !passwordIsEmpty &&
    passwordConfirmIsValid &&
    !passwordConfirmIsEmpty;

  const validation = () => {
    var errors = {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
      passwordConfirmation: "",
    };

    if (!firstNameIsValid) {
      errors.firstName = "نام نمی‌تواند خالی باشد !";
    }
    if (!lastNameIsValid) {
      errors.lastName = "نام خانوادگی نمی‌تواند خالی باشد !";
    }
    if (!emailIsValid) {
      errors.email = "ایمیل وارد شده صحیح نمی‌باشد !";
    }
    if (emailIsEmpty) {
      errors.email = "ایمیل نمی‌تواند خالی باشد !";
    }
    if (!userNameIsValid) {
      errors.userName = 'نام کابری نباید شامل "-" باشد یا با عدد شروع شود ! ';
    }
    if (userNameIsEmpty) {
      errors.userName = "نام کاربری نمی‌تواند خالی باشد !";
    }
    if (!passwordIsValid) {
      errors.password =
        "رمز عبور باید حداقل شامل یک حرف کوچک، یک حرف بزرگ ، یک سمبل، یک عدد و حداقل شامل 8 کاراکتر باشد !";
    }
    if (passwordIsEmpty) {
      errors.password = "رمز عبور نمی‌تواند خالی باشد !";
    }
    if (!passwordConfirmIsValid) {
      errors.passwordConfirmation = "با رمز عبور مطابقت ندارد !";
    }
    if (passwordConfirmIsEmpty) {
      errors.passwordConfirmation = "تأیید رمز عبور نمی‌تواند خالی باشد !";
    }

    return errors;
  };

  const handleSignUp = () => {
    if (formIsValid) {
      dispatch(RsetFormErrors({}));

      if (userName !== "qwerty" && email !== "opera@gmail.com") {
        console.log("Registerd!");
      } else {
        console.log("username or email is taken !");
      }
    } else {
      dispatch(RsetFormErrors(validation()));
    }
  };

  useEffect(() => {
    dispatch(RsetUserName(""));
    dispatch(RsetPassword(""));
    dispatch(
      RsetFormErrors({
        first: "",
        last: "",
        email: "",
        userName: "",
        password: "",
        passwordConfirm: "",
      })
    );
  }, []);

  return (
    <>
      <div id="container" className="h-screen md:flex">
        <div
          id="leftPartContainer"
          className="md:h-full md:w-7/12 px-2 py-8 md:px-16"
          style={{ direction: "rtl" }}
        >
          <img
            id="logo"
            className="w-44 h-16 mx-2 md:m-0"
            src="/logo.png"
            alt=""
          />
          <div
            id="formContiner"
            className="flex flex-col px-2 bg-ate-500 border-4 md:px-0 mx-auto rounded-2xl shadow-md py-12 md:py-20 my-12 md:my-16"
          >
            <div
              id="genderContainer"
              className="w-full sm:w-5/6 lg:w-4/6 flex justi px-2 mx-auto rounded-3xl"
            >
              <Label className="w-fit flex items-center">
                زن
                <Input
                  name="gender"
                  onChange={() => dispatch(RsetGender(gender))}
                  type="radio"
                  className="mx-2"
                />
              </Label>
              <Label className="w-fit flex items-center ml-8">
                مرد
                <Input
                  name="gender"
                  onChange={() => dispatch(RsetGender(gender))}
                  type="radio"
                  className="mx-2"
                />
              </Label>
            </div>

            <div
              id="fullNameInput"
              className="w-full sm:w-5/6 lg:w-4/6 h-16 my-2 flex justify-items-center mx-auto"
            >
              <div
                id="firstNameInput"
                className="w-full h-16 flex px-2 ml-2 bg-zinc-800 rounded-3xl"
              >
                <div
                  id="firstNameIconContainer"
                  className="w-2/12 my-auto h-3/6"
                >
                  <CircleUserRound className="h-full w-full text-violet-700" />
                </div>
                <Input
                  className="bg-transparent h-full focus-visible:ring-0 focus-visible:ring-offset-0 mx-2 text-gray-400 w-11/12"
                  value={firstName}
                  onChange={(e) => dispatch(RsetFirstName(e.target.value))}
                  style={{ border: "none transparent", outline: "none" }}
                  type="text"
                  placeholder="نام"
                />
              </div>
              <div
                id="lastNameInput"
                className="w-full h-16 flex mb-4 px-2 mr-2 bg-zinc-800 rounded-3xl"
              >
                <div
                  id="lastNameIconContainer"
                  className="w-2/12 my-auto h-3/6"
                >
                  <CircleUserRound className="h-full w-full text-violet-700" />
                </div>
                <Input
                  className="bg-transparent h-full focus-visible:ring-0 focus-visible:ring-offset-0 mx-2 text-gray-400 w-11/12"
                  value={lastName}
                  onChange={(e) => dispatch(RsetLastName(e.target.value))}
                  style={{ border: "none transparent", outline: "none" }}
                  type="text"
                  placeholder="نام خانوادگی"
                />
              </div>
            </div>
            <div className="w-full sm:w-5/6 lg:w-4/6 text-xs text-red-600 flex justify-items-center mx-auto">
              {!firstNameIsValid && (
                <p className="w-full px-4 ml-2">{formErrors.firstName!}</p>
              )}
              {!lastNameIsValid && (
                <p className="w-full px-4 mr-2">{formErrors.lastName}</p>
              )}
            </div>

            <div
              id="userNameInput"
              className="w-full sm:w-5/6 lg:w-4/6 h-16 flex my-2 px-2 mx-auto bg-zinc-800 rounded-3xl"
            >
              <div id="userIconContainer" className="w-1/12 my-auto h-3/6">
                <CircleUserRound className="h-full w-full text-violet-700" />
              </div>
              <Input
                className="bg-transparent h-full focus-visible:ring-0 focus-visible:ring-offset-0 mx-2 text-gray-400 w-11/12"
                value={userName!}
                onChange={(e) => dispatch(RsetUserName(e.target.value))}
                style={{ border: "none transparent", outline: "none" }}
                type="text"
                placeholder="نام کاربری"
              />
            </div>
            {(!userNameIsValid || userNameIsEmpty) && (
              <p className="w-full sm:w-5/6 lg:w-4/6 text-xs text-red-600 px-2 mx-auto">
                {formErrors.userName}
              </p>
            )}
            <div
              id="emailInput"
              className="w-full sm:w-5/6 lg:w-4/6 h-16 flex my-2 px-2 mx-auto bg-zinc-800 rounded-3xl"
            >
              <div id="emailIconContainer" className="w-1/12 my-auto h-3/6">
                <Mail className="h-full w-full text-violet-700" />
              </div>
              <Input
                className="bg-transparent h-full focus-visible:ring-0 focus-visible:ring-offset-0 mx-2 text-gray-400 w-11/12"
                value={email}
                onChange={(e) => dispatch(RsetEmail(e.target.value))}
                style={{ border: "none transparent", outline: "none" }}
                type="email"
                placeholder="ایمیل"
              />
            </div>
            {(!emailIsValid || emailIsEmpty) && (
              <p className="w-full sm:w-5/6 lg:w-4/6 text-xs text-red-600 px-2 mx-auto">
                {formErrors.email}
              </p>
            )}
            <div
              id="passInput"
              className="w-full sm:w-5/6 lg:w-4/6 h-16 flex my-2 px-2 pl-4 mx-auto rounded-3xl bg-zinc-800"
            >
              <div id="passIconContainer" className="w-1/12 my-auto h-3/6">
                <Lock className="h-full w-full text-violet-700" />
              </div>
              {showPassword ? (
                <>
                  <Input
                    className="bg-transparent h-full focus-visible:ring-0 focus-visible:ring-offset-0 mx-2 text-gray-400 w-11/12"
                    value={password}
                    onChange={(e) => dispatch(RsetPassword(e.target.value))}
                    onCopy={(e) => e.preventDefault()}
                    onPaste={(e) => e.preventDefault()}
                    onCut={(e) => e.preventDefault()}
                    style={{ border: "none transparent", outline: "none" }}
                    type="text"
                    placeholder="رمز عبور"
                  />
                  <div
                    id="eyeOffIconContainer"
                    className="w-1/12 my-auto h-3/6"
                    onClick={() => dispatch(RsetShowPassword(!showPassword))}
                  >
                    <EyeOff className="h-full w-full text-violet-700" />
                  </div>
                </>
              ) : (
                <>
                  <Input
                    className="bg-transparent h-full focus-visible:ring-0 focus-visible:ring-offset-0 mx-2 text-gray-400 w-11/12"
                    value={password}
                    onChange={(e) => dispatch(RsetPassword(e.target.value))}
                    onCopy={(e) => e.preventDefault()}
                    onPaste={(e) => e.preventDefault()}
                    onCut={(e) => e.preventDefault()}
                    style={{ border: "none transparent", outline: "none" }}
                    type="password"
                    placeholder="رمز عبور"
                  />
                  <div
                    id="eyeIconContainer"
                    className="w-1/12 my-auto h-3/6"
                    onClick={() => dispatch(RsetShowPassword(!showPassword))}
                  >
                    <Eye className="h-full w-full text-violet-700" />
                  </div>
                </>
              )}
            </div>
            {(!passwordIsValid || passwordIsEmpty) && (
              <p className="w-full sm:w-5/6 lg:w-4/6 text-xs text-red-600 px-2 mx-auto">
                {formErrors.password}
              </p>
            )}
            <div
              id="passConfirmationInput"
              className="w-full sm:w-5/6 lg:w-4/6 h-16 flex my-2 px-2 pl-4 mx-auto rounded-3xl bg-zinc-800"
            >
              <div id="passIconContainer" className="w-1/12 my-auto h-3/6">
                <Lock className="h-full w-full text-violet-700" />
              </div>
              {showPasswordConfirmation ? (
                <>
                  <Input
                    className="bg-transparent h-full focus-visible:ring-0 focus-visible:ring-offset-0 mx-2 text-gray-400 w-11/12"
                    value={passwordConfirmation}
                    onChange={(e) =>
                      dispatch(RsetPasswordConfirmation(e.target.value))
                    }
                    onCopy={(e) => e.preventDefault()}
                    onPaste={(e) => e.preventDefault()}
                    onCut={(e) => e.preventDefault()}
                    style={{ border: "none transparent", outline: "none" }}
                    type="text"
                    placeholder="تأیید رمز عبور"
                  />
                  <div
                    id="eyeOffIconContainer"
                    className="w-1/12 my-auto h-3/6"
                    onClick={() =>
                      dispatch(
                        RsetShowPasswordConfirmation(!showPasswordConfirmation)
                      )
                    }
                  >
                    <EyeOff className="h-full w-full text-violet-700" />
                  </div>
                </>
              ) : (
                <>
                  <Input
                    className="bg-transparent h-full focus-visible:ring-0 focus-visible:ring-offset-0 mx-2 text-gray-400 w-11/12"
                    value={passwordConfirmation}
                    onChange={(e) =>
                      dispatch(RsetPasswordConfirmation(e.target.value))
                    }
                    onCopy={(e) => e.preventDefault()}
                    onPaste={(e) => e.preventDefault()}
                    onCut={(e) => e.preventDefault()}
                    style={{ border: "none transparent", outline: "none" }}
                    type="password"
                    placeholder="تأیید رمز عبور"
                  />
                  <div
                    id="eyeIconContainer"
                    className="w-1/12 my-auto h-3/6"
                    onClick={() =>
                      dispatch(
                        RsetShowPasswordConfirmation(!showPasswordConfirmation)
                      )
                    }
                  >
                    <Eye className="h-full w-full text-violet-700" />
                  </div>
                </>
              )}
            </div>
            {(!passwordConfirmIsValid || passwordConfirmIsEmpty) && (
              <p className="w-full sm:w-5/6 lg:w-4/6 text-xs text-red-600 px-2 mx-auto">
                {formErrors.passwordConfirmation}
              </p>
            )}
            <div
              id="submitContainer"
              className="w-full sm:w-5/6 lg:w-4/6 py-1 flex justify-between px-2 sm:px-4 mx-auto mt-4 rounded-3xl"
            >
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
                  handleSignUp();
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
