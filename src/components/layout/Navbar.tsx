
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-orange-500">SEMA</span>
              <span className="text-2xl font-bold text-gray-700">PREV</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">
                Accueil
              </Link>
              <a href="#formations" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">
                Formations
              </a>
              <a href="#about" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">
                À propos
              </a>
              <Link to="/ipsen" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">
                IPSEN
              </Link>
              <a href="#contact" className="bg-orange-500 text-white hover:bg-orange-600 px-4 py-2 rounded-md font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-orange-500 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-600 hover:text-orange-500 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <a
              href="#formations"
              className="block px-3 py-2 text-gray-600 hover:text-orange-500 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Formations
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-600 hover:text-orange-500 font-medium transition-colors"
              onClick={toggleMenu}
            >
              À propos
            </a>
            <Link
              to="/ipsen"
              className="block px-3 py-2 text-gray-600 hover:text-orange-500 font-medium transition-colors"
              onClick={toggleMenu}
            >
              IPSEN
            </Link>
            <a
              href="#contact"
              className="block mt-4 px-3 py-2 bg-orange-500 text-white hover:bg-orange-600 rounded-md font-medium transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
