
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
