import React from 'react'
import Nav from '../components/Nav'

function Header() {
  return (
    <div className='min-h-screen mb-5 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage:"url('/header_img.png')"}} id='header'>
      <Nav/>
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block mx-w-3xl font-semibold'>Explore homes that fit Your dreams</h2>
        <div className='space-x-6 mt-16'>
            <a href="#projects" className='border border-white px-8 py-3 rounded'>Projects</a>
            <a href="#contact" className='bg-blue-500 px-8 py-3 rounded'> Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default Header
