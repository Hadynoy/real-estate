import React, { useMemo, useCallback } from "react";
import { 
  Building2, Home, Warehouse, Hotel, Landmark, 
  ArrowRight, PhoneCall, Info 
} from "lucide-react";
import { motion } from "framer-motion";


const HighlightSection = React.memo(() => {
  const highlightData = [
    { icon: <Warehouse size={28} />, label: "Warehouse", count: 12 },
    { icon: <Home size={28} />, label: "Villa", count: 24 },
    { icon: <Building2 size={28} />, label: "Apartment", count: 32 },
    { icon: <Hotel size={28} />, label: "Homestay", count: 18 },
    { icon: <Landmark size={28} />, label: "Commercial", count: 15 },
  ];

  const handleCTAClick = useCallback(() => {
    console.log("CTA clicked");
  }, []);

  const HighlightCard = ({ item, index }) => {
    const cardVariants = useMemo(() => ({
      initial: { opacity: 0, y: 20, rotate: index % 2 === 0 ? -2 : 2 },
      animate: {
        opacity: 1, y: 0, rotate: 0,
        transition: { duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }
      },
      hover: {
        y: -5, scale: 1.02,
        transition: { duration: 0.2 }
      }
    }), [index]);

    return (
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="relative min-h-[220px] bg-white  rounded-2xl p-7 
                   flex flex-col items-center justify-center text-center 
                   border border-[#d4af37]/20 group
                   shadow-lg hover:shadow-2xl
                   transition-all duration-300"
      >
        <div className="w-14 h-14 flex items-center justify-center 
                        bg-[#d4af37]/10 mb-4 rounded-full
                        group-hover:bg-[#d4af37] 
                        transition-colors duration-300">
          <div className="text-[#0a0f1c] group-hover:text-white 
                          transition-colors duration-300">
            {item.icon}
          </div>
        </div>
        <div className="font-serif font-semibold text-xl md:text-2xl mb-2 text-[#0a0f1c]">
          {item.label}
        </div>
        <div className="font-serif text-sm text-[#d4af37]">
          {item.count} Available
        </div>
        <div className="absolute inset-0 bg-gradient-to-t 
                        from-[#d4af37]/5 to-transparent 
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-500 
                        rounded-2xl pointer-events-none" />
      </motion.div>
    );
  };

  return (
    <section className="relative bg-white text-[#0a0f1c] 
                       pt-32 pb-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-10 left-10 w-72 h-72 
                     bg-[#d4af37]/10 rounded-full filter blur-3xl"
        />
        <div className="absolute bottom-10 right-10 w-96 h-96 
                        bg-[#d4af37]/5 rounded-full filter blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-7xl mx-auto text-center z-10 mb-24"
      >
      {/* Gold Heading (6-Pattern Style) */}
<div className="flex flex-col items-center justify-center gap-4 mb-16">
  <div className="flex items-center gap-4">
    <span className="w-8 h-px bg-[#d4af37]"></span>
    <Home size={20} className="text-[#d4af37] animate-pulse" />
    <span className="text-sm tracking-[0.2em] uppercase text-[#d4af37] font-medium">
      Cityscape Collection
    </span>
    <Home size={20} className="text-[#d4af37] animate-pulse" />
    <span className="w-8 h-px bg-[#d4af37]"></span>
  </div>
  <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
</div>

        <h2 className="text-4xl md:text-5xl font-serif 
                        font-extrabold mb-16 ">
          What This House Offers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 
                        md:grid-cols-5 gap-6 md:gap-8">
          {highlightData.map((item, index) => (
            <HighlightCard 
              key={item.label} 
              item={item} 
              index={index} 
            />
          ))}
        </div>
      </motion.div>

      <div className="relative max-w-7xl mt-32 mx-auto z-10 
                      grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
  src="/assets/9.avif"
  alt="highlight"
  className="w-full rounded-2xl shadow-xl 
             hover:shadow-2xl transition-shadow duration-300"
/>

          <motion.div
            animate={{ 
              y: [-5, 5, -5],
              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-1/2 -translate-y-1/2 -left-8 md:-left-14 
                          bg-[#d4af37] px-6 py-3 rounded-r-full shadow text-sm 
                          font-bold text-[#0a0f1c] whitespace-nowrap"
          >
            <span className="text-2xl">697k+</span> LISTED PROPERTIES
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-[url('/src/assets/sketch.svg')] 
                          bg-no-repeat bg-right bg-contain opacity-10 
                          pointer-events-none" />

          <div className="flex items-center gap-2 text-[#d4af37] 
                          text-sm font-semibold mb-2">
            <Home size={16} /> WHO WE ARE
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-extrabold mb-4 
                          leading-tight tracking-tight">
            Where Finding A House<br />Feels Like Home
          </h2>

          <p className="text-[#333] mb-6 
                         leading-relaxed max-w-2xl font-serif">
            At our core, we believe finding a home should feel comforting,
            not complicated. That's why we offer trusted listings, expert support,
            and a seamless experience tailored to your needs and dreams.
          </p>

          <ul className="space-y-4 mb-8">
            {["Pontificate the client proactively", "Does the selected item have a waiting list?", "Instant 24-hour Emergency"].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <ArrowRight 
                  size={16} 
                  className="text-[#d4af37] mt-1 
                             group-hover:translate-x-1 
                             transition-transform duration-200" 
                />
                <span className="font-serif hover:text-[#d4af37] 
                                transition-colors">{text}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={handleCTAClick}
              className="group relative overflow-hidden px-6 py-3 
                         rounded-full text-white bg-[#1a2a44] 
                         hover:text-white transition-all duration-300"
            >
              <span className="absolute inset-0 bg-[#d4af37] 
                                translate-y-[-100%] group-hover:translate-y-0 
                                transition-transform duration-300 z-0"></span>
              <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-white">
                <Home size={16} /> ABOUT US MORE
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </span>
            </button>
            <button className="bg-[#d4af37] text-[#0a0f1c] 
                             px-6 py-3 rounded-full flex items-center 
                             gap-2 hover:bg-[#e6c55d] 
                             transition-all duration-300 
                             hover:shadow-lg active:scale-95 font-serif font-medium">
              <PhoneCall size={16} /> +208-6666-0112
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default HighlightSection;
