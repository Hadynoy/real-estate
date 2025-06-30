// src/components/ScrollManager.jsx
import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const scrollPositions = new Map(); // Keeps scroll per route

const ScrollManager = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType(); // PUSH, POP, REPLACE
  const prevPathRef = useRef(null);

  useEffect(() => {
    // Save scroll before navigating away
    if (prevPathRef.current) {
      scrollPositions.set(prevPathRef.current, window.scrollY);
    }

    // Handle scroll restoration
    if (navigationType === 'POP') {
      const savedScroll = scrollPositions.get(pathname);
      window.scrollTo({
        top: savedScroll || 0,
        behavior: 'auto',
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    prevPathRef.current = pathname;
  }, [pathname, navigationType]);

  return null;
};

export default ScrollManager;
