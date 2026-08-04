import React, { useContext } from 'react'
import logo from '../assets/admin_assets/logo.png'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import search_icon from '../assets/frontend_assets/search_icon.png'
import profile_icon from '../assets/frontend_assets/profile_icon.png'
import cart_icon from '../assets/frontend_assets/cart_icon.png'
import menu_icon from '../assets/frontend_assets/menu_icon.png'
import dropdown_icon from '../assets/frontend_assets/dropdown_icon.png'
import { ShopContext } from '../context/ShopContext'
const NavBar = () => {
    const [visible, setVisible] = useState(false)
    const {setShowSearch, getCartCount} = useContext(ShopContext) 
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to="/"><img src={logo} alt="Logo" className="w-36" /></Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to="/" className='flex flex-col items-center gap-1'>
            <p>Home</p>
            <hr className='hidden w-full h-1 bg-gray-700 rounded-full' />
        </NavLink>
        <NavLink to="/collection" className='flex flex-col items-center gap-1'>
            <p>Collection</p>
            <hr className='hidden w-full h-1 bg-gray-700 rounded-full' />
        </NavLink>
        <NavLink to="/about" className='flex flex-col items-center gap-1'>
            <p>About</p>
            <hr className='hidden w-full h-1 bg-gray-700 rounded-full' />
        </NavLink>
        <NavLink to="/contact" className='flex flex-col items-center gap-1'>
            <p>Contact</p>
            <hr className='hidden w-full h-1 bg-gray-700 rounded-full' />
        </NavLink>
      </ul>
    <div className='flex items-center gap-6'>
        <img onClick={()=>setShowSearch(true)} src={search_icon} alt="Search" className="w-5 cursor-pointer" />
        <div className='group relative'>
          <Link to={'/login'}><img src={profile_icon} alt="Profile" className="w-5 cursor-pointer" /></Link>
          <div className='absolute hidden group-hover:block dropdown-menu top-6 right-0 bg-white shadow-md rounded-md p-2'>
              <div className='w-32 flex flex-col gap-2'>
                  <p className='text-sm text-gray-700 cursor-pointer hover:text-black'>My Profile</p>
                  <p className='text-sm text-gray-700 cursor-pointer hover:text-black'>Orders</p>
                  <p className='text-sm text-gray-700 cursor-pointer hover:text-black'>Logout</p>
              </div>
          </div>
        </div>
        <Link to="/cart" className='relative flex items-center gap-1'>
            <img src={cart_icon} alt="Cart" className="w-5 cursor-pointer" />
            <p className='absolute -top-1 -right-1 bg-black text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center'>{getCartCount()}</p>
        </Link>
        <img onClick={()=>setVisible(true)}src={menu_icon} alt="Menu" className="w-5 cursor-pointer sm:hidden" />
    </div>
    {/* Mobile Menu */ }
    <div className={`absolute top-0 left-0 w-full h-full bg-white overflow-hidden transition-all ${visible ? 'block' : 'hidden'}`}>
        <div className='flex flex-col text-gray-700'>
            <div onClick={()=>setVisible(false)} className='flex items-center justify-begin p-4 cursor-pointer'>
                <img  src={dropdown_icon} alt="Close" className="h-4 rotate-180" />
            </div>
            <NavLink onClick={()=>setVisible(false)} className="pl-4 py-2 border" to="/">Home</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="pl-4 py-2 border" to="/collection">Collection</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="pl-4 py-2 border" to="/about">About</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="pl-4 py-2 border" to="/contact">Contact</NavLink>
        </div>
    </div>

    </div>
    )
}

export default NavBar
