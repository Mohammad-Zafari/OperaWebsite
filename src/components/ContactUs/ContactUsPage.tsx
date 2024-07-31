import ContactUsMain from "./ContactUsMain";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import Map from "../Map";
import { HumburgerNavbar, SheetDemo } from "../Navbar/Haburger-menu";
import NewNavbar from "../Navbar/NewNavbar";
const ContactUsPage = () => {
  return (
    <div
      id="container"
      className="bg-[url('/background-contactus-2.svg')]
    bg-cover bg-center h-full flex flex-col"
    >
      <div>
        <Navbar />
        {/* <HumburgerNavbar/> */}
        {/* <NewNavbar/> */}
        {/* <SheetDemo/> */}
      </div>
      <div id="top-section" className="lg:flex lg:flex-row flex flex-col-reverse ">
        <div
          id="left-section"
          className=" flex flex-col flex-1 lg:pt-72 lg:pb-48 md:pb-20 pb-12 items-center justify-center"
        >
          <div id="map" className="flex-1 sm:flex-6 md:w-[70%] w-[70%]">
            <Map />
          </div>
          <div
            id="address"
            className="flex-1 sm:flex-3 bg-[#333333] md:w-[70%] w-[70%] related flex flex-col items-end text-white font-light leading-relaxed rounded-b-2xl"
          >
            {/* when we use map rounded doesnt apply because of the map     */}
            <div className="flex-2 flex items-center px-2 md:text-base sm:text-sm text-[8px] rounded-b-full">
              <p className="flex-12 text-right lg:pt-0 pt-4">
                دفتر مرکزی: تهران، پاسداران، محله دروس، خیابان میربلوکی، پلاک 9،
                واحد 101 دپارتمان فنی: تهران، دانشگاه علم و صنعت، ساختمان
                دانشکده برق، طبقه 2، دفتر شتاب دهنده هوش مصنوعی گشتاسپ
              </p>
              <img
                src="location icon (1).svg"
                className="flex-2 mx-2 lg:size-8 md:size-6 sm:size-5 size-4 sm:mb-5 md:mb-7 lg:mb-10"
                alt=""
              />
            </div>
            <div className="flex-1 flex  px-2  md:text-base sm:text-sm text-[8px]">
              <p className="flex-12 text-right lg:pt-0 py-3 ">
                تلفن تماس: 02173227884 | 09224947358 | 09909928171
              </p>
              <img
                src="phone icon.svg "
                className="flex-2 lg:size-8 md:size-6 sm:size-5 size-4 mx-2 lg:mt-[-8px] sm:mt-2 mt-[11px]"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <ContactUsMain />
        </div>
      </div>

      <div id="bottom-section" className="">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUsPage;
