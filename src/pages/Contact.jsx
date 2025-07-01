import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, SendHorizonal, Crown } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-[#0a0f1c] text-white py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-[url('/src/assets/luxury-pattern.svg')] opacity-5 mix-blend-overlay -z-10" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#d4af37]/10 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#d4af37]/10 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="flex items-center gap-4">
              <span className="w-12 h-0.5 bg-[#d4af37]"></span>
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[#d4af37]"
              >
                <Crown size={20} />
              </motion.div>
              <span className="w-12 h-0.5 bg-[#d4af37]"></span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
              <span className="text-[#d4af37]">PRIVATE</span> INQUIRIES
            </h2>
            <p className="text-[#d4af37]/70 text-lg font-serif italic tracking-wide">
              "Where discretion meets excellence"
            </p>
          </div>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Cards */}
          <div className="lg:col-span-1 space-y-8">
            {[
              { 
                Icon: Phone, 
                title: "PHONE", 
                content: "+1 800 555 1234",
                detail: "Available 24/7 for urgent matters" 
              },
              { 
                Icon: Mail, 
                title: "EMAIL", 
                content: "luxury@cityscape.com",
                detail: "Response within 2 business hours" 
              },
              { 
                Icon: MapPin, 
                title: "OFFICE", 
                content: "123 Palm Avenue",
                detail: "Beverly Hills, CA 90210" 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-[#1a2a44]/20 backdrop-blur-lg p-6 rounded-[15px] border border-[#d4af37]/10 hover:border-[#d4af37]/40 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                    <item.Icon className="text-[#d4af37]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif uppercase tracking-widest text-[#d4af37]/70 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-lg font-medium text-white mb-1">
                      {item.content}
                    </p>
                    <p className="text-xs text-white/50">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-[#1a2a44]/20 backdrop-blur-lg rounded-[20px] p-8 border border-[#d4af37]/10">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="px-6 py-4 bg-[#0a0f1c]/30 border border-white/10 rounded-xl placeholder:text-white/30 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="px-6 py-4 bg-[#0a0f1c]/30 border border-white/10 rounded-xl placeholder:text-white/30 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                  />
                </div>
                
                <input
                  type="text"
                  placeholder="Property of Interest (e.g. 123 Palm Ave)"
                  className="w-full px-6 py-4 bg-[#0a0f1c]/30 border border-white/10 rounded-xl placeholder:text-white/30 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                />
                
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-6 py-4 bg-[#0a0f1c]/30 border border-white/10 rounded-xl placeholder:text-white/30 text-white focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                ></textarea>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="group relative overflow-hidden px-8 py-4 bg-transparent border-2 border-[#d4af37] text-[#d4af37] rounded-xl font-serif text-lg tracking-wide transition-all duration-500"
                  >
                    <span className="absolute inset-0 bg-[#d4af37] transform translate-y-full group-hover:translate-y-0 z-0"></span>
                    <span className="relative z-10 group-hover:text-white flex items-center gap-2">
                      <SendHorizonal size={18} className="group-hover:rotate-45 transition-transform" />
                      Send Inquiry
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;