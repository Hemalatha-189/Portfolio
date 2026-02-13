function Internships() {
  const internships = [
    {
      company: "Barberaa",
      role: "Technical Intern",
      duration: "Dec 2025 – Present",
      responsibilities: [
        "Assisting in developing and maintaining technical solutions.",
        "Gaining hands-on experience in real-world development workflows.",
      ],
      logo : "/assets/Barberaa.jpg",
      link :"https://barberaa.com",
      

    },
    {
      company: "International Intelligent Educational Consultancy (IIEC)",
      role: "Web Developer Intern",
      duration: "June 2024 – July 2024",
      responsibilities: [
        "Designed and developed responsive web pages.",
        "Worked on frontend development using modern technologies.",
      ],
      logo : "/assets/iiec.jpg",
      link :"https://iiec.co.in/",
    },
    {
      company:
        "NITTTR - National Institute of Technical Teachers Training and Research",
      role: "AI Chatbot Intern",
      duration: "July 2024 – August 2024",
      responsibilities: [
        "Contributed to AI-based chatbot development.",
        "Assisted in training intelligent conversational systems.",
      ],
      logo : "/assets/nitttr.jpg",
      link :"https://nitttrc.ac.in",
    },
  ];
  return (
  <section className="bg-black text-white py-20 min-h-screen">
    <div className="max-w-6xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center mb-16 tracking-tight font-Outfit">
        Professional <span className="text-yellow-500">Experience</span>
      </h2>

      <div className="space-y-8">

        {internships.map((i, index) => (
          <div
            key={index}
            className="group bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1 font-Outfit group-hover:text-yellow-400 transition-colors">{i.company}</h3>
                <p className="text-yellow-500 font-medium text-sm tracking-wide uppercase mb-2">{i.role}</p>
                <div className="flex items-center gap-2 mb-6">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    <p className="text-gray-400 text-sm">{i.duration}</p>
                </div>

                <ul className="space-y-3">
                  {i.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                        <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-white/20"></span>
                        {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center gap-6 w-full md:w-auto">
                <div className="bg-white p-4 rounded-xl shadow-lg">
                    <img src={i.logo} alt={i.company} className="w-24 h-24 object-contain"/>
                </div>
                <a href={i.link} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                    <button className="w-full px-6 py-2.5 rounded-lg border border-white/20 hover:bg-yellow-500 hover:border-yellow-500 hover:text-black transition-all duration-300 text-sm font-medium">
                    Visit Website
                    </button>
                </a>
              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  </section>
  )
}
  

export default Internships
