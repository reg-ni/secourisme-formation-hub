
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Formations from '../components/sections/Formations';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import { Button } from '@/components/ui/button';

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
  // Fonction pour télécharger le fichier HTML
  const downloadHTML = () => {
    const link = document.createElement('a');
    link.href = './index.html'; // Point vers le fichier statique dans le dossier public
    link.download = 'semaprev-site.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Fonction pour ouvrir le fichier HTML dans un nouvel onglet
  const openHTML = () => {
    window.open('./index.html', '_blank');
  };

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

        {/* Section pour accéder à la version HTML statique */}
        <div className="py-10 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Version HTML statique</h2>
            <p className="text-gray-600 mb-6">
              Accédez à la version HTML statique du site que vous pouvez ouvrir directement dans votre navigateur sans installation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={openHTML} className="bg-orange-500 hover:bg-orange-600">
                Ouvrir la version HTML
              </Button>
              <Button onClick={downloadHTML} variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-100">
                Télécharger la version HTML
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer with navigation and company info */}
      <Footer />
    </div>
  );
};

export default Index;
