
import React from 'react';
import { TrainingSession } from '@/types/training';
import TrainingSessionCard from './TrainingSessionCard';

interface TrainingSessionsListProps {
  sessions: TrainingSession[];
  selectedSession: TrainingSession | null;
  onSelectSession: (session: TrainingSession) => void;
}

const TrainingSessionsList = ({ 
  sessions, 
  selectedSession, 
  onSelectSession 
}: TrainingSessionsListProps) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Calendrier des prochaines sessions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map((session) => (
            <TrainingSessionCard
              key={session.id}
              session={session}
              isSelected={selectedSession?.id === session.id}
              onSelect={onSelectSession}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSessionsList;
