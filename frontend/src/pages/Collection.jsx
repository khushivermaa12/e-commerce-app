import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useState } from 'react';
import dropdown_icon from "../assets/frontend_assets/dropdown_icon.png";
import Title from '../components/Title';
import { useEffect } from 'react';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products, search,showSearch} = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const[filterProducts, setFilterProducts] = useState([]);
  const[category, setCategory] = useState([]);
  const[subCategory, setSubCategory] = useState([]);
  const[sortType, setSortType] = useState('relevant');
  
  useEffect(()=>{
    setFilterProducts(products);
  },[])

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item=> item !== e.target.value))
    }
    else{
      setCategory(prev=> [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev=> [...prev,e.target.value])
    }
  }

  const applyFilter=() => {
    let productsCopy = products.slice();
    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length>0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if(subCategory.length>0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy)
  }

  const sortProducts = ()=>{
    let filterProductCopy = filterProducts.slice();
    switch(sortType){
      case 'low-high':
        setFilterProducts(filterProductCopy.sort((a,b)=>(a.price-b.price)));
        break;
      case 'high-low':
        setFilterProducts(filterProductCopy.sort((a,b)=>(b.price-a.price)));
        break;
      default: 
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch])

  useEffect(()=>{
    sortProducts();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/*filters*/}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={dropdown_icon} alt="dropdown" className={`h-3 cursor-pointer sm:hidden ${showFilters ? "rotate-90" : " "}`} onClick={()=>setShowFilters(!showFilters)}/>
        </p>
        {/*category filter*/}
        <div className={`border border-gray-300 pl-3 py-2 mt-6 ${showFilters ? "block" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col text-sm gap-2 font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Men"} onChange={toggleCategory}/>MEN
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Kids"} onChange={toggleCategory}/>KIDS
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Women"} onChange={toggleCategory}/>WOMEN
            </p>
          </div>
        </div>
        {/*subcategory filter*/}
        <div className={`border border-gray-300 pl-3 py-2 my-5 ${showFilters ? "block" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col text-sm gap-2 font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Topwear"} onChange={toggleSubCategory}/>TOPWEAR
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory}/>BOTTOMWEAR
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Winterwear"} onChange={toggleSubCategory}/>WINTERWEAR
            </p>
          </div>
        </div>
      </div>
      {/*products*/}
      <div className='flex-1'>
        <div className='flex justify-between sm:text-xl mb-4'>
          <Title text1={'ALL '} text2={'PRODUCTS'}/>
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevance</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item, index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Collection
