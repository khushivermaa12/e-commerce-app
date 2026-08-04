import React from 'react'
import hero_img from '../assets/frontend_assets/hero_img.png'

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row border border-gray-300">
        {/* Left Section */ }
        <div className="w-full sm:w-1/2 flex justify-center py-10 sm:py-20">
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-small md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
        </div>
        {/* Right Section */ }
            <img src={hero_img} alt="Hero" className="w-full sm:w-1/2" />
        </div>
    </div>
  )
}

export default Hero
