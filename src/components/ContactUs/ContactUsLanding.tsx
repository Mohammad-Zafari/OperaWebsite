// ContactUsLanding.tsx
"use client";
import { useDispatch, useSelector } from 'react-redux';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RsetContactName, RsetContactPhoneNumber, RsetContactText, resetContactForm } from "../../slices/contactSlice"

const ContactUsLanding = () => {
  const dispatch = useDispatch();
  
  // Use selector to get current values from the store
  const contactName = useSelector((state: any) => state.contact.contactName);
  const contactPhoneNumber = useSelector((state: any) => state.contact.contactPhoneNumber);
  const contactText = useSelector((state: any) => state.contact.contactText);

  return (
    <div>
      <h1 className="text-black text-right mr-32 text-7xl font-bold">
        ارتباط با ما
      </h1>
      <img src="/subtract.svg" alt="" className="ml-96 bottom my-5 size-28" />
      <div id="container" className="w-[60%] rounded-[20px] bg-white m-auto p-3 ">
        <div id="main" className="m-auto bg-white rounded-[24px] shadow-customShadow1 p-8 pb-4 pt-10 ">
          <p className="text-purple-700 text-3xl font-bold text-right pb-5">
            درصورت داشتن درخواست، نظر یا انتقاد برای ما بنویسید.
          </p>

          <div className="relative">
            <Input
              placeholder="نام و نام خانوادگی"
              className="text-right border-gray-800 border-[2px] my-3 pr-14 pl-5 py-12 placeholder-purple-300 text-2xl font-bold focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl shadow-lg"
              value={contactName}
              onChange={(e) => {
                dispatch(RsetContactName(e.target.value));
              }}
            />
            <img src="/account_circle.svg" alt="" className="absolute right-3 top-1/2 transform -translate-y-1/2 " />
          </div>
          <div className="relative">
            <Input
              placeholder="شماره تلفن همراه"
              value={contactPhoneNumber || ''} // Display as empty string when undefined
              type="text" // Use text to allow for custom handling
              className="text-right border-gray-800 border-2 my-5 p-5 placeholder-purple-300 text-2xl font-bold pr-14 pl-5 py-12 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl shadow-lg "
              onChange={(e) => {
                const newPhoneNumber = e.target.value;
                // Validate input: allow only digits or empty
                if (/^\d*$/.test(newPhoneNumber)) {
                  dispatch(RsetContactPhoneNumber(newPhoneNumber ? parseInt(newPhoneNumber) : undefined));
                }
              }}
            />
            <img src="/call.svg" alt="" className="absolute right-3 top-1/2 transform -translate-y-1/2 " />
          </div>
          <div className="relative">
            <Textarea
              placeholder="متن درخواست / نظر / انتقاد"
              className="text-right border-gray-800 border-2 my-5 pb-4 pt-12  placeholder-purple-300 text-2xl font-bold pr-14 pl-5 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl shadow-lg h-72 placeholder-opacity-100"
              value={contactText}
              onChange={(e) => {
                dispatch(RsetContactText(e.target.value));
              }}
            />
            <img src="/chat.svg" alt="" className="absolute right-3 top-8 transform -translate-y-1/2 " />
          </div>
          <Button
            variant="outline"
            className="text-right border-gray-800 border-2 mb-0 px-9 py-8 text-purple-700 text-2xl font-bold rounded-2xl focus-visible:ring-0 focus-visible:ring-offset-0 "
            onClick={() => {
              console.log({ contactName, contactPhoneNumber, contactText }); // Log the current values
              dispatch(resetContactForm()); // Reset the form state in Redux
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
