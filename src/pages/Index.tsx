
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Formations from '../components/sections/Formations';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Formations />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
