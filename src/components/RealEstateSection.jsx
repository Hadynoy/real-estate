import React from "react";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RealEstateSection = () => {
  return (
    <section className="relative w-full overflow-hidden text-white bg-[#0a0f1c] pl-6 md:pl-12 lg:pl-20">
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-center py-12 pr-6 z-10 relative"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#d4af37]" />
            <Home size={18} className="text-[#d4af37] animate-pulse" />
            <span className="text-sm tracking-[0.2em] uppercase text-[#d4af37] font-serif font-medium">
              Real Estate
            </span>
            <span className="w-8 h-px bg-[#d4af37]" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6"
          >
            Your Luxury. <br className="hidden md:block" /> Your Lifestyle.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/80 max-w-md mb-8 font-serif"
          >
            At our core, we believe finding a home should feel comforting, not complicated.
            That's why we offer trusted listings, expert support, and a seamless experience tailored to your needs.
          </motion.p>

          <Link to="/properties">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white text-base font-serif font-medium rounded-full overflow-hidden transition w-fit border-2 border-[#d4af37]"
            >
              <span className="absolute inset-0 bg-[#d4af37] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-[#0a0f1c]">
                View Properties
                <Home size={18} className="group-hover:rotate-12 transition-transform" />
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Right: Responsive Image with Slant on md+ */}
        <div className="w-full md:w-[50vw] h-[300px] md:h-[500px] relative">
          {/* Normal image on small screens */}
          <div
            className="w-full h-full bg-cover bg-center md:hidden"
            style={{
              backgroundImage: "url('/assets/11.avif')",
            }}
          />

          {/* Slanted image on medium and larger screens */}
          <div
            className="hidden md:block absolute inset-0 z-10"
            style={{
              clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
              backgroundImage: "url('/assets/11.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default RealEstateSection;
