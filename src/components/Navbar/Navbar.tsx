
"use client"
import { Import } from "lucide-react"; // Ensure to import this if you use it later
import f from "../../../public/logo (1).svg"; // Ensure the path is correct
import { Button } from "@/components/ui/button";
import { NavbarResponsive } from "./NavbarResponsive";
import {RsetLoggedIn,RsetSignedUp,selectLoggedIn,selectSignedUp} from "../../slices/NavabarSlice"
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const dispatch= useDispatch();
  const loggedIn=useSelector(selectLoggedIn)
  const signedUp=useSelector(selectSignedUp)
  const handleSignup = () => {
    dispatch(RsetSignedUp(true))
    dispatch(RsetLoggedIn(false))
    window.location.href="/signUp"
  }
  const handleLogin = () => {
    dispatch(RsetLoggedIn(true))
    dispatch(RsetSignedUp(false))
    window.location.href="/login"
  }
  return (
    <div
      id="container"
      className="max-w-[1920px] flex w-[95%] lg:h-28 md:h-20 sm:h-16 h-14 text-white justify-center bg-gradient-to-l from-[#552E87]/10 to-black/30 shadow-xl items-center rounded-xl mx-auto z-50 fixed left-0 right-0 top-0"
      style={{
        background:
          "linear-gradient(90.02deg, #000000 -8.68%, #552E87 105.83%)",
        boxShadow: "0px 5px 42.6px 9px rgba(0, 0, 0, 1.36)",
      }}
      //box-shadow: 0px 5px 42.6px 9px rgba(0, 0, 0, 0.36);
    >
      <div id="left-section" className="flex-2 flex items-center lg:pl-12 md:pl-6">
        
        <Button
          className="text-black  lg:h-[50px] lg:text-sm text-xs rounded-2xl absolute transition duration-200 hover:bg-[#a07f3b] bg-[#b09945] lg:w-[100px] w-[80px] ml-2"
          onClick={handleSignup}
        >
           
          <img src="/person_add.svg" alt="" className="lg:"/> عضویت         
          
        </Button>
        <Button
          className="bg-white text-black lg:w-[190px] lg:h-[50px] rounded-2xl text-right justify-end hover:bg-gray-300 transition duration-200 lg:text-sm text-xs w-[150px] ml-2"
          onClick={handleLogin}
        >
          
            <img src="/login.svg" alt="" className="lg:mr-4 md:mr- mr-1 " />
           ورود
          
  
        </Button>
      </div>
      <div
        id="middle-section"
        className="flex-6 md:flex xl:text-xl md:text-lg sm:text-sm text-xs justify-center hidden items-center lg:space-x-5"
      >
        <div className="flex-1 cursor-pointer  w-full text-center"><Link href="/contactus">
            ارتباط با ما
            </Link></div>
        <div className="flex-1 cursor-pointer  text-center"><Link href="/#main-footer">
            درباره ما
            </Link></div>
        <div className="flex-1 cursor-pointer  text-center"><Link href="/#customers-section">
            مشتریان
            </Link></div>
        <div className="flex-1 cursor-pointer  text-center"><Link href="/#blog-container">
            وبلاگ
            </Link></div>
        <div className="flex-1 cursor-pointer  text-center"><Link href="/#servicesCardsContainer">
            طرح ها
            </Link></div>
        <div className="flex-1 cursor-pointer  text-center">
        <Link href="/">
            خانه
            </Link>
          </div>
      </div>
      <div id="right-section" className="lg:flex-2 md:flex-1 md:flex hidden">
        <img src="logo (1).svg" alt="" className="lg:size-16 md:size-10 sm:size-8 size-6 flex-1 flex" />
      </div>
      <div id="small-screen-right-section" className="md:hidden flex ">
        <NavbarResponsive/>

      </div>
    </div>
  );
};

export default Navbar;