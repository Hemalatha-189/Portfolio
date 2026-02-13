import React from 'react'
import Navbar from './Navbar'

function Education() {
  return (
    <section className="text-white w-full min-h-screen py-20 bg-black">
    <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 font-Outfit">
            <span className="text-yellow-500">Edu</span>cation
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
            {/* College */}
            <div className="bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:-translate-y-2 transition-all duration-300 group">
                <div className="bg-white p-2 w-fit rounded-full mb-4">
                  <img src="/assets/Sairam.logo.png" alt="college" className="w-12 h-12 object-contain"/>
                </div>
                <p className="text-yellow-500 font-semibold text-sm tracking-wide uppercase mb-2">Bachelor of Technology</p>
                <h3 className="text-xl font-bold text-white mb-2 font-Outfit group-hover:text-yellow-400 transition-colors">Information Technology</h3>
                <p className="text-gray-400 text-sm mb-1">Sri Sairam Engineering College</p>
                <div className="flex justify-between items-center mt-4 border-t border-white/10 pt-4">
                    <span className="text-gray-500 text-sm">2022 - 2026</span>
                    <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-xs font-medium">CGPA: 8.69</span>
                </div>
            </div>
        
            {/* HSC */}
            <div className="bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:-translate-y-2 transition-all duration-300 group">
              <div className="bg-white p-2 w-fit rounded-full mb-4">
                  <img src="/assets/Ayyan_logo.jpg" alt="school" className="w-12 h-12 object-contain"/>
              </div>
              <p className="text-yellow-500 font-semibold text-sm tracking-wide uppercase mb-2">Higher Secondary (HSC)</p>
                <h3 className="text-xl font-bold text-white mb-2 font-Outfit group-hover:text-yellow-400 transition-colors">Sri Ayyan Vidhashram</h3>
                <p className="text-gray-400 text-sm mb-1">Biology - Maths</p>
                <div className="flex justify-between items-center mt-4 border-t border-white/10 pt-4">
                    <span className="text-gray-500 text-sm">2021 - 2022</span>
                    <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-xs font-medium">91%</span>
                </div>
            </div>

            {/* SSLC */}
            <div className="bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:-translate-y-2 transition-all duration-300 group">
              <div className="bg-white p-2 w-fit rounded-full mb-4">
                  <img src="/assets/Ayyan_logo.jpg" alt="school" className="w-12 h-12 object-contain"/>
              </div>
                <p className="text-yellow-500 font-semibold text-sm tracking-wide uppercase mb-2">Secondary School (SSLC)</p>
                <h3 className="text-xl font-bold text-white mb-2 font-Outfit group-hover:text-yellow-400 transition-colors">Sri Ayyan Vidhashram</h3>
                <p className="text-gray-400 text-sm mb-1">Standard X</p>
                <div className="flex justify-between items-center mt-4 border-t border-white/10 pt-4">
                    <span className="text-gray-500 text-sm">2020 - 2021</span>
                    <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-xs font-medium">97%</span>
                </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Education