
import React from 'react';
import { format } from 'date-fns';
import { CalendarIcon, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TrainingSession } from '@/types/training';

interface TrainingSessionCardProps {
  session: TrainingSession;
  isSelected: boolean;
  onSelect: (session: TrainingSession) => void;
}

const TrainingSessionCard = ({ session, isSelected, onSelect }: TrainingSessionCardProps) => {
  return (
    <div 
      className={`border rounded-lg overflow-hidden shadow-sm transition-all ${
        isSelected 
          ? 'border-orange-500 ring-2 ring-orange-200' 
          : 'hover:shadow-md border-gray-200'
      }`}
    >
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-gray-900">{session.title}</h3>
          {isSelected && (
            <CheckCircle className="h-5 w-5 text-orange-500" />
          )}
        </div>
        
        <div className="mt-3 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" />
            {format(session.date, 'dd MMMM yyyy')}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="mr-2 font-medium">Durée:</span> {session.duration}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="mr-2 font-medium">Places:</span> {session.spots} disponibles
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="mr-2 font-medium">Lieu:</span> {session.location}
          </div>
        </div>
        
        <Button 
          onClick={() => onSelect(session)}
          className="mt-4 w-full bg-orange-500 hover:bg-orange-600"
        >
          Sélectionner cette session
        </Button>
      </div>
    </div>
  );
};

export default TrainingSessionCard;
