// Defines the structure of a training session
export interface TrainingSession {
  id: number;
  title: string;
  date: Date;
  duration: string;
  horaires: string;
  spots: number | 'COMPLET';
  location: string;
  tarif: string;
  slug?: string;
}

// Form data structure for registrations
export interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  selectedDate: Date;
  message?: string;
  sessionTitle?: string;
  sessionDate?: string;
  sessionLocation?: string;
}

// Détails pour les pages de formation
export interface TrainingDetails {
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  objectives: string[];
  targetAudience: string;
  prerequisites: string;
  duration: string;
  price?: string;
  certification?: string;
  program: ProgramSection[];
}

export interface ProgramSection {
  title: string;
  items: string[];
}
