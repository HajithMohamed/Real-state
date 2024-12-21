import React, { useState,useEffect } from 'react'
import {assets} from "../assets/assets"
import { use } from 'react'

// const mobileDiv=document.querySelector(".mobileDiv")
// const Div=document.querySelector(".container")
// const showMobileMenus = () => {
//   Div.classList.add("hidden");        // Hide the container
//   mobileDiv.classList.remove("hidden"); // Show the mobileDiv
//   mobileDiv.classList.add("flex");     // Make it a flex container
// };

// const hideMobileMenus = () => {
//   mobileDiv.classList.add("hidden");    // Hide the mobileDiv
// };

const Nav = () => {
  const [showMobileMenus, setShowMobileMenues]=useState(false)

  useEffect(()=>{
    if(showMobileMenus){
      document.body.style.overflow='hidden'
    }
    else{
       document.body.style.overflow='auto'
    }
    return ()=>{
      document.body.style.overflow='auto'
    }
  },[showMobileMenus])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-5 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-7 text-white '>
                <a href="#header" className='cursor-pointer hover:text-gray-500'>Home</a>
                <a href="#about" className='cursor-pointer hover:text-gray-500'>About</a>
                <a href="#projects" className='cursor-pointer hover:text-gray-500'>Projects</a>
                <a href="#testimonial" className='cursor-pointer hover:text-gray-500'>Testimonials</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>
            <img src={assets.menu_icon} className='md:hidden w-7' alt="" onClick={()=>{setShowMobileMenues(true)}}/>
        </div>
      <div className={`md:hidden ${showMobileMenus ? 'fixed w-full' : 'h-0 w-0'} fixed w-full right-o top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img src={assets.cross_icon} className='w-6 ' alt="" onClick={()=>{setShowMobileMenues(false)}} />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium cursor-pointer'>
          <a onClick={()=>{setShowMobileMenues(false)}} href="#header" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={()=>{setShowMobileMenues(false)}} href="#about" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={()=>{setShowMobileMenues(false)}} href="#Header" className='px-4 py-2 rounded-full inline-block'>Projects</a>
          <a onClick={()=>{setShowMobileMenues(false)}} href="#Header" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Nav
