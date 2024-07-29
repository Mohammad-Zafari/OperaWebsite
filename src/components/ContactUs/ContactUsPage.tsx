import ContactUsMain from "./ContactUsMain";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import Map from "../Map";
const ContactUsPage = () => {
  return (
    <div
      id="container"
      className="bg-[url('/background-contactus-2.svg')]
    bg-cover bg-center h-full flex flex-col"
    >
      <div>
        <Navbar />
      </div>
      <div id="top-section" className="flex ">
        <div
          id="left-section"
          className=" flex flex-col flex-1 pt-72 pb-48 items-center justify-center"
        >
          <div id="map" className="flex-6 w-[70%] rounded-t-3xl">
            <Map />
          </div>
          <div
            id="address"
            className="flex-3 bg-[#333333] w-[70%] related flex flex-col items-end text-white text-sm font-light leading-relaxed "
          >
            {/* when we use map rounded doesnt apply because of the map     */}
            <div className="flex-2 flex items-center px-2">
              <p className="flex-12 text-right">
                دفتر مرکزی: تهران، پاسداران، محله دروس، خیابان میربلوکی، پلاک 9،
                واحد 101 دپارتمان فنی: تهران، دانشگاه علم و صنعت، ساختمان
                دانشکده برق، طبقه 2، دفتر شتاب دهنده هوش مصنوعی گشتاسپ
              </p>
              <img
                src="location icon (1).svg"
                className="flex-2 size-8 mx-2"
                alt=""
              />
            </div>
            <div className="flex-1 flex  px-2">
              <p className="flex-12 text-right">
                تلفن تماس: 02173227884 | 09224947358 | 09909928171
              </p>
              <img
                src="phone icon.svg "
                className="flex-2 size-8 mx-2"
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
