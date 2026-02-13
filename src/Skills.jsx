import React from 'react'
 

function Skills() {
return (
    <section className="text-white py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-Outfit">
            What <span className="text-yellow-500">I Do</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-Inter leading-relaxed">
            Transforming ideas into reality with HTML5, CSS3, React.js, and MySQL. 
            I design seamless web experiences with optimized database management. 
            Driven by problem-solving, I develop scalable solutions and expand my expertise through practical projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] hover:-translate-y-2 transition-all duration-300 group">
            <div className="bg-white/10 w-fit p-4 rounded-xl mb-6 group-hover:bg-yellow-500/20 transition-colors">
                 <img 
                src="/assets/chatbot.jpg" 
                alt="HTML"
                className="w-12 h-12 object-contain"
                />
            </div>
           
            <h2 className="text-xl font-bold mb-3 font-Outfit text-white group-hover:text-yellow-400 transition-colors">Chatbot Development</h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Developed an Edurist bot, an AI-powered chatbot to enhance user interaction through automated responses, 
              processing natural language queries efficiently and delivering accurate, real-time conversational support.
            </p>
            <a 
              href="https://github.com/Hemalatha-189/MINDMATE_PROJECT"
              target="_blank"
              className="inline-block border border-white/20 hover:bg-yellow-500 hover:border-yellow-500 hover:text-black text-sm px-6 py-2 rounded-lg font-medium transition-all duration-300">
              View Project</a>
          </div>

         
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] hover:-translate-y-2 transition-all duration-300 group">
            <div className="bg-white/10 w-fit p-4 rounded-xl mb-6 group-hover:bg-yellow-500/20 transition-colors">
                <img 
                src="/assets/database.jpg" 
                alt="Database"
                className="w-12 h-12 object-contain bg-white rounded-lg"/>
            </div>
            <h2 className="text-xl font-bold mb-3 font-Outfit text-white group-hover:text-yellow-400 transition-colors">Database Management</h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Established and designed a CRUD-based web application integrated with Firebase Authentication for secure user access and efficient data handling. 
            </p>
            <a 
              href="https://github.com/Hemalatha-189/CRUD-TASK"
              target="_blank"
              className="inline-block border border-white/20 hover:bg-yellow-500 hover:border-yellow-500 hover:text-black text-sm px-6 py-2 rounded-lg font-medium transition-all duration-300">
              View Project
            </a>
          </div>

          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] hover:-translate-y-2 transition-all duration-300 group">
             <div className="bg-white/10 w-fit p-4 rounded-xl mb-6 group-hover:bg-yellow-500/20 transition-colors">
                <img 
                src="/assets/react.png" 
                alt="Problem Solving"
                className="w-12 h-12 object-contain"
                />
            </div>
            <h2 className="text-xl font-bold mb-3 font-Outfit text-white group-hover:text-yellow-400 transition-colors">Frontend Development</h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Built a responsive Instagram clone using React.js with dynamic routing, enhancing user interaction and 
              demonstrating mastery in modern frontend architectures.
            </p>
            <a 
              href="https://github.com/Hemalatha-189/Instagram-clone"
              target="_blank"
              className="inline-block border border-white/20 hover:bg-yellow-500 hover:border-yellow-500 hover:text-black text-sm px-6 py-2 rounded-lg font-medium transition-all duration-300">
              View Project</a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills