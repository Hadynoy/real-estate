// src/pages/HomePage.jsx
import React from 'react';

import HeroSection from '../components/HeroSection';
import HighlightSection from '../components/HighlightSection';
import RealEstateSection from '../components/RealEstateSection';
import CityscapeCollection from '../components/CityscapeCollection';
import PropertyList from '../components/PropertyList';
import Team from '../components/Team';
import Banner from '../components/Banner';
import CustomerTestimonial from '../components/CustomerTestimonial';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      {/* Hero Section with video/image background */}
      <HeroSection />

      {/* All other sections with their own solid background */}
      <div className="bg-white text-white relative z-10">
        <HighlightSection />
        <RealEstateSection />
        <CityscapeCollection />
        <PropertyList />
        <Team />
        <Banner />
        <CustomerTestimonial />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
