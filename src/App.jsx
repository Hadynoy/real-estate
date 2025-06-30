import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AllProperties from './pages/AllProperties';
import PropertyDetails from './pages/PropertyDetails';
import PropertyList from './pages/PropertyList';
import Agents from './pages/Agents';
import AgentDetails from './pages/AgentDetails';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Register from './pages/Register';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />

        {/* Properties */}
        <Route path="/properties" element={<Layout><AllProperties /></Layout>} />
        <Route path="/property/:id" element={<Layout><PropertyDetails /></Layout>} />
        <Route path="/propertylist" element={<Layout><PropertyList /></Layout>} />

        {/* Agents */}
        <Route path="/agents" element={<Layout><Agents /></Layout>} />
        <Route path="/agents/:id" element={<Layout><AgentDetails /></Layout>} />

        {/* Info Pages */}
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />

        {/* Blog & Contact */}
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />

        {/* 404 Page */}
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </>
  );
};

export default App;
