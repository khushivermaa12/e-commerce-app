import React from 'react';

const NewsLetterBox = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className="text-center"> 
        <p className='text-2xl font-medium text-gray-700'>Subscribe now & get 20% off</p>
        <form onSubmit={handleSubmit} className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder="Enter your email" className='w-full sm:flex-1 outline-none' required/>
            <button type="submit" className='bg-gray-700 text-white py-2 px-2'>Subscribe</button>
        </form>
    </div>
  );
};

export default NewsLetterBox;

