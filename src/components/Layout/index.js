import React from 'react';
import Footer from 'components/Footer';
import Navbar from "components/Navbar";
import './index.css';

export const Layout = ({ children }) => {
  return (
    <div className="App">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};