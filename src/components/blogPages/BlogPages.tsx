"use client";

import React from "react";
import BlogPage from "../blogPages/BlogPage";
import Navbar from "../navbar/Navbar";
import { blogPosts } from "../../helper/data";

interface inf {
  id: number;
}

interface BlogPost {
  id: string;
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  date: string;
}


const BlogPages: React.FC<inf> = ({id}) => {
 
let j : object = {
    id: '2',
    imageSrc: "/DALL·E_2024_08_13_15_32_02_A_high_quality,_detailed_image_representing.png",
    title:"هوش مصنوعی چیست؟",   
    subtitle: `هوش مصنوعی: تعریف و طبقه‌بندی`,
    description: `هوش مصنوعی (Artificial Intelligence - AI) به معنای ایجاد سیستمی است که می‌تواند به طور مستقل فکر کند و یاد بگیرد. این فناوری به سه دسته اصلی تقسیم می‌شود که هر کدام ویژگی‌ها و کاربردهای خاص خود را دارند. در این مقاله، به تعریف و طبقه‌بندی هوش مصنوعی خواهیم پرداخت:

    1. **هوش مصنوعی محدود (Narrow AI)**: این نوع هوش مصنوعی به طور خاص برای انجام وظایف مشخص طراحی شده است و در محیط‌های کاربردی نظیر دستیارهای صوتی، موتورهای جستجو، و سیستم‌های توصیه‌گر به کار می‌رود. این نوع AI تنها قادر است وظایف خاصی را انجام دهد و توانایی‌های عمومی ندارد.
    
    2. **هوش مصنوعی عمومی (General AI)**: هدف این نوع هوش مصنوعی ایجاد سیستمی است که بتواند مشابه به یک انسان فکر کند و یاد بگیرد. این نوع از AI هنوز در مراحل اولیه تحقیق و توسعه است و بیشتر در زمینه‌های نظری و علمی مورد بررسی قرار می‌گیرد. هدف نهایی این نوع از AI، ایجاد سیستمی است که قادر به انجام هر نوع وظیفه‌ای باشد که انسان‌ها قادر به انجام آن هستند.
    
    3. **هوش مصنوعی فوق‌العاده (Superintelligent AI)**: این نوع هوش مصنوعی به سطحی از هوش می‌رسد که فراتر از توانایی‌های انسانی است. این مفهوم بیشتر در داستان‌های علمی تخیلی و نظریات فلسفی مطرح می‌شود، اما محققان در تلاش‌اند تا اصول و چارچوب‌هایی را برای توسعه چنین سیستمی پایه‌ریزی کنند. هوش مصنوعی فوق‌العاده قادر است تصمیمات پیچیده و پیشرفته‌ای بگیرد که فراتر از توانایی‌های انسان‌ها است.
    
    این تقسیم‌بندی به ما کمک می‌کند تا بهتر بفهمیم که هوش مصنوعی در چه جهتی حرکت می‌کند و چگونه می‌تواند در زندگی ما تأثیر بگذارد. با پیشرفت‌های مداوم در این حوزه، شاهد تغییرات عمده‌ای در صنعت، فناوری، و زندگی روزمره خواهیم بود.
    
    [Explore AI Definitions](https://example.com/ai-definitions)
    [General vs. Superintelligent AI](https://example.com/ai-classifications)
    `,
    link: '/posts/intelligent-call-routing',
    date: 'شهریور ۸, ۱۴۰۳'}

  return (
    <div>
      <Navbar />
      {blogPosts.map(
        (content : BlogPost, i:number) => i == id - 1 && <BlogPage blogPost={content}/>
      )}
    </div>
  );
};

export default BlogPages;
