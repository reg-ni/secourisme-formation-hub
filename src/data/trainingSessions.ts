interface TrainingSession {
  id: number;
  title: string;
  date: Date;
  duration: string;
  horaires: string;
  spots: number | 'COMPLET';
  location: string;
  tarif: string;
}

export const trainingSessions: TrainingSession[] = [
  {
    id: 1,
    title: 'Atelier IPSEN',
    date: new Date(2025, 4, 4),
    duration: '2 heures',
    horaires: '9h-11h',
    spots: 'COMPLET',
    location: 'Ecully 69 - Clinique du Val D\'Ouest',
    tarif: '29€ par personne'
  },
  {
    id: 2,
    title: 'Atelier IPSEN',
    date: new Date(2025, 4, 4),
    duration: '2 heures',
    horaires: '11h30-13h30',
    spots: 'COMPLET',
    location: 'Ecully 69 - Clinique du Val D\'Ouest',
    tarif: '29€ par personne'
  },
  {
    id: 3,
    title: 'Atelier IPSEN',
    date: new Date(2025, 4, 4),
    duration: '2 heures',
    horaires: '14h-16h',
    spots: 2,
    location: 'Ecully 69 - Clinique du Val D\'Ouest',
    tarif: '29€ par personne'
  },
  {
    id: 4,
    title: 'Atelier IPSEN',
    date: new Date(2025, 4, 31),
    duration: '2 heures',
    horaires: '9h-11h',
    spots: 3,
    location: 'Ecully 69 - Clinique du Val D\'Ouest',
    tarif: '29€ par personne'
  },
  {
    id:5,
    title: 'Atelier IPSEN',
    date: new Date(2025, 5, 7),
    duration: '2 heures',
    horaires: '9h-11h',
    spots: 6,
    location: 'Ecully 69 - Clinique du Val D\'Ouest',
    tarif: '29€ par personne'
  },
  {
    id:6,
    title: 'Atelier IPSEN',
    date: new Date(2025, 5, 21),
    duration: '2 heures',
    horaires: '9h-11h',
    spots: 3,
    location: 'Ecully 69 - Clinique du Val D\'Ouest',
    tarif: '29€ par personne'
  },
  {
    id:7,
    title: 'Atelier IPSEN',
    date: new Date(2025, 5, 21),
    duration: '2 heures',
    horaires: '11h30-13h30',
    spots: 6,
    location: 'Ecully 69 - Clinique du Val D\'Ouest',
    tarif: '29€ par personne'
  },
  {
    id:8,
    title: 'Atelier IPSEN',
    date: new Date(2025, 5, 22),
    duration: '4 heures',
    horaires: '9h-13h',
    spots: 12,
    location: 'Villeurbanne - La Cause Des Parents',
    tarif: '39€ par personne'
  },
];

// Utilitaire de formatage de date
export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('fr-FR', options);
}

export function groupSessionsByDate(sessions: TrainingSession[]): Record<string, TrainingSession[]> {
  return sessions.reduce((groups, session) => {
    const dateKey = formatDate(session.date);
    if (!groups[dateKey]) groups[dateKey] = [];
    groups[dateKey].push(session);
    return groups;
  }, {} as Record<string, TrainingSession[]>);
}
