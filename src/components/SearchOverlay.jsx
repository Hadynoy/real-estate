import React, { useEffect } from 'react';
import { X, Search, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchOverlay = ({ open, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-32 bg-black/40 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-[#0a0f1c] border border-[#d4af37]/30 rounded-[20px] shadow-2xl p-8 w-full max-w-2xl mx-4 text-white relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none">
              <div 
                className="absolute inset-0" 
                style={{ 
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23d4af37\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' 
                }}
              ></div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <motion.div 
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-[#d4af37]"
                >
                  <Sparkles size={20} />
                </motion.div>
                <h2 className="text-2xl font-serif font-bold text-[#d4af37]">
                  Luxury Property Search
                </h2>
              </div>
              <button 
                onClick={onClose} 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors group"
              >
                <X size={18} className="text-white group-hover:text-[#d4af37] transition-colors" />
              </button>
            </div>

            {/* Search Input */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search by address, neighborhood, or property ID..."
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl placeholder:text-white/40 text-lg text-white focus:outline-none focus:border-[#d4af37] transition-colors"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <button className="px-6 py-2.5 bg-[#d4af37] text-[#0a0f1c] font-serif rounded-lg hover:bg-[#e6c55d] transition-colors flex items-center gap-2">
                  <Search size={18} className="text-[#0a0f1c]" />
                  <span className="text-sm font-medium">Search</span>
                </button>
              </div>
            </div>

            {/* Popular Searches */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-sm text-white/60 mb-3">Popular Searches:</p>
              <div className="flex flex-wrap gap-2">
                {['Beverly Hills', 'Malibu Oceanfront', 'Luxury Penthouses', 'Private Island', 'Gated Communities'].map((term, i) => (
                  <button 
                    key={i} 
                    className="px-4 py-1.5 bg-white/10 rounded-full text-xs hover:bg-white/20 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Decorative Line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-1/2 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent rounded-full mt-6" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
