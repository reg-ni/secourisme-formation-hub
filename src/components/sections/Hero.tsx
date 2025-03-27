
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToFormations = () => {
    const formationsElement = document.getElementById('formations');
    if (formationsElement) {
      formationsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      id="hero" 
      className="relative min-h-screen flex items-center pt-20"
      ref={heroRef}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute h-96 w-96 rounded-full bg-semaprev-orange opacity-5 -top-20 -left-20"></div>
        <div className="absolute h-64 w-64 rounded-full bg-semaprev-gray opacity-5 bottom-10 right-10"></div>
      </div>

      <div className="section-container z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div 
              className="text-sm font-medium px-4 py-1 bg-semaprev-orange text-white rounded-full inline-block mb-2 opacity-0 animate-fade-in animate-on-scroll"
              style={{ animationDelay: '0ms' }}
            >
              Formations professionnelles
            </div>
            <h1 
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-semaprev-gray leading-tight opacity-0 animate-fade-in animate-on-scroll"
              style={{ animationDelay: '200ms' }}
            >
              Expert en <span className="text-semaprev-orange">formation</span> de secourisme professionnel
            </h1>
            <p 
              className="text-lg md:text-xl text-semaprev-lightgray opacity-0 animate-fade-in animate-on-scroll"
              style={{ animationDelay: '400ms' }}
            >
              SEMA PREV vous accompagne dans votre montée en compétences sur les gestes qui sauvent, avec des formations sur mesure adaptées aux besoins de votre entreprise.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 mt-8 opacity-0 animate-fade-in animate-on-scroll"
              style={{ animationDelay: '600ms' }}
            >
              <button className="btn-primary">
                Découvrir nos formations
              </button>
              <button className="btn-secondary">
                Demander un devis
              </button>
            </div>
          </div>

          <div 
            className="hidden lg:block opacity-0 animate-fade-in animate-on-scroll"
            style={{ animationDelay: '800ms' }}
          >
            <div className="relative">
              <div className="w-full h-full bg-semaprev-orange/10 absolute rounded-2xl -rotate-6 scale-95 top-0 left-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1616535400563-1d5bf017a28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Formation secourisme" 
                className="rounded-2xl shadow-lg object-cover w-full aspect-video"
                loading="lazy"
              />
              <div className="absolute bottom-6 right-6 glassmorphism p-5 rounded-xl max-w-xs shadow-lg">
                <p className="text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                  <span className="text-green-500">Certification</span>
                </p>
                <p className="text-semaprev-gray font-semibold mt-1">
                  Des formations certifiantes reconnues par l'État
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
          <button 
            onClick={scrollToFormations}
            aria-label="Défiler vers le bas"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors"
          >
            <ChevronDown className="w-6 h-6 text-semaprev-orange" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
