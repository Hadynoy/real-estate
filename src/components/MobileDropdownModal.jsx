import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileDropdownModal = ({ isOpen, label, options, onSelect, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          className="fixed inset-0 z-[9999] bg-gradient-to-b from-[#0a0f1c]/98 via-[#0a0f1c] to-[#0a0f1c]/95 backdrop-blur-xl flex flex-col justify-center items-center px-4"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-serif font-bold text-white text-center mb-6 tracking-wide"
          >
            <span className="text-[#d4af37]">SELECT</span> {label.toUpperCase()}
          </motion.h2>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-0.5 bg-[#d4af37] mb-12"
          ></motion.div>

          {/* Options List */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="w-full max-w-sm flex flex-col gap-4 overflow-y-auto max-h-[60vh] px-1"
          >
            {options.map((item, idx) => (
              <motion.button
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                onClick={() => {
                  onSelect(item);
                  onClose();
                }}
                className="w-full px-6 py-4 text-lg text-left rounded-xl bg-white/5 border border-white/10 hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all font-serif tracking-wide flex items-center justify-between group"
              >
                <span className="text-white/90 group-hover:text-[#d4af37] transition-colors">
                  {item}
                </span>
                <span className="w-2 h-2 rounded-full bg-transparent group-hover:bg-[#d4af37] transition-colors"></span>
              </motion.button>
            ))}
          </motion.div>

          {/* Cancel Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={onClose}
            className="mt-10 text-white/70 font-serif text-sm tracking-wide hover:text-[#d4af37] transition-colors flex items-center gap-2"
          >
            <span className="w-4 h-0.5 bg-current"></span>
            Cancel
            <span className="w-4 h-0.5 bg-current"></span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileDropdownModal;
