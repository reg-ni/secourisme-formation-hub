
import React, { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Phone className="w-6 h-6 text-semaprev-orange" />,
    title: "Téléphone",
    details: "01 23 45 67 89",
    link: "tel:+33123456789",
  },
  {
    icon: <Mail className="w-6 h-6 text-semaprev-orange" />,
    title: "Email",
    details: "contact@semaprev.fr",
    link: "mailto:contact@semaprev.fr",
  },
  {
    icon: <MapPin className="w-6 h-6 text-semaprev-orange" />,
    title: "Adresse",
    details: "123 rue du Secourisme, 75000 Paris",
  },
  {
    icon: <Clock className="w-6 h-6 text-semaprev-orange" />,
    title: "Horaires",
    details: "Lun-Ven: 9h-18h",
  },
];

const Contact: React.FC = () => {
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
    <section id="contact" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Contactez-nous</h2>
          <p className="section-subtitle">
            Besoin d'informations ou d'un devis personnalisé ? Nous sommes à votre écoute
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl shadow-md p-8 opacity-0 animate-on-scroll">
            <h3 className="text-2xl font-bold text-semaprev-gray mb-6">Envoyez-nous un message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-semaprev-gray mb-1">Nom</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-semaprev-orange"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-semaprev-gray mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-semaprev-orange"
                    placeholder="Votre email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-semaprev-gray mb-1">Objet</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-semaprev-orange"
                  placeholder="Objet de votre message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-semaprev-gray mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-semaprev-orange"
                  placeholder="Votre message"
                ></textarea>
              </div>
              <button type="submit" className="w-full btn-primary">Envoyer</button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center opacity-0 animate-on-scroll"
                >
                  <div className="p-3 bg-semaprev-orange/10 rounded-full mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-semaprev-gray mb-1">{item.title}</h3>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="text-semaprev-lightgray hover:text-semaprev-orange transition-colors"
                    >
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-semaprev-lightgray">{item.details}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden h-80 opacity-0 animate-on-scroll">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457430434!2d2.2769948739321284!3d48.85894658138326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1654789158270!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte localisation"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
