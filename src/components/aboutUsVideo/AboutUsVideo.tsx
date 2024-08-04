import React from "react";

const AboutUsVideo = () => {
  return (
    <div className="bg-red-400 flex-col justify-center text-center py-16 md:py-28 lg:py-36 px-3 sm:px-8 md:px-40 lg:px-60 xl:px-80">
      <video controls className="w-full">
        <source src="" type="video/mp4" />
      </video>
      <h2 className="text-xl sm:text-3xl pt-16">اینجا یک متن یک خطی قرار می‌گیرد</h2>
    </div>
  );
};

export default AboutUsVideo;
