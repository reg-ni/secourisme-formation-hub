
import React, { useEffect, useRef } from 'react';
import { Award, Users, Calendar, Shield } from 'lucide-react';

interface Stat {
  id: number;
  value: string;
  label: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  {
    id: 1,
    value: "1000+",
    label: "Personnes formées",
    icon: <Users className="w-8 h-8 text-semaprev-orange" />,
  },
  {
    id: 2,
    value: "10+",
    label: "Années d'expérience",
    icon: <Calendar className="w-8 h-8 text-semaprev-orange" />,
  },
  {
    id: 3,
    value: "100%",
    label: "Satisfaction client",
    icon: <Award className="w-8 h-8 text-semaprev-orange" />,
  },
  {
    id: 4,
    value: "5",
    label: "Formations certifiantes",
    icon: <Shield className="w-8 h-8 text-semaprev-orange" />,
  },
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              (el as HTMLElement).style.animationDelay = `${index * 150}ms`;
              el.classList.add('animate-fade-in');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20" ref={sectionRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title">À propos de SEMA PREV</h2>
            <p className="section-subtitle">
              Votre partenaire privilégié pour les formations en secourisme
            </p>
            
            <div className="space-y-6 opacity-0 animate-on-scroll">
              <p className="text-semaprev-gray">
                Depuis notre création, nous nous engageons à fournir des formations de haute qualité en secourisme professionnel. Notre équipe de formateurs expérimentés et certifiés met son expertise à votre service pour garantir des formations pratiques et adaptées à vos besoins spécifiques.
              </p>
              <p className="text-semaprev-gray">
                Que vous soyez une petite entreprise ou un grand groupe, nos programmes sont conçus pour répondre aux exigences réglementaires tout en s'adaptant à votre secteur d'activité et aux risques qui lui sont propres.
              </p>
              <p className="text-semaprev-gray">
                Nous privilégions une approche pédagogique basée sur la pratique et les mises en situation réelles, permettant à chaque participant d'acquérir les bons réflexes et la confiance nécessaire pour agir efficacement en situation d'urgence.
              </p>
            </div>
            
            <div className="mt-8 opacity-0 animate-on-scroll">
              <button className="btn-primary">
                Découvrir notre histoire
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <div className="relative opacity-0 animate-on-scroll">
              <div className="w-full h-full bg-semaprev-gray/10 absolute rounded-2xl rotate-3 scale-95 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Équipe de formation" 
                className="rounded-2xl shadow-lg object-cover w-full aspect-video"
                loading="lazy"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={stat.id} 
                  className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center opacity-0 animate-on-scroll"
                >
                  <div className="mb-3">{stat.icon}</div>
                  <h3 className="text-3xl font-bold text-semaprev-gray">{stat.value}</h3>
                  <p className="text-sm text-semaprev-lightgray">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
