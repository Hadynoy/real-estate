import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading with progress
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Progress simulation
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + 3, 100));
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-[#0a0f1c] z-[9999] flex flex-col items-center justify-center text-white overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 1.2,
              ease: [0.4, 0, 0.2, 1]
            }
          }}
        >
          {/* Luxury Frame */}
          <div className="relative mb-12">
            <motion.div
              className="absolute inset-0 border-2 border-[#d4af37]/30 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1.1,
                opacity: 1,
                rotate: 360
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.img
              src="/vite.svg"
              alt="Logo"
              className="w-24 h-24 relative z-10"
              initial={{ 
                scale: 0,
                opacity: 0
              }}
              animate={{ 
                scale: 1,
                opacity: 1,
                rotate: 360
              }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 1.5
              }}
            />
          </div>

          {/* Animated Title */}
          <div className="text-center space-y-4">
            <motion.h1
              className="text-4xl md:text-5xl font-serif font-bold tracking-wide"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: 0.3,
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <span className="text-[#d4af37]">URBAN</span>NEST
            </motion.h1>
            
            <motion.p
              className="text-lg text-[#d4af37]/70 font-serif italic tracking-wide"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: 0.5,
                duration: 0.6
              }}
            >
              LUXURY ESTATES
            </motion.p>
          </div>

          {/* Progress Indicator */}
          <div className="mt-12 w-48">
            <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#d4af37]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-white/40">
              <span>Loading</span>
              <span>{progress}%</span>
            </div>
          </div>

          {/* Decorative Bottom Element */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;