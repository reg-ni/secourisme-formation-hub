
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
              <div className="relative group">
                <span className="text-gray-600 hover:text-orange-500 font-medium transition-colors cursor-pointer">
                  Nos formations
                </span>
                <div className="absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                  <div className="py-1 " role="menu" aria-orientation="vertical">
                    <Link to="/formation-sst" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      SST
                    </Link>
                    <Link to="/formation-mac-sst" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      MAC SST
                    </Link>
                    <Link to="/formation-gestes-postures" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Gestes et Postures
                    </Link>
                  </div>
                </div>
              </div>
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
            <div className="py-2 px-3">
              <p className="text-gray-600 font-medium mb-2">Nos formations</p>
              <div className="pl-3 space-y-1">
                <Link
                  to="/formation-sst"
                  className="block px-3 py-1 text-sm text-gray-600 hover:text-orange-500 font-medium transition-colors"
                  onClick={toggleMenu}
                >
                  SST
                </Link>
                <Link
                  to="/formation-mac-sst"
                  className="block px-3 py-1 text-sm text-gray-600 hover:text-orange-500 font-medium transition-colors"
                  onClick={toggleMenu}
                >
                  MAC SST
                </Link>
                <Link
                  to="/formation-gestes-postures"
                  className="block px-3 py-1 text-sm text-gray-600 hover:text-orange-500 font-medium transition-colors"
                  onClick={toggleMenu}
                >
                  Gestes et Postures
                </Link>
              </div>
            </div>
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
          <div className="px-5 pt-4 pb-3 border-t border-gray-200">
            <div className="space-y-1">
              <Link
                to="/mentions-legales"
                className="block px-3 py-1 text-xs text-gray-500 hover:text-gray-700 transition-colors"
                onClick={toggleMenu}
              >
                Mentions légales
              </Link>
              <Link
                to="/cgu"
                className="block px-3 py-1 text-xs text-gray-500 hover:text-gray-700 transition-colors"
                onClick={toggleMenu}
              >
                CGU
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
