import React from 'react'
import Title from '../components/Title'
import about_img from '../assets/frontend_assets/about_img.png'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'ABOUT '} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Forever, your ultimate destination for premium fashion and lifestyle products. Founded with a passion for quality and style, we believe that everyone deserves access to carefully curated, high-quality clothing and accessories that make them feel confident and beautiful every day.</p>
          <p>Our mission is to bring the latest trends and timeless classics to fashion enthusiasts worldwide. We work with trusted suppliers and brands to ensure that every product in our collection meets our strict standards for quality, durability, and design. Whether you're looking for casual everyday wear or something special for an important occasion, Forever has you covered.</p>
          <p>We're committed to providing an exceptional shopping experience, from browsing our extensive collection to enjoying fast and reliable delivery. Our dedicated customer support team is always here to help, ensuring your satisfaction with every purchase. Thank you for choosing Forever – where style meets substance.</p>
        </div>
      </div>
    </div>
  )
}

export default About
