import { useState } from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'




function App() {
  

  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Project/>
    </div>
  )
}

export default App
