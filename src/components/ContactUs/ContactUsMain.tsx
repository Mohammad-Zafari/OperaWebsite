// ContactUsMain.tsx
"use client";
import { useDispatch, useSelector } from 'react-redux';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RsetContactName, RsetContactPhoneNumber, RsetContactText, resetContactForm } from "../../slices/contactSlice"; // Adjust the import paths

const ContactUsMain = () => {
  const dispatch = useDispatch();
  
  // Access state from the Redux store
  const contactName = useSelector((state: any) => state.contact.contactName);
  const contactPhoneNumber = useSelector((state: any) => state.contact.contactPhoneNumber);
  const contactText = useSelector((state: any) => state.contact.contactText);
  
  return (
    <div className="flex items-center mb-24 md:mb-48 flex-col lg:mt-28 mt-8 md:mx-20 lg:mr-10">
      <p className="text-[#d9d9d9] text-2xl md:text-4xl lg:text-5xl font-bold lg:ml-44 lg:mt-0 md:mt-8 mt-5">ارتباط با ما</p>
      <div id="container" className="w-[75%] md:w-[70%] lg:w-[90%] rounded-[40px] bg-white p-1 sm:p-2 md:p-3 lg:mt-20 md:mt-16 sm:mt-10 mt-8 shadow-customShadow1">
        <div id="main" className="bg-white rounded-[44px] shadow-customShadow1 px-2 pt-10 pb-8 md:pb-20 relative ">
          <p className="text-purple-700 md:text-base sm:text-sm text-[10px] font-bold text-right pb-5">
            درصورت داشتن درخواست، نظر یا انتقاد برای ما بنویسید.
          </p>

          <div className="relative">
            <Input
              placeholder="نام و نام خانوادگی"
              className="text-right border-gray-500 border-2 md:my-3 pr-14 pl-5 md:py-5 py-1 placeholder-purple-300 md:text-sm text-[8px] focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[35px] shadow-lg sm:text-xs"
              value={contactName}
              onChange={(e) => {
                dispatch(RsetContactName(e.target.value));
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
              value={contactPhoneNumber ? contactPhoneNumber.toString() : ''} // Convert to string for display
              className="text-right border-gray-500 border-2 my-1 lg:my-2 lg:py-5 placeholder-purple-300 sm:text-xs md:text-sm text-[8px] pr-14 lg:pl-5 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[35px] shadow-lg "
              onChange={(e) => {
                const newphoneNumber = e.target.value;
                // Validate input to allow only digits
                if (/^\d*$/.test(newphoneNumber)) {
                  dispatch(RsetContactPhoneNumber(newphoneNumber ? parseInt(newphoneNumber) : undefined));
                }
              }}
            />
            <img
              src="/call.svg"
              alt=""
              className="absolute right-3 top-1/2 transform -translate-y-1/2 md:size-9 sm:size-7 size-5"
            />
          </div>

          <div className="relative">
            <Textarea
              placeholder="متن درخواست / نظر / انتقاد"
              className="text-right border-gray-500 border-2 md:my-3 pt-3 placeholder-purple-300 md:text-sm sm:text-xs text-[8px] pr-14 pl-5 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[35px] shadow-lg pb-48"
              value={contactText}
              onChange={(e) => {
                dispatch(RsetContactText(e.target.value));
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
              className="absolute bottom-2 left-2 md:size-9 sm:size-7 size-5"
            />
          </div>

          <Button
            variant="outline"
            className="text-right border-gray-600 border-[2px] md:px-11 sm:px-7 px-5 text-purple-700 md:text-sm text-[8px] sm:text-xs font-bold md:rounded-3xl rounded-2xl focus-visible:ring-0 focus-visible:ring-offset-0 md:bottom-9 md:left-10 md:absolute ml-5 md:ml-0 md:mt-0 mt-4"
            onClick={() => {
              // Log the current values
              console.log({ contactName, contactPhoneNumber, contactText });
              dispatch(resetContactForm()); // Optional: Reset the form
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
