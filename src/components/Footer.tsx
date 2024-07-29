const Footer2 = () => {
  return (
    <div
      id="container"
      className="flex flex-col items-center bg-[#333] text-white rounded-[100px] mx-20 mb-8"
    >
      <div
        id="main"
        className="flex-12 flex flex-row text-right space-x-20 justify px-12 pt-14"
      >
        <div id="communication-ways " className="flex-2 flex-col space-y-6">
          <h1 className="font-bold text-lg ">راه های ارتباطی</h1>
          <div className="flex flex-1 text-[#979595] text-sm  justify-end">
            <p className="">
              تلفن تماس: 02173227884  |  09224947358  |  09909928171 {" "}
            </p>
            <img className="size-6" src="phone icon.svg" alt="" />
          </div>
          <div className="flex flex-1 text-right text-sm text-[#979595] justify-end">
            <p>ایمیل: info@opera24.net</p>
            <img src="email icon.svg" alt="" className="size-6 ml-2" />
          </div>
          <div id="pictures" className="bg-red-300 flex-1 pb-20">
            2pictures
          </div>
        </div>
        <div id="site-sections" className="flex-1 flex-col px-12 ">
          <div className="font-bold text-lg pb-6">بخش های سایت</div>
          <div className="text-[#979595] space-y-2 text-sm">
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
          className="flex-2"
        >
          <div className="flex flex-row justify-end items-start">
            <h1 className="font-bold text-lg flex-1 ">درباره اپرا</h1>
            <img
              src="negative-space-headphones-on-blue-background 2.svg"
              alt=""
              className=" mt-[-40px]"
            />
          </div>
          <p className="text-sm text-[#979595] leading-relaxed">
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
      <div id="bottom" className="flex-1 flex text-xs items-center">
        <p>
          . تمامی حقوق مادی و معنوی این وبسایت برای مجموعه
          <span className="text-[#552E87]"> اپرا</span> محفوظ است
        </p>
        <img src="/Group 2483.svg" alt="" className="ml-2 mt-2" />
      </div>
    </div>
  );
};

export default Footer2;
