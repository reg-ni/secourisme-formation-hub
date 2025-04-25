
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
        <div key={date} className="mb-20">
          <h2 className="text-xl font-bold text-left text-gray-700 mb-6">
            {date}
          </h2>
          <div className="flex flex-wrap gap-6">
            {dateSessions.map((session) => (
              <div key={session.id} className="w-full sm:w-[calc(50%-12px)] xl:w-[calc(33.33%-16px)]">
                <SessionCard
                  session={session}
                  isSelected={false}
                  onSelect={onSelectSession}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SessionsByDate;
