import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const ImageCarousel: FC = () => {
  return (
    <div className="relative mx-auto px-6 bg-[#CECECE] w-[220px] xl:w-[1200px] md:w-[750px] sm:w-[400px]">
      
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={2000}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="https://via.placeholder.com/177x146?text=Image+1"
            alt="Image 1"
            className="w-[177px] h-[146px]"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="https://via.placeholder.com/177x146?text=Image+2"
            alt="Image 2"
            className="w-[177px] h-[146px]"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="https://via.placeholder.com/177x146?text=Image+3"
            alt="Image 3"
            className="w-[177px] h-[146px]"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="https://via.placeholder.com/177x146?text=Image+4"
            alt="Image 4"
            className="w-[177px] h-[146px]"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="https://via.placeholder.com/177x146?text=Image+5"
            alt="Image 5"
            className="w-[177px] h-[146px]"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="https://via.placeholder.com/177x146?text=Image+6"
            alt="Image 6"
            className="w-[177px] h-[146px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
