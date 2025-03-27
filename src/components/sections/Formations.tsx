
import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

interface Formation {
  id: number;
  title: string;
  description: string;
  duration: string;
  image: string;
  features: string[];
}

const formations: Formation[] = [
  {
    id: 1,
    title: "Formation SST",
    description: "Apprenez les gestes qui sauvent en milieu professionnel et devenez Sauveteur Secouriste du Travail.",
    duration: "2 jours",
    image: "https://images.unsplash.com/photo-1590337318158-2c7af60da8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    features: [
      "Protection et prévention",
      "Examen et alerte",
      "Secours à la victime",
      "Exercices pratiques",
    ]
  },
  {
    id: 2,
    title: "Formation PSC1",
    description: "Formation de base aux premiers secours pour les particuliers et professionnels.",
    duration: "1 jour",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    features: [
      "Malaise et alerte",
      "Plaies et protection",
      "Brûlures et traumatismes",
      "Hémorragies et obstruction",
    ]
  },
  {
    id: 3,
    title: "Secourisme en entreprise",
    description: "Formation sur-mesure adaptée aux risques spécifiques de votre secteur d'activité.",
    duration: "1-3 jours",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    features: [
      "Analyse des risques",
      "Protocoles adaptés",
      "Formation du personnel",
      "Simulations réelles",
    ]
  },
  {
    id: 4,
    title: "Utilisation défibrillateur (DAE)",
    description: "Apprenez à utiliser un défibrillateur automatisé externe en situation d'urgence.",
    duration: "3 heures",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    features: [
      "Reconnaissance de l'arrêt cardiaque",
      "Utilisation du DAE",
      "Massage cardiaque",
      "Protocole complet",
    ]
  },
  {
    id: 5,
    title: "Gestes d'urgence pédiatrique",
    description: "Formation spécifique aux gestes de premiers secours pour les enfants et nourrissons.",
    duration: "1 jour",
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    features: [
      "Étouffement du nourrisson",
      "Réanimation pédiatrique",
      "Traumatismes spécifiques",
      "Convulsions et fièvre",
    ]
  },
];

const Formations: React.FC = () => {
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
    <section id="formations" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Nos formations</h2>
          <p className="section-subtitle">
            Découvrez notre catalogue complet de formations en secourisme professionnel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formations.map((formation, index) => (
            <div 
              key={formation.id}
              className="bg-white rounded-xl shadow-md overflow-hidden card-hover opacity-0 animate-on-scroll"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={formation.image} 
                  alt={formation.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-semaprev-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                  {formation.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-semaprev-gray mb-2">{formation.title}</h3>
                <p className="text-semaprev-lightgray mb-4">{formation.description}</p>
                <ul className="space-y-2 mb-6">
                  {formation.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-semaprev-orange shrink-0 mt-0.5" />
                      <span className="text-sm text-semaprev-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full btn-primary">En savoir plus</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center opacity-0 animate-on-scroll">
          <p className="text-semaprev-lightgray mb-6">
            Besoin d'une formation personnalisée pour votre entreprise ?
          </p>
          <button className="btn-secondary">
            Demander un programme sur-mesure
          </button>
        </div>
      </div>
    </section>
  );
};

export default Formations;
