import React from 'react'
import exchange_icon from '../assets/frontend_assets/exchange_icon.png'
import quality_icon from '../assets/frontend_assets/quality_icon.png'
import support_img from '../assets/frontend_assets/support_img.png'
const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={exchange_icon} alt="exchange icon" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-500'>We offer a hassle-free exchange policy for our customers.</p>
      </div>
      <div>
        <img src={quality_icon} alt="quality icon" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>Quality Guarantee</p>
        <p className='text-gray-500'>We stand by the quality of our products with a satisfaction guarantee.</p>
      </div>
      <div>
        <img src={support_img} alt="contact icon" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>24/7 Customer Support</p>
        <p className='text-gray-500'>Our dedicated support team is available around the clock to assist you.</p>
      </div>
    </div>
  )
}

export default OurPolicy
