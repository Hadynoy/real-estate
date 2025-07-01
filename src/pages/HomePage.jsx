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

const HomePage = ({ loading }) => {
  return (
    <>
      <HeroSection loading={loading} />
      <HighlightSection />
      <RealEstateSection />
      <CityscapeCollection />
      <PropertyList />
      <Team />
      <Banner />
      <CustomerTestimonial />
      <Contact />
    </>
  );
};

export default HomePage;
