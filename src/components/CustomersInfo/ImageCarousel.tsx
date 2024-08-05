import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const ImageCarousel: FC = () => {
    return (
        <div id='customers-section' className="relative w-[1026px] h-[154px] mx-auto  bg-[#CECECE] p-0 px-6">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={5}
                autoplay={{
                    delay: 2000, // Adjust as needed for your use case
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                speed={2000} // Adjust the speed for smoother continuous scrolling
                freeMode={true}
            >
                <SwiperSlide className="flex justify-center items-center">
                    <img src="https://via.placeholder.com/177x146?text=Image+1" alt="Image 1" className="w-[177px] h-[146px]" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img src="https://via.placeholder.com/177x146?text=Image+2" alt="Image 2" className="w-[177px] h-[146px]" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img src="https://via.placeholder.com/177x146?text=Image+3" alt="Image 3" className="w-[177px] h-[146px]" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img src="https://via.placeholder.com/177x146?text=Image+4" alt="Image 4" className="w-[177px] h-[146px]" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img src="https://via.placeholder.com/177x146?text=Image+5" alt="Image 5" className="w-[177px] h-[146px]" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img src="https://via.placeholder.com/177x146?text=Image+6" alt="Image 6" className="w-[177px] h-[146px]" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ImageCarousel;
