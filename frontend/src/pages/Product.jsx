import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import star_icon from '../assets/frontend_assets/star_icon.png'
import star_dull_icon from '../assets/frontend_assets/star_dull_icon.png'
import RelatedProducts from '../components/RelatedProducts'
const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart} = useContext(ShopContext)
  const [productData, setProductData] = useState(null)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')
  useEffect(() => {
    if (!products || !productId) return

    const foundProduct = products.find((item) => item._id === productId)
    if (foundProduct) {
      setProductData(foundProduct)
      setImage(foundProduct.image?.[0] || '')
    } else {
      setProductData(null)
      setImage('')
    }
  }, [productId, products])

  if (!productData) {
    return <div className='opacity-0'>Loading product...</div>
  }

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image?.map((item, index) => (
              <img onClick={()=>setImage(item)} src={item} key={index} alt='' className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
            ))}
          </div>
          <div className='w-full sm:w-[81%]'>
            <img className='w-full h-auto' src={image} alt='' />
          </div>
        </div>
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={star_icon} alt="" className="w-4" />
            <img src={star_icon} alt="" className="w-4" />
            <img src={star_icon} alt="" className="w-4" />
            <img src={star_icon} alt="" className="w-4" />
            <img src={star_dull_icon} alt="" className="w-4" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : 'border-null' }`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-gray-700 text-white px-8 py-3 text-sm active:bg-gray-800 rounded-sm'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'></hr>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on Delivery is available on this product.</p>
            <p>Easy Exchange and Return Policy within 7 days.</p>
          </div>
        </div> 
      </div>
      <div className='mt-20'>
        <div className='flex'>
              <b className='border px-5 py-3 text-sm'>Description</b>
              <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600'>
          <p>This premium product combines modern design with high-quality materials to deliver lasting comfort and effortless style for everyday use.</p>
          <p>Designed for performance and durability, this item features thoughtful details, reliable functionality, and a sleek look that fits any lifestyle.</p>
        </div>
      </div>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  )
}

export default Product
