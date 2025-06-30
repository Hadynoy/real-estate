import React from 'react';
import { motion } from 'framer-motion';
import { Home, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0f1c] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl font-serif font-bold text-[#d4af37] tracking-wide"
            >
              UrbanNest
            </motion.h3>
            <p className="text-white/70 font-serif text-sm leading-relaxed">
              Where luxury meets lifestyle. <br />
              Crafting exceptional real estate experiences since 2010.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' }
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#d4af37] hover:text-[#d4af37] transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6 text-[#d4af37]">Quick Links</h4>
            <ul className="space-y-4">
              {['Properties', 'Agents', 'Blog', 'Contact', 'Privacy Policy'].map((link, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <a
                    href="#"
                    className="text-white/70 hover:text-[#d4af37] transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-0.5 bg-transparent group-hover:bg-[#d4af37] transition-colors"></span>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6 text-[#d4af37]">Contact Us</h4>
            <ul className="space-y-6">
              {[
                { Icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                { Icon: Mail, text: 'contact@urbanest.com', href: 'mailto:contact@urbanest.com' },
                { Icon: MapPin, text: 'Beverly Hills, CA 90210', href: '#' }
              ].map(({ Icon, text, href }, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#d4af37] transition-colors">
                    <Icon size={18} className="text-white group-hover:text-[#0a0f1c]" />
                  </div>
                  <a
                    href={href}
                    className="text-white/70 hover:text-[#d4af37] transition-colors"
                  >
                    {text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6 text-[#d4af37]">Stay Updated</h4>
            <p className="text-white/70 mb-4 font-serif text-sm">
              Get exclusive property updates and market insights
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full placeholder:text-white/40 focus:border-[#d4af37] focus:outline-none transition-colors"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-[#d4af37] flex items-center justify-center text-[#0a0f1c] hover:shadow-lg"
              >
                <Home size={20} />
              </motion.button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-white/50"
        >
          © 2025 UrbanNest. All rights reserved. | Luxury Real Estate Brokerage License #01234567
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;