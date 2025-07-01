import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Search, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom'; // <-- use Link here
import clsx from 'clsx';
import SearchOverlay from './SearchOverlay';

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Properties',
    dropdown: [
      { name: 'Our Properties', href: '/properties' },
      { name: 'Property List', href: '/propertylist' },
    ],
  },
  { name: 'Agents', href: '/agents' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  {
    name: 'About Us', href: '/about'
  },


];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchButtonRef = useRef(null);

  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileOpen && !e.target.closest('header')) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileOpen]);

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b',
          scrolled || !isHome
            ? 'bg-[#0a0f1c] text-white shadow-sm border-[#1a2a44]'
            : 'bg-transparent text-white border-white/10'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-5 flex items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="text-2xl font-serif font-bold tracking-widest uppercase hover:opacity-90 transition"
          >
            <span className="text-[#d4af37]">Urban</span>Nest
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-x-10 text-sm font-medium tracking-wide">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 hover:text-[#d4af37] transition-colors duration-300">
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={clsx(
                        'transition-transform duration-300',
                        openDropdown === link.name && 'rotate-180'
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 bg-white text-[#0a0f1c] rounded-lg shadow-lg min-w-[200px] py-2 z-20 border border-gray-100"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}  // <-- use Link here
                            className="block px-5 py-2.5 hover:bg-gray-50 text-sm tracking-wide transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}  // <-- use Link here
                  className="hover:text-[#d4af37] transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button
              ref={searchButtonRef}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              onClick={() => setShowSearch(true)}
            >
              <Search size={20} />
            </button>
            <button className="group relative overflow-hidden flex items-center gap-2 border border-[#d4af37] text-[#d4af37] px-6 py-2.5 rounded-full font-medium tracking-wide transition-all duration-300">
              <span className="absolute inset-0 bg-[#d4af37] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                <Home size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                Add Property
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={clsx(
                'md:hidden px-4 pb-6 overflow-hidden',
                scrolled || !isHome ? 'bg-[#0a0f1c] text-white' : 'bg-transparent text-white'
              )}
            >
              <div className="flex flex-col space-y-4 pt-4 text-sm">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.name}>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.name ? null : link.name)
                        }
                        className="flex items-center justify-between w-full text-left hover:text-[#d4af37] transition-colors py-2"
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className={clsx(
                            'transition-transform',
                            openDropdown === link.name && 'rotate-180'
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-2 space-y-2"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}  // <-- use Link here
                                className="block hover:text-[#d4af37] py-2 transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}  // <-- use Link here
                      className="hover:text-[#d4af37] py-2 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                )}

                <div className="pt-6 flex items-center gap-4">
                  <button
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    onClick={() => {
                      setShowSearch(true);
                      setMobileOpen(false);
                    }}
                  >
                    <Search size={20} />
                  </button>
                  <button className="flex items-center gap-2 border border-[#d4af37] text-[#d4af37] px-4 py-2 rounded-full hover:bg-[#d4af37] hover:text-white transition-colors w-full justify-center">
                    <Home size={16} />
                    Add Property
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <SearchOverlay open={showSearch} onClose={() => setShowSearch(false)} />
    </>
  );
};

export default Navbar;
