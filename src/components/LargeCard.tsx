import React from 'react'
import Image from 'next/image'
import { LargeData } from '@/constants'

export default function LargeCard() {
    interface largeData {
        img: string;
        title: string;
        description: string;
        buttonText: string;
    }
  return (
    <section className='relative py-16 cursor-pointer'>
      {LargeData.map((item:largeData, index:number) => (
        <div key={index} className='relative h-96 min-w-[300px]'>
            <Image 
              src={item.img}
              alt={item.title}
              layout="fill"
              objectFit='cover'
              className='rounded-2xl object-cover'
            />
            <div className='absolute max-w-[250] md:max-w-[300px] top-2/4 md:top-0'>
                <h3 className='text-white text-2xl font-medium sm:text-4xl px-4 pt-6 md:px-10 md:pt-10'>
                    {item.title}
                </h3>
                <p className='text-sm sm:text-l px-4 md:px-10 text-white pt-2'>
                    {item.description}
                </p>
                <button className='text-sm text-white bg-red-500 px-4 py-2 rounded-lg mt-5 ml-4 md:ml-10 hover:scale-105 transition transform duration-200 hover:bg-black'> 
                    {item.buttonText}
                </button>
            </div>
        </div>
      ))}
    </section>
  )
}