import React from 'react'
import Image from 'next/image'

export default function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[1000px] 3xl:h-[800px]'>
      <Image src="https://links.papareact.com/0fm"
          layout="fill"
          objectFit="cover" alt={''}      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm md:text-lg'>Not Sure where to go? Perfect</p>
        <button className='mt-4 bg-white text-purple-500 font-bold px-8 py-4 rounded-full
        shadow-md hover:shadow-xl active:scale-90 transition duration-150
        '>I am flexible</button>
      </div>
    </div>
  )
}
