
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { sendRegistrationEmail } from '@/services/emailService';
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from '@/lib/utils';

// Schéma de validation pour le formulaire
const formSchema = z.object({
  name: z.string().min(2, { message: 'Le nom est requis' }),
  email: z.string().email({ message: 'Email invalide' }),
  phone: z.string().min(10, { message: 'Numéro de téléphone invalide' }),
  company: z.string().min(2, { message: 'Le nom de l\'entreprise est requis' }),
  message: z.string().optional(),
});

// Interface pour le type de session de formation
interface TrainingSession {
  id: number;
  title: string;
  date: Date;
  duration: string;
  spots: number;
  location: string;
}

// Données des sessions de formation (à remplacer par vos vraies données)
const trainingSessions: TrainingSession[] = [
  {
    id: 1,
    title: 'Formation SST - Initiale',
    date: new Date(2024, 8, 15), // 15 septembre 2024
    duration: '2 jours',
    spots: 12,
    location: 'Paris - Centre IPSEN'
  },
  {
    id: 2,
    title: 'Formation SST - Recyclage',
    date: new Date(2024, 8, 22), // 22 septembre 2024
    duration: '1 jour',
    spots: 10,
    location: 'Paris - Centre IPSEN'
  },
  {
    id: 3,
    title: 'Formation Gestes et Postures',
    date: new Date(2024, 9, 5), // 5 octobre 2024
    duration: '1 jour',
    spots: 15,
    location: 'Lyon - Centre IPSEN'
  },
  {
    id: 4,
    title: 'Formation Prévention Incendie',
    date: new Date(2024, 9, 12), // 12 octobre 2024
    duration: '1 jour',
    spots: 12,
    location: 'Paris - Centre IPSEN'
  },
  {
    id: 5,
    title: 'Formation PSC1',
    date: new Date(2024, 10, 8), // 8 novembre 2024
    duration: '1 jour',
    spots: 10,
    location: 'Paris - Centre IPSEN'
  }
];

const Ipsen = () => {
  // État pour suivre la session sélectionnée
  const [selectedSession, setSelectedSession] = useState<TrainingSession | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
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

  // Gérer la sélection d'une session
  const handleSessionSelect = (session: TrainingSession) => {
    setSelectedSession(session);
    setDialogOpen(true);
  };

  // Gérer la soumission du formulaire
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Vérifier qu'une session est sélectionnée
    if (!selectedSession) {
      toast.error('Erreur', {
        description: 'Veuillez sélectionner une session de formation',
      });
      return;
    }
    
    // Préparation des données à envoyer
    const formData = {
      ...data,
      sessionTitle: selectedSession.title,
      sessionDate: format(selectedSession.date, 'dd/MM/yyyy'),
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
      
      // Fermer la boite de dialogue
      setDialogOpen(false);
      
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
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section for IPSEN */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Formations IPSEN
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez les prochaines sessions de formation disponibles et inscrivez-vous directement en ligne.
              </p>
            </div>
          </div>
        </section>
        
        {/* Sessions de formation */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Calendrier des prochaines sessions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingSessions.map((session) => (
                <div 
                  key={session.id}
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border-gray-200"
                >
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900">{session.title}</h3>
                    
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
                      onClick={() => handleSessionSelect(session)}
                      className="mt-4 w-full bg-orange-500 hover:bg-orange-600"
                    >
                      S'inscrire à cette session
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />

      {/* Dialogue d'inscription */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Demande d'inscription à la formation</DialogTitle>
            <DialogDescription>
              {selectedSession && (
                <div className="mt-2 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-medium text-orange-600">{selectedSession.title}</h4>
                  <div className="mt-1 text-sm">
                    <p><span className="font-medium">Date:</span> {format(selectedSession.date, 'dd MMMM yyyy')}</p>
                    <p><span className="font-medium">Durée:</span> {selectedSession.duration}</p>
                    <p><span className="font-medium">Lieu:</span> {selectedSession.location}</p>
                  </div>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-2">
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
              >
                Envoyer ma demande d'inscription
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Ipsen;
