
import React, { useState, useEffect } from 'react';
import Logo from '../ui/logo';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-white/90 shadow-md backdrop-blur-sm' : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo size="sm" className="cursor-pointer" />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Accueil', id: 'hero' },
              { name: 'Formations', id: 'formations' },
              { name: 'À propos', id: 'about' },
              { name: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-semaprev-gray font-medium hover:text-semaprev-orange transition-colors"
              >
                {item.name}
              </button>
            ))}
            <button className="btn-primary">Demander un devis</button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-semaprev-gray">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-white transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out pt-20`}
      >
        <div className="flex flex-col space-y-6 p-6">
          {[
            { name: 'Accueil', id: 'hero' },
            { name: 'Formations', id: 'formations' },
            { name: 'À propos', id: 'about' },
            { name: 'Contact', id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-semaprev-gray font-medium text-xl hover:text-semaprev-orange transition-colors"
            >
              {item.name}
            </button>
          ))}
          <button className="btn-primary mt-4 w-full">Demander un devis</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
