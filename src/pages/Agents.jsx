import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const agents = [
  {
    id: 1,
    name: "Grace Johnson",
    role: "Luxury Specialist",
    image: "/assets/agent1.avif",
  },
  {
    id: 2,
    name: "Daniel Chukwuma",
    role: "Realtor",
    image: "/assets/agent2.avif",
  },
  {
    id: 3,
    name: "Jade Benson",
    role: "Estate Consultant",
    image: "/assets/agent3.avif",
  },
  {
    id: 4,
    name: "Michael Obi",
    role: "Senior Broker",
    image: "/assets/agent4.avif",
  },
  {
    id: 5,
    name: "Chloe Raymond",
    role: "Sales Agent",
    image: "/assets/agent5.avif",
  },
  {
    id: 6,
    name: "Vivian Blake",
    role: "Real Estate Analyst",
    image: "/assets/agent6.avif",
  },
  {
    id: 7,
    name: "Chidinma Okoro",
    role: "Client Advisor",
    image: "/assets/agent7.avif",
  },
  {
    id: 8,
    name: "Samuel Ayeni",
    role: "Investment Consultant",
    image: "/assets/agent8.avif",
  },
];

const Agents = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-serif font-bold text-center mb-20 text-[#0a0f1c]"
      >
        Meet Our <span className="text-[#d4af37]">Elite Agents</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {agents.map((agent, index) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group h-[400px] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Agent Image */}
            <div className="absolute inset-0 bg-[#0a0f1c]/10 mix-blend-multiply"></div>
            <img
              src={agent.image}
              alt={agent.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/90 via-[#0a0f1c]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <div className="text-white space-y-3">
                <h3 className="text-xl font-serif font-bold">{agent.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-[#d4af37]"></span>
                  <p className="text-sm text-[#d4af37]">{agent.role}</p>
                </div>
                <div className="flex gap-4 mt-4">
                  {[
                    { Icon: Facebook, href: "#" },
                    { Icon: Twitter, href: "#" },
                    { Icon: Instagram, href: "#" },
                    { Icon: Linkedin, href: "#" }
                  ].map(({ Icon, href }, i) => (
                    <motion.a
                      key={i}
                      href={href}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="text-[#d4af37] hover:text-white transition-colors"
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-[#d4af37]/20 rounded-full flex items-center justify-center group-hover:bg-[#d4af37] transition-colors">
              <span className="text-xs text-[#0a0f1c] group-hover:text-white">★</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Agents;