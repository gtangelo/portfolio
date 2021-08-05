import React from 'react';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

export const PageLayout = ({ children }) => {
  return (
    <div className="App">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
