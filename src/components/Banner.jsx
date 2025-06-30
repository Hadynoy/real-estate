import React from "react";
import { BadgeCheck, Users, Home, Star } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: BadgeCheck, label: "Years of Experience", value: "30+" },
  { icon: Users, label: "Satisfied Clients", value: "150K+" },
  { icon: Home, label: "Luxury Houses", value: "50+" },
  { icon: Star, label: "Featured Projects", value: "20K+" },
];

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#e6d2a0] to-[#d4c8a0] overflow-hidden isolate rounded-[20px] py-10 px-4 md:px-12 shadow-lg max-w-5xl mx-auto -mt-18 z-10">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#e6d2a0]/30 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-[#d4c8a0]/30 rounded-full blur-[180px] opacity-15 animate-ping"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      {/* Floating Bubbles */}
      <motion.div 
        animate={{ x: [-10, 10, -10], y: [5, -5, 5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 left-8 w-16 h-16 bg-[#d4af37]/20 rounded-full blur-xl"
      />
      <motion.div 
        animate={{ x: [10, -10, 10], y: [-5, 5, -5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 right-8 w-20 h-20 bg-[#d4af37]/15 rounded-full blur-xl"
      />

      {/* Stat Cards */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center items-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col items-center justify-center space-y-1 group"
          >
            <div className="text-[#1a2a44] text-4xl font-black group-hover:scale-105 transition-transform duration-300 relative">
              <span className="absolute -top-4 -right-4 w-3 h-3 bg-[#d4af37] rounded-full"></span>
              {stat.value}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#d4af37]/30 rounded-full"></span>
            </div>
            <p className="text-sm text-[#1a2a44] font-semibold uppercase tracking-wide">
              {stat.label}
            </p>
            <div className="w-16 h-0.5 bg-[#d4af37]/30 mt-2 group-hover:w-20 transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
