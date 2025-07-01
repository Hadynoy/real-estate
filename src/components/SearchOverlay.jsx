import React, { useEffect, useState } from 'react';
import { X, Search, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import properties from '../data/properties'; // <-- Use default import if exported as default

const SearchOverlay = ({ open, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredResults([]);
      return;
    }

    const results = properties.filter((property) => {
      const term = searchTerm.toLowerCase();
      return (
        property.title.toLowerCase().includes(term) ||
        property.location.toLowerCase().includes(term) ||
        property.description.toLowerCase().includes(term)
      );
    });

    setFilteredResults(results);
  }, [searchTerm]);

  const handleResultClick = (id) => {
    onClose(); // close search overlay
    navigate(`/property/${id}`); // navigate to property details
  };

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
                placeholder="Search by address, neighborhood, or property title..."
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl placeholder:text-white/40 text-lg text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <button className="px-6 py-2.5 bg-[#d4af37] text-[#0a0f1c] font-serif rounded-lg hover:bg-[#e6c55d] transition-colors flex items-center gap-2">
                  <Search size={18} className="text-[#0a0f1c]" />
                  <span className="text-sm font-medium">Search</span>
                </button>
              </div>
            </div>

            {/* Results */}
            {filteredResults.length > 0 && (
              <div className="mt-6 space-y-4 max-h-60 overflow-y-auto">
                {filteredResults.map((property) => (
                  <div
                    key={property.id}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition"
                    onClick={() => handleResultClick(property.id)}
                  >
                    <h3 className="text-lg font-semibold">{property.title}</h3>
                    <p className="text-sm text-white/70">{property.location}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
