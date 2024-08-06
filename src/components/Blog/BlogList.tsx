import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import BlogCard from "./BlogCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface BlogPost {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

interface BlogListProps {
  blogPosts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ blogPosts }) => {
  return (

    <div className="relative p-6 flex flex-col items-center w-full">
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Navigation, Pagination, EffectCoverflow]}
        className="w-full"
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {blogPosts.map((post, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <BlogCard
              imageSrc={post.imageSrc}
              title={post.title}
              description={post.description}
              link={post.link}
              isActive={false}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default BlogList;