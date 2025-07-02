import React, { useState, useRef, useEffect, useCallback } from "react";
import { Search, ChevronDown } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import properties from "../data/properties";
import locationCategories from "../data/locationOptions";

const HeroSection = ({ loading }) => {
  const [activeTab, setActiveTab] = useState("General");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const textRef = useRef();
  const isInView = useInView(textRef, { once: true });
  const navigate = useNavigate();

  const handleScroll = useCallback(() => {
    setCategoryOpen(false);
    setLocationOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleSearch = useCallback(() => {
    const filtered = properties.filter((property) => {
      const matchesCategory =
        selectedCategory !== "Select Category" &&
        property.category?.toLowerCase() === selectedCategory.toLowerCase();
  
      const matchesLocation =
        selectedLocation !== "Select Location" &&
        property.location?.toLowerCase().includes(selectedLocation.toLowerCase());
  
      return matchesCategory && matchesLocation;
    });
  
    setSearchResults(filtered);
  }, [selectedCategory, selectedLocation]);
  

  const categoryOptions = Object.keys(locationCategories);

const dropdowns = [
  {
    open: categoryOpen,
    setOpen: setCategoryOpen,
    selected: selectedCategory,
    setSelected: (val) => {
      setSelectedCategory(val);
      setSelectedLocation("Select Location"); // reset on category change
    },
    label: "Category",
    options: categoryOptions,
  },
  {
    open: locationOpen,
    setOpen: setLocationOpen,
    selected: selectedLocation,
    setSelected: setSelectedLocation,
    label: "Location",
    options:
      selectedCategory && locationCategories[selectedCategory]
        ? locationCategories[selectedCategory]
        : [],
  },
];

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center text-white pt-40 pb-20 font-sans overflow-visible"
    >
      {/* Image Fallback for small screens (pure, no brightness or overlays) */}
      {/* Static Background Image (full cover, no blur, no overlay) */}
      <img
        src="/assets/1.avif"
        alt="Hero Background"
        className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
        loading="eager"
      />



      <motion.div
        animate={{
          background: [
            "radial-gradient(circle, rgba(10,15,28,0.2) 0%, rgba(10,15,28,0.4) 100%)",
            "radial-gradient(circle, rgba(10,15,28,0.3) 0%, rgba(10,15,28,0.5) 100%)",
            "radial-gradient(circle, rgba(10,15,28,0.2) 0%, rgba(10,15,28,0.4) 100%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="fixed inset-0 z-[-1]"
      />


      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-4 text-[#d4af37] font-serif font-medium tracking-widest text-sm uppercase"
        >
          <span className="inline-block w-8 h-0.5 bg-[#d4af37]" />
          <span className="animate-pulse tracking-[0.2em]">SEARCH SMART. LIVE SMART</span>
          <span className="inline-block w-8 h-0.5 bg-[#d4af37]" />
        </motion.div>

        <motion.h1
          ref={textRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6"
        >
          <span className="inline-block">Find Your</span> <br />
          <span className="inline-block text-[#d4af37]">Dream Home</span> <br />
          <span className="inline-block">Today</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-white/80 font-serif max-w-2xl mb-12"
        >
          Indulge in a luxurious hotel stay where comfort meets style,
          offering world-class amenities, elegant design, and exceptional
          personalized service.
        </motion.p>
      </div>

      {/* Search Filter */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-20 mt-8 px-4"
      >
        <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-xl border border-[#d4af37]/30 rounded-xl p-6 shadow-lg overflow-visible">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8 text-sm font-serif flex-wrap">
            {["General", "Villa", "Apartment"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 relative ${activeTab === tab
                    ? "bg-[#d4af37] text-[#0a0f1c] shadow-md"
                    : "bg-transparent text-white hover:bg-[#d4af37]/20"
                  }`}
                type="button"
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#d4af37] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>

          {/* Input + Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-20 overflow-visible">
            {/* Keyword */}
            <div className="flex flex-col">
              <label className="mb-2 text-white/60 text-sm font-serif" htmlFor="keyword-input">
                Keyword
              </label>
              <input
                id="keyword-input"
                type="text"
                placeholder="Looking For?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-3 text-white/90 bg-transparent border-b border-white/20 focus:outline-none focus:border-[#d4af37] placeholder:text-white/50 transition-colors"
              />
            </div>

            {/* Dropdowns */}
            {dropdowns.map((dropdown, i) => (
  <div key={i} className="flex flex-col w-full relative z-10">
    <label
      className="mb-2 text-white/60 text-sm font-serif"
      htmlFor={`dropdown-${dropdown.label.toLowerCase()}`}
    >
      {dropdown.label}
    </label>
    <button
      id={`dropdown-${dropdown.label.toLowerCase()}`}
      type="button"
      onClick={() => {
        setCategoryOpen(false);
        setLocationOpen(false);
        dropdown.setOpen(!dropdown.open);
      }}
      className="w-full flex justify-between items-center px-4 py-3 rounded bg-transparent text-white border border-white/20 hover:border-[#d4af37] transition-colors"
      aria-haspopup="listbox"
      aria-expanded={dropdown.open}
      aria-controls={`${dropdown.label}-listbox`}
    >
      <span className="text-white/70">{dropdown.selected}</span>
      <ChevronDown
        size={16}
        className={dropdown.open ? "rotate-180 text-[#d4af37]" : "text-white/70"}
      />
    </button>

    <AnimatePresence>
      {dropdown.open && (
        <motion.div
          id={`${dropdown.label}-listbox`}
          role="listbox"
          initial={{ opacity: 0, scaleY: 0.95 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 z-50 w-full bg-white text-[#0a0f1c] rounded shadow-lg border border-gray-200 origin-top max-h-60 overflow-y-auto"
        >
          {dropdown.options.map((item) => (
            <button
              key={item}
              role="option"
              type="button"
              onClick={() => {
                dropdown.setSelected(item);
                dropdown.setOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
))}

{/* Search Button */}
<div className="flex items-end">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={handleSearch}
    className="group w-full flex items-center justify-center gap-3 px-6 py-3 text-[#0a0f1c] font-serif font-medium rounded-full overflow-hidden relative bg-[#d4af37]"
    type="button"
  >
    <span className="absolute inset-0 bg-[#0a0f1c] transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 z-0"></span>
    <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
      <Search size={18} className="group-hover:rotate-12 transition-transform" />
      SEARCH
    </span>
  </motion.button>
</div>

          </div>

          {/* Search Results */}
          <AnimatePresence>
            {searchResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-6 bg-white text-[#0a0f1c] rounded-lg shadow-lg p-4 max-h-64 overflow-y-auto"
              >
                {searchResults.map((property) => (
                  <button
                    key={property.id}
                    onClick={() => navigate(`/property/${property.id}`)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                    type="button"
                  >
                    {property.title} - {property.location}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
