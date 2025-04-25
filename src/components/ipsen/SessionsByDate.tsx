
import React from 'react';
import SessionCard from './SessionCard';
import { TrainingSession } from '@/types/training';
import { groupSessionsByDate } from '@/data/trainingSessions';

interface SessionsByDateProps {
  sessions: TrainingSession[];
  onSelectSession: (session: TrainingSession) => void;
}

const SessionsByDate: React.FC<SessionsByDateProps> = ({ sessions, onSelectSession }) => {
  const groupedSessions = groupSessionsByDate(sessions);

  return (
    <div className="space-y-12">
      {Object.entries(groupedSessions).map(([date, dateSessions]) => (
        <div key={date} className="mb-8">
          <h2 className="text-xl font-bold text-left text-gray-700 mb-6">
            {date}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dateSessions.map((session) => (
              <SessionCard
                key={session.id}
                session={session}
                onSelect={onSelectSession}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SessionsByDate;
