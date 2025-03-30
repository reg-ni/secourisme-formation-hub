
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Formations IPSEN
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les prochaines sessions de formation disponibles et inscrivez-vous directement en ligne.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="#sessions" className="inline-flex items-center bg-orange-500 text-white hover:bg-orange-600 px-6 py-3 rounded-md font-medium transition-colors">
              Voir les sessions
            </a>
            <a href="/formation-sst" className="inline-flex items-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-md font-medium transition-colors">
              Détails des formations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
