
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { TrainingSession } from '@/types/training';
import { sendRegistrationEmail } from '@/services/emailService';

// Schéma de validation pour le formulaire
const formSchema = z.object({
  name: z.string().min(2, { message: 'Le nom est requis' }),
  email: z.string().email({ message: 'Email invalide' }),
  phone: z.string().min(10, { message: 'Numéro de téléphone invalide' }),
  company: z.string().min(2, { message: 'Le nom de l\'entreprise est requis' }),
  selectedDate: z.date({
    required_error: 'Veuillez sélectionner une date de formation',
  }),
  message: z.string().optional(),
});

interface RegistrationFormProps {
  trainingSessions: TrainingSession[];
  selectedSession: TrainingSession | null;
  setSelectedSession: (session: TrainingSession | null) => void;
}

const RegistrationForm = ({ trainingSessions, selectedSession, setSelectedSession }: RegistrationFormProps) => {
  // Initialisation du formulaire React Hook Form avec zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    },
  });

  // Gérer la soumission du formulaire
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Vérifier qu'une session est sélectionnée
    if (!selectedSession) {
      toast.error('Veuillez sélectionner une session de formation');
      return;
    }
    
    // Préparation des données à envoyer
    const formData = {
      ...data,
      sessionTitle: selectedSession.title,
      sessionDate: format(data.selectedDate, 'dd/MM/yyyy'),
      sessionLocation: selectedSession.location,
    };

    // Afficher un toast de chargement
    toast.loading('Envoi de votre demande en cours...');
    
    // Envoyer les données avec notre service
    const success = await sendRegistrationEmail(formData);
    
    if (success) {
      // Notification de succès
      toast.success('Inscription envoyée !', {
        description: 'Nous avons bien reçu votre demande et vous contacterons prochainement.',
      });
      
      // Réinitialiser le formulaire
      form.reset();
      setSelectedSession(null);
    } else {
      toast.error('Erreur lors de l\'envoi', {
        description: 'Un problème est survenu. Veuillez réessayer ou nous contacter par téléphone.',
      });
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          Formulaire d'inscription
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Complétez le formulaire ci-dessous pour vous inscrire à une session de formation
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Nom complet */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom complet</FormLabel>
                    <FormControl>
                      <Input placeholder="Entrez votre nom complet" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Email et téléphone sur une ligne */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="votre@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre numéro de téléphone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Entreprise */}
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Entreprise</FormLabel>
                    <FormControl>
                      <Input placeholder="Nom de votre entreprise" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Date de session */}
              <FormField
                control={form.control}
                name="selectedDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date de formation</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? (
                              format(field.value, "dd MMMM yyyy")
                            ) : (
                              <span>Choisissez une date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => {
                            // Désactiver les dates qui ne sont pas dans les sessions
                            return !trainingSessions.some(
                              session => 
                                date.getDate() === session.date.getDate() &&
                                date.getMonth() === session.date.getMonth() &&
                                date.getFullYear() === session.date.getFullYear()
                            );
                          }}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    {selectedSession && (
                      <p className="text-sm text-orange-600 mt-1">
                        Session sélectionnée: {selectedSession.title}
                      </p>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Message optionnel */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message (optionnel)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Information supplémentaire concernant votre inscription" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Bouton de soumission */}
              <Button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600"
                disabled={!selectedSession}
              >
                Envoyer ma demande d'inscription
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
