import { useState } from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer, toast } from 'react-toastify';
import Footer from './components/Footer'




function App() {
  

  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Project/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
