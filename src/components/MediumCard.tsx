import React from 'react'
import { mediumData } from '@/constants'
import Image from 'next/image'

export default function MediumCard() {
    interface ExploreItem {
        img: string;
        title: string;
    
    }
  return (
    <>
      {mediumData.map((item: ExploreItem, index: number) => (
        <div
          key={index}
          className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
          {/* Card Image */}
          <div className='relative h-80 w-80 '>
            <Image
              className='rounded-xl'
              src={item.img}
              alt={item.title}
              layout='fill'
              objectFit='cover'
            />
          </div>
          {/* Card title */}
            <h2 className='text-2xl mt-3'>{item.title}</h2>
        </div>
            ))}
     </>
        )
      }

