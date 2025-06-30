import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const scrollPositions = new Map();

const ScrollToTop = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const prevLocation = useRef(location);
  const currentScrollY = useRef(0);

  // Disable browser's automatic scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Track current scroll position
  useEffect(() => {
    const handleScroll = () => {
      currentScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Save scroll position on PUSH navigation
  useEffect(() => {
    if (navigationType === "PUSH") {
      scrollPositions.set(prevLocation.current.pathname, currentScrollY.current);
    }
    prevLocation.current = location;
  }, [location, navigationType]);

  // Handle scroll restoration and refresh
  useEffect(() => {
    if (navigationType === "POP") {
      const y = scrollPositions.get(location.pathname);
      if (typeof y === "number") {
        window.scrollTo({ top: y, behavior: "auto" });
      } else {
        // Force scroll top on refresh or new visit
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location, navigationType]);

  return null;
};

export default ScrollToTop;
