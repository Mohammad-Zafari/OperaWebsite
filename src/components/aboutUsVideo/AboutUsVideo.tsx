import React from "react";

const AboutUsVideo = () => {
  return (
    <div className="flex-col justify-center text-center py-16 md:py-28 lg:py-36 px-3 sm:px-8 md:px-40 lg:px-60 xl:px-80 rounded-lg">
      <div className="pb-16" dir="rtl">
        <h2 className="w-fit text-white text-xl sm:text-3xl border-b-2 pb-2">درباره ما</h2>
      </div>
      <video controls className="w-full border-2 border-gray-300 rounded-lg">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2 className="text-xl text-white sm:text-2xl pt-16">اینجا یک متن یک خطی قرار می‌گیرد</h2>
    </div>
  );
};

export default AboutUsVideo;
