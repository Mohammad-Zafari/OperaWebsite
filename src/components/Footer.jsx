export default function Footer() {
  return (
    <div id="container" className="flex flex-col min-h-screen">
      {/* Main content goes here */}
      <div className="flex-grow" />
      <div className="bg-orange-200 z-10  w-full  h-[830px] flex rotate-[-9deg] rounded-[100px] mb-[-110px] bottom-[-70px]">
        <div className="bg-[rgba(51,51,51,1)] mx-[20px] mt-20 rounded-[60px] h-[590px] z-20 rotate-[9deg]  bottom-[200px]">
          <div className="grid grid-cols-3 rounded-[60px] h-[500px] ">
            <div className="bg-slate-600 col-span-1 flex items-center justify-center ml-9 rounded-[60px]">
              <p className="text-white">Hello world!</p>
            </div>
            <div className="bg-[rgba(51,51,51,1)] col-span-2 flex rounded-[60px] mr-9 grid grid-rows-4">
              <div className="text-white row-span-2 grid grid-cols-12 mb-5 mt-11">
                <p className="col-span-10 text-right text-3xl">
                  دفتر مرکزی: تهران، پاسداران، محله دروس، خیابان میربلوکی، پلاک
                  9، واحد 101 دپارتمان فنی: تهران، دانشگاه علم و صنعت، ساختمان
                  دانشکده برق، طبقه 2، دفتر شتاب دهنده هوش مصنوعی گشتاسپ
                </p>
                <img
                  src="/location icon.svg"
                  alt=""
                  className="col-span-2 pl-10 mt-2"
                />
              </div>
              <div className="text-white row-span-1 grid grid-cols-12 mt-0">
                <p className="col-span-10 text-right text-2xl">
                  تلفن تماس: 02173227884 | 09224947358 | 09909928171
                </p>
                <img
                  src="/phone icon.svg"
                  alt=""
                  className="col-span-2 pl-10 mt-1"
                />
              </div>
              <div className="text-white row-span-1 grid grid-cols-12 justify-center pt-6">
                <p className="col-span-10 text-right text-2xl rtl">
                  info@opera24.net:ایمیل
                </p>
                <img
                  src="/email icon.svg"
                  className="col-span-2 pl-10 mt-1"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="text-white text-right mx-9 pb-2 flex justify-center rounded-[60px] mt-8">
            <p className="text-sm rtl mr-2">
              . تمامی حقوق مادی و معنوی این وبسایت برای مجموعه
              <span style={{ color: "rgba(85, 46, 135, 1)" }}> اپرا</span> محفوظ
              است
            </p>
            <img src="/Group 2483.svg" alt="" className="w-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
