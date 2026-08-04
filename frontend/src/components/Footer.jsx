import React from 'react'
import logo from '../assets/frontend_assets/logo.png'
const Footer = () => {
  return (
   <div>
    <footer>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={logo} alt="Logo" className='mb-5 w-32'/>
                <p className='w-full md:w-2/3 text-gray-500'>© {new Date().getFullYear()} My e-commerce App</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 text-gray-700'>Company</p>
                <ul className='text-gray-500 flex flex-col gap-1'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 text-gray-700'>Get In Touch</p>
                <ul className='text-gray-500 flex flex-col gap-1'>
                    <li>+1-234-256-345</li>
                    <li>contact@forever.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr/>
            <p className='text-gray-500 text-sm text-center py-2'>copyright {new Date().getFullYear()}@forever.com-all rights reserved</p>
        </div>
    </footer>
   </div>
  )
}

export default Footer
