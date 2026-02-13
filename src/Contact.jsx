import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-6 font-Outfit">
                Get in <span className="text-yellow-500">Touch</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed font-Inter">
                Driven to learn, explore, and transform ideas into practical outcomes. 
                Focused on continuous growth and gaining hands-on experience through meaningful projects and collaborations.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                  <a href="mailto:hemalathaannamalai25@gmail.com"
                    className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center hover:border-yellow-500/50 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] transition-all duration-300 group">
                    <div className="bg-white/10 p-4 rounded-full mb-6 group-hover:bg-yellow-500/20 transition-colors">
                        <FaEnvelope className="text-white text-2xl group-hover:text-yellow-500 transition-colors" />
                    </div>
                    <h3 className="font-semibold mb-2 font-Outfit text-lg">Email</h3>
                    <p className="text-gray-400 text-sm break-all group-hover:text-yellow-100 transition-colors">hemalathaannamalai25@gmail.com</p>
                  </a>
                  <a href="tel:+919342703848"
                    className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center hover:border-yellow-500/50 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] transition-all duration-300 group">
                    <div className="bg-white/10 p-4 rounded-full mb-6 group-hover:bg-yellow-500/20 transition-colors">
                        <FaPhoneAlt className="text-white text-2xl group-hover:text-yellow-500 transition-colors" />
                    </div>
                    <h3 className="font-semibold mb-2 font-Outfit text-lg">Phone</h3>
                    <p className="text-gray-400 text-sm group-hover:text-yellow-100 transition-colors">+91 9342703848</p>
                  </a>

                 <div className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center hover:border-yellow-500/50 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] transition-all duration-300 group">
                   <div className="bg-white/10 p-4 rounded-full mb-6 group-hover:bg-yellow-500/20 transition-colors">
                      <FaMapMarkerAlt className="text-white text-2xl group-hover:text-yellow-500 transition-colors" />
                   </div>
                  <h3 className="font-semibold mb-2 font-Outfit text-lg">Location</h3>
                  <p className="text-gray-400 text-sm group-hover:text-yellow-100 transition-colors">
                  Chennai, India</p>
                </div>
          </div>
        </div>
    </section>
  )
}

export default Contact