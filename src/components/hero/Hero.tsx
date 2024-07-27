import React from 'react'
import { MoveLeft } from 'lucide-react'


const Hero = () => {
  return (
    <>
    <div className="    h-screen">
        <div className="h-full bg-[url('/hero-pattern.png')] bg-cover bg-left flex-col pt-48" style={{direction:"rtl"}}>
            <div className='bg-re-200 w-4/12 mr-40 p-8'>
                <h1 className='text-violet-800 font-semibold text-8xl'>اپرا</h1>
                <h3 className='text-4xl text-white leading-relaxed'>سرویس ها و محصولات مبتنی بر هوش مصنوعی در مراکز تماس و  ارتباط با مشتریان</h3>
                <div className='flex justify-end bg-late-200 py-12'>
                    <a href="#" className='flex items-end p-4 rounded-xl text-black text-lg shadow-sm shadow-white hover:shadow-none' style={{background:"linear-gradient(90deg,rgba(120, 104, 47, 1) ,rgba(222, 193, 87, 1)"}}>
                        مشاهده محصولات<MoveLeft className='mr-4'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Hero