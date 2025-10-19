import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tagline from './components/Tagline'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import DarkMode from './components/DarkMode'

function App() {

  return (
    <div className='relative min-h-screen text-[#0b0922] dark:text-[#bcbae6] scroll-smooth'>
    <Navbar />
    <Hero />
    <Tagline />
    <Skills />
    <Certifications />
    <DarkMode />
    </div>
  )
}

export default App
