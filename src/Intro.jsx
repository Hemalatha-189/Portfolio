import React from 'react'
import { FiBriefcase, FiAward } from 'react-icons/fi';
import profile from "/assets/Hema.jpeg"
function Intro() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 ">
        <div className="w-full max-w-5xl bg-[#0f0f0f] rounded-2xl shadow-2xl overflow-hidden">
        
        <section className="min-h-[80vh] flex items-center">
            <div className="w-full px-6 py-10 grid md:grid-cols-2 items-center gap-10">
                <div className="space-y-6 text-center md:text-left">
                    <h2 className="text-gray-400 text-2xl font-Outfit">Hello,</h2>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight font-Outfit">I'm{" "} <span className='text-yellow-500'>Hemalatha</span><br/></h1>
                    <span className='text-2xl font-semibold text-gray-300 font-Inter'>B.Tech Information Technology</span>
                    <p className="text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed mb-6 font-Inter"> 
                        Full-stack developer passionate about building impactful digital experiences and exploring networking technologies through IEEE.
                    </p>

                    <div className="bg-white/5 border border-yellow-500/30 rounded-xl p-4 mb-8 max-w-md mx-auto md:mx-0 flex items-center gap-4 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] transition-all duration-300 group backdrop-blur-sm">
                        <div className="bg-yellow-500/10 p-3 rounded-full group-hover:bg-yellow-500/20 transition-colors">
                            <FiAward className="text-2xl text-yellow-500" />
                        </div>
                        <div className="text-left">
                            <h3 className="font-bold text-white text-sm md:text-base font-Outfit">Richard E. Merwin Scholarship</h3>
                            <p className="text-xs md:text-sm text-gray-400 font-Inter">IEEE Computer Society • <span className="text-yellow-500 font-medium">$1000 USD</span></p>
                        </div>
                    </div>

                    <a href="/assets/Resume (2).pdf" download="Hemalatha_Resume.pdf" className="flex items-center gap-2 bg-yellow-500 text-black 
                    px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 shadow-[0_0_15px_rgba(234,179,8,0.4)] w-fit mx-auto md:mx-0">
                        <FiBriefcase />Hire Me</a>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img src={profile} alt="profile" className="w-[320px] md:w-[420px] object-contain"/>
                </div>
            </div> 
        </section>
    </div>
    </div>
  )
}

export default Intro