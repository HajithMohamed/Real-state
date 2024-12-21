import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'> 
            <img src={assets.logo_dark}/>
            <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aut. Voluptatem ipsam laboriosam labore veniam laborum minus at eum pariatur sunt quibusdam velit, nemo dignissimos illo, temporibus, perspiciatis tenetur amet!</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <a href="#header" className='hover:text-white'>Home</a>
            <a href="#about" className='hover:text-white'>About Us</a>
            <a href="#contact" className='hover:text-white'>Contact Us</a>
            <a href="#" className='hover:text-white'>Privacy Policy</a>
          </ul>
        </div>
        <div className='w-full md:w-1/3'>
        <h3 className='text-white text-lg font-bold mb-4'>Subscribe to Ourn News Letter</h3>
        <p className='text-gray-400'>The Latest News, articles, and resorces, sent to your imbox weekly</p>
        <div>
          <input type="email" placeholder='Enter Your Email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto mr-2'/>
          <button className='py-2 px-4 bg-blue-500 text-white rounded'>Subsribe</button>
        </div>

        </div>
      </div>
      <div className='mb-2 border-t border-gray-700 py-4 mt-10 text-center text-gray-100'>
        <p className='text-gray-400 text-center mt-8'>© 2024 Real State. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
