import { Import } from "lucide-react"; // Ensure to import this if you use it later
import f from "../../../public/logo (1).svg"; // Ensure the path is correct
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div
      id="container"
      className="max-w-[1920px] flex w-[95%] h-28 text-white bg-gradient-to-l from-[#552E87]/10 to-black/30 shadow-xl items-center rounded-xl justify-center mx-auto"
      style={{
        background:
          "linear-gradient(90.02deg, #000000 -8.68%, #552E87 105.83%)",
        boxShadow: '0px 5px 42.6px 9px rgba(0, 0, 0, 1.36)'
      }}
      //box-shadow: 0px 5px 42.6px 9px rgba(0, 0, 0, 0.36);

    >
      <div id="left-section" className="flex-2 flex items-center pl-12">
        <Button
          className="text-black  h-[50px] text-sm rounded-2xl absolute transition duration-200 hover:bg-[#a07f3b] bg-[#b09945]"
          onClick={() => console.log("add")}
        >
          <img src="/person_add.svg" alt="" />
          عضویت
        </Button>
        <Button
          className="bg-white text-black w-[190px] h-[50px] text-sm  rounded-2xl text-right justify-end hover:bg-gray-300 transition duration-200 "
          onClick={() => console.log("enter")}
        >
          <img src="/login.svg" alt="" className="mr-4" />
          ورود
        </Button>
      </div>
      <div
        id="middle-section"
        className="flex-6 flex text-2xl justify-center items-center space-x-6"
      >
        <div className="flex-1">
           ارتباط با ما
        </div>
        <div className="flex-1">درباره ما</div>
        <div className="flex-1">مشتریان</div>
        <div className="flex-1">وبلاگ</div>
        <div className="flex-1">طرح ها</div>
        <div className="flex-1">خانه</div>
      </div>
      <div id="right-section" className="flex-2 flex">
        <img src="logo (1).svg" alt="" className="size-16 flex-1  flex" />
      </div>
    </div>
  );
};

export default Navbar;
