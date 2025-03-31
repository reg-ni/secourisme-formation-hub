
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { sendRegistrationEmail } from '@/services/emailService';
import { toast } from 'sonner';
import { RegistrationFormData, TrainingSession } from '@/types/training';

interface RegistrationFormProps {
  selectedSession: TrainingSession | null;
  onClose: () => void;
}

const RegistrationForm = ({ selectedSession, onClose }: RegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
  }>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.company) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (!selectedSession) {
      toast.error('Aucune session de formation sélectionnée');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for email
      const registrationData: RegistrationFormData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        selectedDate: selectedSession.date,
        message: formData.message,
        sessionTitle: selectedSession.title,
        sessionDate: new Date(selectedSession.date).toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }),
        sessionLocation: selectedSession.location
      };

      await sendRegistrationEmail(registrationData);
      
      toast.success('Votre demande d'inscription a été envoyée avec succès');
      onClose();
    } catch (error) {
      console.error('Error submitting registration:', error);
      toast.error('Une erreur est survenue lors de l\'envoi de votre demande');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Nom complet *</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom complet"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="votre@email.com"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="phone">Téléphone *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Votre numéro de téléphone"
            required
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="company">Entreprise *</Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Nom de votre entreprise"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="session-info">Session sélectionnée</Label>
        <Input
          id="session-info"
          value={selectedSession ? `${selectedSession.title} - ${new Date(selectedSession.date).toLocaleDateString('fr-FR', {day: 'numeric', month: 'long', year: 'numeric'})}` : ''}
          readOnly
          className="bg-gray-100"
        />
      </div>
      
      <div>
        <Label htmlFor="message">Message (optionnel)</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Information supplémentaire concernant votre inscription"
          rows={4}
        />
      </div>
      
      <div className="flex justify-end space-x-4">
        <Button variant="outline" type="button" onClick={onClose}>
          Annuler
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
        </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
