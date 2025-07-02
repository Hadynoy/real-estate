import React from "react";
import { Home, Award, Shield, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const About = () => (
  <section className="bg-white text-[#0a0f1c] py-32 relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center gap-4 mb-16 text-center"
      >
        <div className="flex items-center gap-4">
          <span className="w-8 h-px bg-[#d4af37]" />
          <Home size={20} className="text-[#d4af37] animate-pulse" />
          <span className="text-sm tracking-[0.2em] uppercase text-[#d4af37] font-medium">
            Crafting Legacy
          </span>
          <Home size={20} className="text-[#d4af37] animate-pulse" />
          <span className="w-8 h-px bg-[#d4af37]" />
        </div>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-16  items-center ">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-serif font-medium -mt-22">
            Where <span className="text-[#d4af37]">Excellence</span> Meets{" "}
            <span className="text-[#d4af37]">Elegance</span>
          </h3>

          <p className="text-lg leading-relaxed text-[#333] font-serif">
            For nearly three decades, UrbanNest has defined luxury real estate,
            offering exclusive access to extraordinary properties worldwide. Our
            legacy is rooted in discretion, innovation, and architectural mastery.
          </p>

          <p className="text-lg leading-relaxed text-[#333] font-serif">
            Our elite advisors combine deep market expertise with a global network,
            ensuring every client experience is tailored, seamless, and exceptional.
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
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-center border border-[#d4af37]/20 rounded-xl py-6 shadow-sm"
              >
                <div className="text-3xl font-serif font-bold text-[#d4af37]">{stat.value}</div>
                <div className="text-xs text-[#666] uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative shadow-xl">
            <img
              src="/assets/about.avif"
              alt="Luxury Estate"
              className="w-full h-[600px] object-cover" // Square edges
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />

            {/* Badges */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-8 right-8 w-14 h-14 bg-[#d4af37]/10 flex items-center justify-center"
            >
              <Award className="text-[#d4af37]" size={24} />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute bottom-8 left-8 w-16 h-16 bg-[#d4af37]/10 flex items-center justify-center"
            >
              <Shield className="text-[#d4af37]" size={24} />
            </motion.div>
          </div>

          {/* Location */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full border border-[#d4af37]/20 shadow-sm flex items-center gap-3">
            <MapPin className="text-[#d4af37]" size={18} />
            <span className="text-sm font-serif">Beverly Hills, CA</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
