import React from 'react'

const publications = [
    {title:"RespiroPure: Advancing Air Quality Management Through Intelligent and Automated Purification Systems",
      link: "https://ieeexplore.ieee.org/document/11019813/"},
    {title:"Sustainable Algorithms using Artificial Intelligence and Various Stages for Precision Agricultural Cultivation",
      link: "https://ieeexplore.ieee.org/document/10250631"},
    {title:"Bridging the Gap for Sustainable Crop Cultivation Using Data Science Applications",
      link: "https://ieeexplore.ieee.org/document/10396280"},
  ];


function Projects() {
  return (
    <section className="bg-black text-white min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
            
            {/* Projects Header */}
            <div className="text-center">
                 <h2 className="text-4xl font-bold font-Outfit mb-2">
                    Feature <span className="text-yellow-500">Projects</span>
                </h2>
                <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                 {/* Project 1 */}
                <div className="bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] transition-all duration-300 group">
                    <div className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors font-Outfit">RespiroPure</div>
                    <span className="text-yellow-500 text-sm font-semibold tracking-wide uppercase">IoT & Environmental Tech</span>
                    <p className="text-gray-500 text-xs mb-4">2022 - 2026</p>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        Revolutionized air quality management with an automated IoT-based purification system. 
                        Successfully reduced PM2.5 levels by <span className="text-white font-semibold">60%</span> and enabled real-time monitoring for over 200 active users, directly impacting community health and resilience.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/5">loT</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/5">Python</span>
                         <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/5">Sensors</span>
                    </div>
                 </div>

                 {/* Project 2 */}
                <div className="bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] transition-all duration-300 group">
                    <div className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors font-Outfit">MindMate</div>
                    <span className="text-yellow-500 text-sm font-semibold tracking-wide uppercase">AI Wellness Chatbot</span>
                    <p className="text-gray-500 text-xs mb-4">2024</p>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        Built a sentiment-aware chatbot utilizing <span className="text-white font-semibold">NVIDIA LLM API</span> and Python. 
                        Achieved a <span className="text-white font-semibold">40% increase</span> in student engagement by providing continuous emotional support and real-time wellness tracking.
                    </p>
                     <div className="mt-6 flex gap-3">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/5">AI/LLM</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/5">Streamlit</span>
                         <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/5">Python</span>
                    </div>
                </div>
            </div>
            
            {/* Publications */}
            <div className="pt-10">
               <h2 className="text-3xl font-bold text-center mb-10 font-Outfit">
                    Research <span className="text-yellow-500">Publications</span>
                </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publications.map((pub, index) => (
                  <div key={index} className="bg-black/40 p-6 rounded-xl border border-white/10 hover:border-yellow-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                    <div className="mb-4">
                         <div className="text-yellow-500 text-sm font-bold mb-2">IEEE Publication</div>
                         <h3 className="text-lg font-semibold text-gray-200 leading-snug hover:text-white transition-colors">{pub.title}</h3>
                    </div>
                    
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                      <button className="w-full py-2.5 rounded-lg border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 text-sm font-medium">
                          Read Paper
                      </button>
                    </a>
                  </div>
                ))}
            </div>
          </div>
            
        </div>
    </section>
  )
}

export default Projects