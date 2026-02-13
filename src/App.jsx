import React from 'react'
import Navbar from './Navbar'
import './index.css'
import Intro from './Intro'
import Skills from './Skills'
import Education from './Education'
import Projects from './Projects'
import Internships from './Internships'
import Footer from './Footer'
import Contact from './Contact'
import Technology from './Technology'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Navbar />
      
      
    <Routes>
      <Route path="/" element={
        <>
        
        <Intro/>
        <Technology/>
        <Skills/>
        
        <Contact/>
        <Footer/>
         
        </>

      }/>
      
      <Route path="/Education" element={<Education />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path = "/Internships" element={<Internships />} />
      
    </Routes>
    
      
    
    </div>
    
  )
}

export default App;