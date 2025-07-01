import React from "react";
import { Home, Award, Shield, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const About = () => (
  <section className="bg-[#0a0f1c] text-white py-32 relative overflow-hidden">
    {/* Background Layers */}
    <div className="absolute inset-0 bg-[url('/src/assets/luxury-pattern.svg')] opacity-5 mix-blend-overlay -z-10" />
    <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#d4af37]/10 to-transparent -z-10" />
    <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#d4af37]/10 to-transparent -z-10" />
    <div className="absolute inset-0 pointer-events-none animate-pulse bg-[url('/src/assets/sparkle.gif')] bg-repeat opacity-10 mix-blend-screen -z-10" />

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="w-12 h-0.5 bg-[#d4af37]" />
          <Home
            className="text-[#d4af37] animate-pulse drop-shadow-[0_0_6px_#d4af37aa]"
            size={24}
          />
          <span className="w-12 h-0.5 bg-[#d4af37]" />
        </div>
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight relative">
          <span className="text-[#d4af37] shimmer-text">CRAFTING</span> LEGACIES
        </h2>
        <p className="text-lg text-[#d4af37]/70 font-serif mt-2 tracking-wide">Since 1998</p>
      </motion.div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="relative">
            <h3 className="text-3xl font-serif font-medium text-white mb-6">
              Where <span className="text-[#d4af37]">Excellence</span> Meets{" "}
              <span className="text-[#d4af37]">Elegance</span>
            </h3>
            <div className="absolute -left-4 top-0 w-1.5 h-32 bg-[#d4af37]/30" />
          </div>

          <p className="text-lg text-white/80 leading-relaxed">
            For nearly three decades, UrbanNest has been the pinnacle of luxury real estate, curating
            exclusive access to the world's most extraordinary properties. Our heritage is built on
            discretion, innovation, and an unwavering commitment to representing{" "}
            <span className="text-[#d4af37] font-semibold">architectural masterpieces</span> and{" "}
            <span className="text-[#d4af37] font-semibold">generational estates</span>.
          </p>

          <p className="text-lg text-white/80 leading-relaxed">
            Our team of elite advisors combines deep market expertise with a global network of
            influential connections, ensuring our clients receive not just exceptional service, but
            truly transformative real estate experiences.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            {[
              { value: "500+", label: "Properties Sold" },
              { value: "$2B+", label: "Total Value" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center bg-white/5 border border-[#d4af37]/10 rounded-xl py-6 backdrop-blur-md shadow-lg"
              >
                <div className="text-3xl font-serif font-bold text-[#d4af37]">{stat.value}</div>
                <div className="text-xs text-white/60 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-4 border-2 border-[#d4af37]/20 rounded-xl -z-10 shadow-[0_0_50px_#d4af37aa]" />
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <img
              src="/assets/about.avif"
              alt="Luxury Estate"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/80 via-transparent to-transparent" />

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-8 right-8 w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center shadow-[0_0_12px_#d4af37]"
            >
              <Award className="text-[#d4af37]" size={24} />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-8 left-8 w-20 h-20 bg-[#d4af37]/15 rounded-full flex items-center justify-center shadow-[0_0_10px_#d4af37]"
            >
              <Shield className="text-[#d4af37]" size={28} />
            </motion.div>
          </div>

          {/* Location Tag */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-[#0a0f1c] px-6 py-3 rounded-full border border-[#d4af37]/30 backdrop-blur-md shadow-md">
            <MapPin className="text-[#d4af37]" size={18} />
            <span className="text-sm font-serif text-white">Beverly Hills, CA</span>
          </div>
        </motion.div>
      </div>
    </div>

    {/* SHIMMER TEXT ANIMATION STYLE */}
    <style>{`
      .shimmer-text {
        position: relative;
        background: linear-gradient(90deg, #d4af37 10%, #fff 50%, #d4af37 90%);
        background-size: 200% auto;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shimmer 4s linear infinite;
      }

      @keyframes shimmer {
        to {
          background-position: -200% center;
        }
      }
    `}</style>
  </section>
);

export default About;
