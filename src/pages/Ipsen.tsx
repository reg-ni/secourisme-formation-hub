
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SessionsByDate from '../components/ipsen/SessionsByDate';
import SessionDescription from '../components/ipsen/SessionDescription';
import RegistrationDialog from '../components/ipsen/RegistrationDialog';
import { trainingSessions } from '../data/trainingSessions';
import { TrainingSession } from '../types/training';

const Ipsen = () => {
  const [selectedSession, setSelectedSession] = useState<TrainingSession | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleSessionSelect = (session: TrainingSession) => {
    setSelectedSession(session);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ateliers IPSEN <br />
                (Initiation Premiers Secours Enfants Nourrissons)
              </h1>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Calendrier des prochaines sessions
            </h2>
            
            <SessionsByDate 
              sessions={trainingSessions}
              onSelectSession={handleSessionSelect}
            />
          </div>
        </section>

        <SessionDescription />
        
        <RegistrationDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          selectedSession={selectedSession}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Ipsen;
