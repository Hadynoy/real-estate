import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import properties from '../data/properties';

const PropertyList = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
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
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentPage]);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 py-24">
      {/* Enhanced Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 bg-[#f8f9fa] p-6 rounded-xl shadow-sm border border-[#e5e5e5]"
      >
        <p className="text-sm text-[#0a0f1c]/70">
          Showing {startIndex + 1}–{Math.min(startIndex + itemsPerPage, properties.length)} of {properties.length} results
        </p>

        <div className="flex items-center gap-4">
          <label htmlFor="sort" className="text-sm text-[#0a0f1c]/70 font-serif">Sort by:</label>
          <select
            id="sort"
            className="border border-[#e5e5e5] rounded-lg px-4 py-2.5 text-sm font-serif bg-white focus:border-[#d4af37] transition-colors"
          >
            <option>Default</option>
            <option>Popularity</option>
            <option>Newest Listings</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          
          <button 
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 text-sm text-[#0a0f1c]/70"
          >
            <span>Filters</span>
            <svg className={`w-4 h-4 transition-transform ${filterOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Enhanced Sidebar */}
        <motion.aside 
          className={`lg:col-span-1 space-y-8 ${filterOpen ? 'block' : 'hidden lg:block'}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          {/* Property Type Filter */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e5e5e5]">
            <h4 className="text-lg font-serif font-medium text-[#0a0f1c] mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-[#d4af37] mr-2"></span>
              Property Type
            </h4>
            <div className="space-y-4 text-sm">
              {['Apartment', 'House', 'Duplex', 'Bungalow', 'Studio'].map((type, i) => (
                <label key={i} className="flex items-center group cursor-pointer">
                  <input type="checkbox" className="mr-3 w-4 h-4 text-[#d4af37] rounded focus:ring-[#d4af37]" />
                  <span className="text-[#0a0f1c]/70 group-hover:text-[#d4af37] transition-colors">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Benefits Filter */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e5e5e5]">
            <h4 className="text-lg font-serif font-medium text-[#0a0f1c] mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-[#d4af37] mr-2"></span>
              Key Features
            </h4>
            <div className="space-y-4 text-sm">
              {['Swimming Pool', 'Balcony', 'Parking', 'Smart Home'].map((feature, i) => (
                <label key={i} className="flex items-center group cursor-pointer">
                  <input type="checkbox" className="mr-3 w-4 h-4 text-[#d4af37] rounded focus:ring-[#d4af37]" />
                  <span className="text-[#0a0f1c]/70 group-hover:text-[#d4af37] transition-colors">{feature}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e5e5e5]">
            <h4 className="text-lg font-serif font-medium text-[#0a0f1c] mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-[#d4af37] mr-2"></span>
              Price Range
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-1/2 px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-sm focus:border-[#d4af37] transition-colors"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-1/2 px-4 py-2.5 border border-[#e5e5e5] rounded-lg text-sm focus:border-[#d4af37] transition-colors"
                />
              </div>
              <button className="w-full px-4 py-2.5 bg-[#d4af37] text-white rounded-lg text-sm font-serif hover:bg-[#e6c55d] transition-colors">
                Apply Filter
              </button>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e5e5e5]">
            <h4 className="text-lg font-serif font-medium text-[#0a0f1c] mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-[#d4af37] mr-2"></span>
              Listing
            </h4>
            <div className="space-y-4 text-sm">
              {['For Sale', 'For Rent', 'Short Let', 'Luxury', 'Newly Built'].map((category, i) => (
                <label key={i} className="flex items-center group cursor-pointer">
                  <input type="checkbox" className="mr-3 w-4 h-4 text-[#d4af37] rounded focus:ring-[#d4af37]" />
                  <span className="text-[#0a0f1c]/70 group-hover:text-[#d4af37] transition-colors">{category}</span>
                </label>
              ))}
            </div>
          </div>
        </motion.aside>

        {/* Enhanced Property Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {currentProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/600x400?text=No+Image";
                  }}
                />
                
                {/* Luxury Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <button className="w-full px-6 py-3 bg-[#d4af37] text-[#0a0f1c] rounded-full font-serif font-medium hover:bg-[#e6c55d] transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-serif font-bold text-[#0a0f1c]">{property.title}</h3>
                  <span className="text-xs font-medium text-[#d4af37] bg-[#d4af37]/10 px-2 py-1 rounded-full">
                    {property.type}
                  </span>
                </div>
                <p className="text-sm text-gray-500 flex items-center mb-4">
                  <span className="inline-block w-4 h-0.5 bg-[#d4af37] mr-2"></span>
                  {property.location}
                </p>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <span className="text-[#d4af37]">📐</span>
                    {property.sqft} sqft
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#d4af37]">🛏️</span>
                    {property.bed} Beds
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#d4af37]">🛁</span>
                    {property.bath} Baths
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-xl font-serif font-bold text-[#d4af37]">
                    {property.price}
                  </div>
                  <button className="text-[#d4af37] hover:text-[#e6c55d] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Pagination */}
      <div className="flex justify-center items-center mt-20 gap-6">
        <motion.button
          onClick={handlePrev}
          disabled={currentPage === 1}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 border-2 border-[#d4af37] rounded-full text-sm font-serif text-[#0a0f1c] hover:bg-[#d4af37]/10 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
        >
          Previous
        </motion.button>
        
        <span className="text-sm font-serif text-[#0a0f1c] flex items-center gap-2">
          <span className="w-2 h-0.5 bg-[#d4af37]"></span>
          Page {currentPage} of {totalPages}
          <span className="w-2 h-0.5 bg-[#d4af37]"></span>
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

export default PropertyList;