import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatWidget from '../components/ChatWidget'; // 👈 add this
import AIAssistant from './AIAssistant';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <AIAssistant/> {/* 👈 Add this at the very end */}
    </>
  );
};

export default Layout;
