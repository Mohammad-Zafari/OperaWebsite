import React from "react";

const AboutUsVideo = () => {
  return (
    <div className="flex-col justify-center text-center py-16 md:py-28 lg:py-36 px-3 sm:px-8 md:px-40 lg:px-60 xl:px-80">
      <div className="pb-16" dir="rtl">
        <h2 className="w-fit text-white text-xl sm:text-3xl border-b-2 border-gray-500 pb-2">درباره ما</h2>
      </div>
      <video controls className="w-full">
        <source src="" type="video/mp4" />
      </video>
      <h2 className="text-xl text-white sm:text-2xl pt-16">اینجا یک متن یک خطی قرار می‌گیرد</h2>
    </div>
  );
};

export default AboutUsVideo;
