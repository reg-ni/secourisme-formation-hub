
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Formations from '../components/sections/Formations';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

/**
 * Main Index Page
 * 
 * This is the homepage of the SEMA PREV website that displays:
 * - Navbar: Navigation menu at the top
 * - Hero: Main banner section with headline and call-to-action
 * - Formations: Section showcasing the 5 training programs
 * - About: Section with company information and statistics
 * - Contact: Contact form and company information
 * - Footer: Site navigation and company details at the bottom
 */
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar (fixed at top) */}
      <Navbar />
      
      {/* Main Content Container */}
      <main className="flex-grow">
        {/* Hero Section - Main banner with headline */}
        <Hero />
        
        {/* Formations Section - Training programs */}
        <Formations />
        
        {/* About Section - Company information */}
        <About />
        
        {/* Contact Section - Form and contact info */}
        <Contact />
      </main>
      
      {/* Footer with navigation and company info */}
      <Footer />
    </div>
  );
};

export default Index;
