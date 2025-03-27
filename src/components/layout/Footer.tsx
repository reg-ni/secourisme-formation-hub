
import React from 'react';
import Logo from '../ui/logo';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-semaprev-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div className="col-span-1 md:col-span-1">
            <Logo className="mb-4 invert" />
            <p className="text-sm text-gray-300 mt-2">
              SEMA PREV est votre partenaire privilégié pour les formations en secourisme professionnel.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Liens rapides</h3>
            <ul className="space-y-2">
              {['Accueil', 'Formations', 'À propos', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-300 hover:text-semaprev-orange transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-semaprev-orange mt-0.5" />
                <span className="text-gray-300">123 rue du Secourisme, 75000 Paris</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-semaprev-orange" />
                <a 
                  href="tel:+33123456789" 
                  className="text-gray-300 hover:text-semaprev-orange transition-colors duration-300"
                >
                  01 23 45 67 89
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-semaprev-orange" />
                <a 
                  href="mailto:contact@semaprev.fr" 
                  className="text-gray-300 hover:text-semaprev-orange transition-colors duration-300"
                >
                  contact@semaprev.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Inscrivez-vous pour recevoir nos actualités et offres spéciales.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="px-4 py-2 bg-semaprev-gray border border-gray-600 rounded-md focus:outline-none focus:border-semaprev-orange text-white"
              />
              <button 
                type="submit" 
                className="bg-semaprev-orange text-white px-4 py-2 rounded-md font-medium transition-colors hover:bg-opacity-90"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} SEMA PREV. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
