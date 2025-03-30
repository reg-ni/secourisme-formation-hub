
import { TrainingSession } from "../types/training";

// Training session data
export const trainingSessions: TrainingSession[] = [
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
