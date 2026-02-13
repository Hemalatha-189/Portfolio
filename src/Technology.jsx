import React from 'react'

function Technology() {
  const techStack = [
    "Python",
    "HTML 5",
    "CSS 3",
    "JavaScript",
    "React",
    "MySQL"
  ];

  return (
    <section className="py-20 bg-black text-white">
      
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-12 font-Outfit">
          Technical <span className="text-yellow-500">SkillSet</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          
          {techStack.map((tech) => (
             <div
              key={tech}
              className="bg-white/5 border border-white/10 rounded-xl py-6 px-4 
                         hover:border-yellow-500/50 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(234,179,8,0.1)]
                         transition-all duration-300 cursor-default group"
            >
              <h3 className="text-lg font-semibold font-Inter text-gray-300 group-hover:text-yellow-400 transition-colors">{tech}</h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Technology;
