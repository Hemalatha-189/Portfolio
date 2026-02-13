import React from 'react'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 py-5 text-2xl">
                    <a href="https://www.instagram.com/hema_a_5" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition duration-300 transform hover:scale-110">
                      <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/hemalatha-annamalai-01a139260" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition duration-300 transform hover:scale-110">
                      <FaLinkedin />
                    </a>
                    <a href="https://wa.me/9342703848" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition duration-300 transform hover:scale-110">
                      <MdMessage />
                    </a>
          
                  </div>
            <p className="text-sm mt-4 text-gray-500">© 2024 Hemalatha Annamalai. All rights reserved.</p>
            <p className="text-xs mt-2 text-gray-600 font-medium tracking-wide">
               Tech Enthusiast | Web Developer | IEEE Volunteer | Social Explorer
           </p>
        </div>
            
    </footer>
  )
}

export default Footer