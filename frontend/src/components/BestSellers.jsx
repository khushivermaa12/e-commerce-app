import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react'
import { useEffect } from 'react'
import Title from '../components/Title'
import ProductItem from './ProductItem'
const BestSellers = () => {
  const {products} = useContext(ShopContext)
  const [bestSeller,setBestSeller]=useState([]);
  useEffect(()=>{
    const bestProduct=products.filter((item)=>(item.bestseller))
    setBestSeller(bestProduct);
    },[])
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST '} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Explore our top-selling products that customers love
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-2'>
        {bestSeller.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  )
}

export default BestSellers
