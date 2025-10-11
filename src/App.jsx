import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tagline from './components/Tagline'

function App() {

  return (
    <div className='min-h-screen text-[#bcbae6]'>
    <Navbar />
    <Hero />
    <Tagline />
    </div>
  )
}

export default App
