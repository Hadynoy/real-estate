// src/components/PaginatedProperties.jsx
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import properties from '../data/properties';
import { Home } from "lucide-react";

const PaginatedProperties = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  const totalPages = Math.ceil(properties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProperties = useMemo(
    () => properties.slice(startIndex, startIndex + itemsPerPage),
    [currentPage]
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage]);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center gap-4 mb-12"
      >
        <div className="flex items-center gap-4">
          <span className="w-8 h-px bg-[#d4af37]"></span>
          <Home size={20} className="text-[#d4af37] animate-pulse" />
          <span className="text-base md:text-lg tracking-[0.25em] uppercase text-[#d4af37] font-bold font-serif">
            Available Properties
          </span>
          <Home size={20} className="text-[#d4af37] animate-pulse" />
          <span className="w-8 h-px bg-[#d4af37]"></span>
        </div>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {currentProperties.map((property) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-[320px] overflow-hidden">
  {/* On small screens, make the image a link */}
  <Link to={`/property/${property.id}`} className="block sm:hidden h-full">
    <img
      src={property.image}
      alt={property.title}
      className="w-full h-full object-cover"
    />
  </Link>

  {/* On medium screens and up, hover effect with button */}
  <div className="hidden sm:block h-full group">
    <img
      src={property.image}
      alt={property.title}
      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <Link to={`/property/${property.id}`}>
          <button className="w-full px-6 py-3 bg-[#d4af37] text-[#0a0f1c] rounded-full font-serif font-medium hover:bg-[#e6c55d] transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>


              <div className="p-6 bg-white">
                <h3 className="text-xl font-serif font-bold text-[#0a0f1c] mb-2">
                  {property.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 flex items-center">
                  <span className="inline-block w-4 h-0.5 bg-[#d4af37] mr-2"></span>
                  {property.location}
                </p>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>{property.sqft} sqft</span>
                  <span>{property.bed} Beds</span>
                  <span>{property.bath} Baths</span>
                </div>
                <div className="text-2xl font-serif font-bold text-[#d4af37]">
                  {property.price}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center mt-16 gap-6">
        <motion.button
          onClick={handlePrev}
          disabled={currentPage === 1}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 border-2 border-[#d4af37] rounded-full text-sm font-serif text-[#0a0f1c] hover:bg-[#d4af37]/10 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
        >
          Previous
        </motion.button>

        <span className="text-sm font-serif text-[#0a0f1c]">
          Page {currentPage} of {totalPages}
        </span>

        <motion.button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 border-2 border-[#d4af37] rounded-full text-sm font-serif text-[#0a0f1c] hover:bg-[#d4af37]/10 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
        >
          Next
        </motion.button>
      </div>
    </section>
  );
};

export default PaginatedProperties;
