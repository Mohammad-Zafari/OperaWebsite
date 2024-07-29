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
    <div className={`max-w-xs mx-2 bg-[#552E87] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ${isActive ? 'scale-105' : 'scale-95'}`}>
      <div className="relative">
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={400}
          className="w-full h-60 object-cover"
          priority
        />
      </div>
      <div className="p-4 text-right flex flex-col items-end rounded-[20px_20px_12px_12px] bg-[#552E87]">
        <h2 className="text-xl font-bold mb-2 text-[#D6B023]">
          <Link href={link}>{title}</Link>
        </h2>
        <p className="text-white mb-4">{description}</p>
        <Link href={link} className="bg-[#D6B023] text-[#333333] px-4 py-2 mt-auto self-start hover:bg-[#C5A21E] rounded-lg">
          مشاهده کامل
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
