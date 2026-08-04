import React from 'react'
import Title from '../components/Title'
import contact_img from '../assets/frontend_assets/contact_img.png'
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT '} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={contact_img} alt=''/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54321 Fashion Avenue<br/>New York, NY 10001<br/>United States</p>
          <p className='text-gray-500'>Tel: (555) 123-4567<br/>Email: support@forever.com</p>
          <p className='font-semibold text-l text-gray-600'>Working Hours</p>
          <p className='text-gray-500'>Monday - Friday: 9:00 AM - 8:00 PM<br/>Saturday & Sunday: 10:00 AM - 6:00 PM</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
