// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HighlightSection from '../components/HighlightSection';
import RealEstateSection from '../components/RealEstateSection';
import CityscapeCollection from '../components/CityscapeCollection';
import PropertyList from '../components/PropertyList';
import Team from '../components/Team';
import Banner from '../components/Banner';
import CustomerTestimonial from '../components/CustomerTestimonial';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      
      <HeroSection />
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
