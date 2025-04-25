
import React from 'react';
import { Button } from '@/components/ui/button';
import { TrainingSession } from '@/types/training';
import { CheckCircle, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface SessionCardProps {
  session: TrainingSession;
  isSelected: boolean;
  onSelect: (session: TrainingSession) => void;
}

const SessionCard = ({ session, isSelected, onSelect }: SessionCardProps) => {
  const isComplet = session.spots === 'COMPLET';

  return (
    <div 
      className={`w-full border rounded-lg overflow-hidden shadow-sm transition-all ${
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
          <div className="text-sm text-gray-600"><strong>Horaires :</strong> {session.horaires}</div>
          <div className="text-sm text-gray-600"><strong>Durée :</strong> {session.duration}</div>
          <div className="text-sm text-gray-600"><strong>Places :</strong> {session.spots}</div>
          <div className="text-sm text-gray-600"><strong>Lieu :</strong> {session.location}</div>
          <div className="text-sm text-gray-600"><strong>Tarif :</strong> {session.tarif}</div>
        </div>
        
        <Button 
          onClick={() => onSelect(session)}
          disabled={isComplet}
          className={`w-full mt-4 ${isComplet ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'}`}
        >
          {isComplet ? 'COMPLET' : 'Sélectionner cette session'}
        </Button>
      </div>
    </div>
  );
};

export default SessionCard;
