import React, { useState } from 'react'
import './index.css'
import {Link} from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="w-full sticky top-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10 relative">
    <div className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
        <h1 className='text-white text-2xl font-bold tracking-tight font-Outfit'>
          <span className="text-yellow-500">H</span>ema<span className="text-yellow-500">.</span>
        </h1>
      <div className="hidden md:flex gap-8 text-gray-300 font-medium font-Inter">
        {["Home" ,"Education","Projects","Internships"].map((i)=>{
          const path = i === "Home"? "/": `/${i}`
            return(
                <Link to={path} key={i} className="relative group transition duration-300 hover:text-yellow-400">
                  {i}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </Link> 
                
        )})}
      </div>
      <button 
        className="text-white text-2xl cursor-pointer md:hidden"
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>
    </div>

    {isOpen && (
      <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 py-6 flex flex-col items-center gap-6 animate-in slide-in-from-top-5 fade-in duration-300">
        {["Home", "Education", "Projects", "Internships"].map((i) => {
          const path = i === "Home" ? "/" : `/${i}`;
          return (
            <Link 
              to={path} 
              key={i} 
              className="text-xl text-gray-300 hover:text-yellow-400 font-medium font-Inter transition duration-300"
              onClick={() => setIsOpen(false)}>
              {i}
            </Link>
          );
        })}
      </div>
    )}
    </nav>
    
    </>
  )
}

export default Navbar