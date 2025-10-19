import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tagline from './components/Tagline'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

function App() {

  return (
    <div className='relative min-h-screen text-[#bcbae6] scroll-smooth'>
    <Navbar />
    <Hero />
    <Tagline />
    <Skills />
    <Certifications />
    </div>
  )
}

export default App
