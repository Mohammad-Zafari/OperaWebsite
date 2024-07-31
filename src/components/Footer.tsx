const Footer = () => {
  return (
    <div
      id="container"
      className="flex flex-col items-center bg-[#333] text-white  xl:rounded-[100px] md:rounded-[60px] rounded-3xl mx-20 mb-8"
    >
      <div
        id="main"
        className=" flex flex-row text-right space-x-1 sm:space-x-5 md:space-x-20 xl:px-12 xl:pt-14 md:px-6 md:pt-5 pt-3 px-3 "
      >
        <div id="communication-ways " className="sm:flex-2 flex-col xl:space-y-6 md:space-y-3 space-y-1">
          <h1 className="font-bold xl:text-lg md:text-[10px] text-[5px] ">راه های ارتباطی</h1>
          <div className="flex flex-1 text-[#979595] md:text-[8px] xl:text-sm text-[5px] justify-end">
            <p className="">
              تلفن تماس: 02173227884  |  09224947358  |  09909928171 {" "}
            </p>
            <img className= "xl:size-6 md:size-4 size-2 ml-2" src="phone icon.svg" alt="" />
          </div>
          <div className="flex flex-1 text-right md:text-[8px] text-[5px] xl:text-sm text-[#979595] justify-end">
            <p>ایمیل: info@opera24.net</p>
            <img src="email icon.svg" alt="" className= "xl:size-6 md:size-4 size-2 ml-2" />
          </div>
          <div id="pictures" className="bg-red-300 flex-1 xl:pb-20 md:pb-10 sm:pb-5">
            2pictures
          </div>
        </div>
        <div id=" site-sections" className="sm:flex-1 flex-col md:px-12 sm:px-4 ">
          <div className="font-bold xl:text-lg md:text-[10px] sm:text-[7px] text-[6px] xl:pb-6 md:pb-4 pb-2 w-11 xl:w-auto">بخش های سایت</div>
          <div className="text-[#979595] space-y-1 xl:text-sm md:text-[8px] text-[5px]">
            <div className="">خانه</div>
            <div>طرح ها</div>
            <div>وبلاگ</div>
            <div>مشتریان</div>
            <div>درباره ما</div>
            <div>ارتباط با ما</div>
          </div>
        </div>

        <div
          id="about-opera"
          className="sm:flex-2"
        >
          <div className="flex flex-row justify-end items-start">
            <h1 className="font-bold xl:text-lg md:text-[10px] text-[6px] flex-1 ">درباره اپرا</h1>
            <img
              src="negative-space-headphones-on-blue-background 2.svg"
              alt=""
              className=" xl:mt-[-40px] xl:size-28 md:size-14 md:mt-[-20px] size-8 mt-[-7px]"
            />
          </div>
          <p className="md:text-[8px] xl:text-sm text-[5px] text-[#979595] leading-relaxed">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان ف.
          </p>
        </div>
      </div>
      <div id="bottom" className="flex-1 flex xl:text-xs items-center md:text-[7px] text-[5px] sm:pt-2">
        <p>
          . تمامی حقوق مادی و معنوی این وبسایت برای مجموعه
          <span className="text-[#552E87]"> اپرا</span> محفوظ است
        </p>
        <img src="/Group 2483.svg" alt="" className="xl:ml-2 xl:mt-2 xl:size-10 md:size-5 size-3 mt-1" />
      </div>
    </div>
  );
};

export default Footer;
