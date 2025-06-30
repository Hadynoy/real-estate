import React, { useEffect, useState } from 'react';
import { Home } from 'lucide-react';
import { motion } from "framer-motion";


// Original members remain the same
const originalMembers = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    image: '/assets/team-01.jpg',
  },
  {
    name: 'Michael Smith',
    role: 'Senior Developer',
    image: '/assets/team-02.jpg',
  },
  {
    name: 'Emily Johnson',
    role: 'UI/UX Designer',
    image: '/assets/team-03.jpg',
  },
];

const Team = () => {
  const [members, setMembers] = useState(originalMembers);

  useEffect(() => {
    const interval = setInterval(() => {
      setMembers((prev) => [...prev.slice(1), prev[0]]);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 bg-[#0a0f1c] overflow-hidden text-white">
      {/* Enhanced background with subtle pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#d4af37]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-[#d4af37]/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23d4af37\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' 
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Sophisticated header with decorative elements */}
        <div className="flex flex-col items-center justify-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <span className="w-8 h-px bg-[#d4af37]"></span>
            <Home size={20} className="text-[#d4af37] animate-pulse" />
            <span className="text-sm tracking-[0.2em] uppercase text-[#d4af37] font-medium">
              Luxury. Trust. Team.
            </span>
            <Home size={20} className="text-[#d4af37] animate-pulse" />
            <span className="w-8 h-px bg-[#d4af37]"></span>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
        </div>

        <h2 className="text-5xl md:text-6xl font-serif text-white mb-6 tracking-tight">
          Our Real Estate Experts
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-20 text-lg">
          Meet the minds behind the mission — industry leaders with passion and precision.
        </p>

        {/* Rotating members with enhanced styling */}
        <div className="flex items-end justify-center gap-8 transition-all duration-1000 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]">
          {members.map((member, index) => {
            const isCenter = index === 1;

            return (
              <div
                key={index}
                className={`relative flex flex-col items-center transition-all duration-1000 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] transform-gpu ${
                  isCenter
                    ? 'z-20 scale-110'
                    : 'z-10 opacity-70 hover:opacity-90 transition-opacity duration-300'
                }`}
              >
                <div
                  className={`relative rounded-2xl overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isCenter 
                      ? 'w-[320px] h-[480px] shadow-[0_15px_35px_rgba(0,0,0,0.3)]' 
                      : 'w-[260px] h-[400px] shadow-[0_10px_25px_rgba(0,0,0,0.2)]'
                  }`}
                >
                  {/* Image with overlay and frame */}
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.03]"
                    />
                    
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    {/* Decorative frame */}
                    {isCenter && (
                      <div className="absolute inset-0 border-4 border-[#d4af37]/30 pointer-events-none"></div>
                    )}
                  </div>

                  {/* Name and role with hover effect */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent transition-all duration-300 ${
                      isCenter ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'
                    }`}
                  >
                    <h3 className={`text-xl font-serif font-bold mb-1 ${
                      isCenter ? 'text-white' : 'text-white group-hover:text-[#d4af37]'
                    }`}>
                      {member.name}
                    </h3>
                    <p className={`text-sm uppercase tracking-widest ${
                      isCenter ? 'text-[#d4af37]' : 'text-gray-300 group-hover:text-[#d4af37]'
                    }`}>
                      {member.role}
                    </p>
                  </div>
                  
                  {/* Decorative element for center card */}
                  {isCenter && (
                    <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#d4af37] text-black">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* View All Button with hover animation */}
        <div className="mt-16">
          <button className="group relative overflow-hidden px-8 py-4 bg-transparent border-2 border-[#d4af37] text-white rounded-none font-serif text-lg tracking-wide transition-all duration-500">
            <span className="absolute inset-0 bg-[#d4af37] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
            <span className="relative z-10 group-hover:text-black flex items-center gap-2">
              View Full Team
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;