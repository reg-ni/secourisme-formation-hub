
// Defines the structure of a training session
export interface TrainingSession {
  id: number;
  title: string;
  date: Date;
  duration: string;
  spots: number;
  location: string;
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
