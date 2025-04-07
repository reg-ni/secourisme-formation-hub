
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/ipsen/HeroSection';
import TrainingSessionsList from '../components/ipsen/TrainingSessionsList';
import RegistrationDialog from '../components/ipsen/RegistrationDialog';
import { trainingSessions } from '../data/trainingSessions';
import { TrainingSession } from '../types/training';

const Ipsen = () => {
  // État pour suivre la session sélectionnée
  const [selectedSession, setSelectedSession] = useState<TrainingSession | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Définir la date sélectionnée lorsqu'une session est choisie
  const handleSessionSelect = (session: TrainingSession) => {
    setSelectedSession(session);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Sessions de formation */}
        <TrainingSessionsList 
          sessions={trainingSessions}
          selectedSession={selectedSession}
          onSelectSession={handleSessionSelect}
        />
        
        {/* Modal d'inscription */}
        <RegistrationDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          selectedSession={selectedSession}
        />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Ipsen;
