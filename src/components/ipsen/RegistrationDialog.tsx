
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import RegistrationForm from './RegistrationForm';
import { TrainingSession } from '@/types/training';

interface RegistrationDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedSession: TrainingSession | null;
}

const RegistrationDialog = ({ isOpen, onOpenChange, selectedSession }: RegistrationDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Inscription à la formation</DialogTitle>
        </DialogHeader>
        <RegistrationForm 
          selectedSession={selectedSession}
          onClose={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;
