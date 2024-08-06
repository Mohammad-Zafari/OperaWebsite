import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface BlogCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  isActive: boolean;
}

const BlogCard: FC<BlogCardProps> = ({ imageSrc, title, description, link, isActive }) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden transition-transform duration-300 ${
        isActive ? 'scale-105 p-4 md:p-6' : 'scale-95 p-2 md:p-4'
      }`}
      style={{ width: '100%', height: 'auto' }}
    >
      <div className="relative w-full h-48 md:h-56 rounded-t-xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          className="object-cover transition-all duration-300 h-full"
          priority
        />
      </div>
      <div
        className={`flex flex-col justify-between rounded-b-xl transition-all duration-300 ${
          isActive ? 'bg-[#6D3A99] p-4 md:p-6' : 'bg-[#552E87] p-2 md:p-4'
        }`}
        dir="rtl"
        style={{ height: '100%', position: 'relative' }}
      >
        <div className="flex flex-col flex-grow">
          <h2
            className={`font-bold mb-2 transition-all duration-300 ${
              isActive ? 'text-xl md:text-2xl text-[#F0C040]' : 'text-lg md:text-xl text-[#D6B023]'
            }`}
          >
            <Link href={link}>{title}</Link>
          </h2>
          <p
            className={`transition-all duration-300 ${isActive ? 'text-base md:text-lg' : 'text-sm md:text-base'} text-white mb-10`}
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3, // Number of lines to show
              WebkitBoxOrient: 'vertical',
            }}
          >
            {description}
          </p>
        </div>
        <div className="absolute bottom-4 left-4">
          <Link
            href={link}
            className={`transition-all duration-300 px-4 py-2 rounded-xl text-center ${
              isActive
                ? 'bg-[#F0C040] text-[#333333] hover:bg-[#E0B030]'
                : 'bg-[#D6B023] text-[#333333] hover:bg-[#C5A21E]'
            }`}
          >
            مشاهده کامل
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
