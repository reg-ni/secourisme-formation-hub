
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Calendar, RefreshCw } from 'lucide-react';

const MACSSTPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Formation Maintien et Actualisation des Compétences SST (MAC SST)
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Actualisez vos compétences de Sauveteur Secouriste du Travail et restez un acteur essentiel de la prévention dans votre entreprise.
              </p>
              <div className="mt-8">
                <Link to="/ipsen" className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Voir les prochaines sessions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Description détaillée */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Présentation de la formation</h2>
                <p className="text-gray-600 mb-4">
                  La formation Maintien et Actualisation des Compétences SST (MAC SST) permet aux Sauveteurs Secouristes du Travail de maintenir leurs compétences à un niveau au moins équivalent à leur formation initiale.
                </p>
                <p className="text-gray-600 mb-4">
                  Cette formation de recyclage est obligatoire pour conserver la validité de son certificat SST. Elle permet de réviser les gestes de premiers secours, d'actualiser ses connaissances et de prendre en compte les évolutions réglementaires.
                </p>
                <p className="text-gray-600 mb-8">
                  Le MAC SST est l'occasion de partager les expériences vécues depuis la formation initiale ou le précédent recyclage, et d'échanger sur les difficultés rencontrées dans la pratique du secourisme en entreprise.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mb-6">Objectifs de la formation</h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Maintenir et actualiser ses compétences de SST</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Intervenir efficacement face à une situation d'accident</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Mettre en application ses compétences en matière de prévention au profit de la santé et sécurité au travail</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mb-6">Programme de la formation</h2>
                
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>1. Retour d'expérience et actualisation des compétences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Échanges sur les interventions réalisées</li>
                      <li>Évolutions techniques et réglementaires</li>
                      <li>Actualisation des connaissances en matière de prévention</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>2. Révision des gestes d'examen et de secours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>La victime saigne abondamment</li>
                      <li>La victime s'étouffe</li>
                      <li>La victime se plaint de sensations pénibles et/ou présente des signes anormaux</li>
                      <li>La victime se plaint de brûlures</li>
                      <li>La victime se plaint d'une douleur empêchant certains mouvements</li>
                      <li>La victime se plaint d'une plaie qui ne saigne pas abondamment</li>
                      <li>La victime ne répond pas mais elle respire</li>
                      <li>La victime ne répond pas et ne respire pas</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>3. Actualisation de la formation en fonction des risques de l'entreprise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Risques spécifiques de l'entreprise</li>
                      <li>Modifications des procédures de secours</li>
                      <li>Nouveaux équipements de secours</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>4. Évaluation des SST</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Évaluation des compétences selon la grille de certification de l'INRS</li>
                      <li>Cas concrets simulés</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Informations pratiques</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Prérequis</h3>
                      <p className="text-gray-600">Être titulaire du certificat SST en cours de validité (24 mois maximum depuis la formation initiale ou le dernier recyclage).</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Durée</h3>
                      <p className="text-gray-600">7 heures (1 jour)</p>
                    </div>
                    
                    <div className="flex items-start">
                      <RefreshCw className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Recyclage</h3>
                        <p className="text-gray-600">À renouveler tous les 24 mois</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Validation</h3>
                      <p className="text-gray-600">Renouvellement du certificat de Sauveteur Secouriste du Travail valable 24 mois</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Méthodes pédagogiques</h3>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Échanges d'expérience</li>
                        <li>Démonstrations pratiques</li>
                        <li>Mises en situation</li>
                        <li>Cas concrets</li>
                      </ul>
                    </div>
                    
                    <div className="pt-4">
                      <Link to="/ipsen" className="w-full bg-orange-500 text-white hover:bg-orange-600 py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center">
                        Voir les prochaines sessions
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                    
                    <div className="pt-2">
                      <Link to="/contact" className="w-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center mt-4">
                        Demander un devis
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MACSSTPage;
