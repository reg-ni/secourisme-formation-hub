
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Calendar } from 'lucide-react';

const SSTPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Formation Sauveteur Secouriste du Travail (SST)
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Formez-vous aux gestes qui sauvent et devenez un acteur essentiel de la prévention dans votre entreprise.
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
                  La formation Sauveteur Secouriste du Travail (SST) permet aux participants d'acquérir les connaissances nécessaires pour porter secours à une personne en cas d'urgence et contribuer à la prévention des risques professionnels dans l'entreprise.
                </p>
                <p className="text-gray-600 mb-4">
                  Cette formation répond aux obligations du Code du Travail qui impose aux entreprises de disposer de personnel formé au secourisme. Le SST joue un rôle essentiel dans la prévention des risques et peut intervenir rapidement en cas d'accident, avant l'arrivée des secours organisés.
                </p>
                <p className="text-gray-600 mb-8">
                  Formé et certifié, le sauveteur secouriste du travail devient un véritable acteur de la prévention dans son entreprise, capable d'identifier les situations dangereuses et de relayer les informations aux personnes concernées.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mb-6">Objectifs de la formation</h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Intervenir efficacement face à une situation d'accident</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Porter secours à la personne en détresse en appliquant les gestes appropriés</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Participer à la prévention des risques professionnels dans l'entreprise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Mettre en application ses compétences au service de la prévention des risques professionnels dans l'entreprise</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mb-6">Programme de la formation</h2>
                
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>1. Le sauveteur secouriste du travail</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Les principaux indicateurs de santé au travail</li>
                      <li>Le rôle du SST dans l'entreprise</li>
                      <li>Le cadre juridique du SST</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>2. Rechercher les dangers persistants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Identifier les dangers dans une situation de travail</li>
                      <li>Repérer les personnes qui pourraient être exposées aux dangers identifiés</li>
                      <li>Supprimer ou faire supprimer des dangers persistants</li>
                      <li>Isoler ou faire isoler des dangers persistants</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>3. Examiner la victime et faire alerter</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Examiner la(les) victime(s) avant et pour la mise en œuvre de l'action choisie</li>
                      <li>Faire alerter ou alerter en fonction de l'organisation des secours dans l'entreprise</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>4. Secourir</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>La victime saigne abondamment</li>
                      <li>La victime s'étouffe</li>
                      <li>La victime se plaint de malaise</li>
                      <li>La victime se plaint de brûlures</li>
                      <li>La victime se plaint d'une douleur empêchant certains mouvements</li>
                      <li>La victime se plaint d'une plaie qui ne saigne pas abondamment</li>
                      <li>La victime ne répond pas mais elle respire</li>
                      <li>La victime ne répond pas et ne respire pas</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>5. Situations inhérentes aux risques spécifiques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Risques spécifiques à la profession et à l'entreprise</li>
                      <li>Conduites particulières à tenir face à ces risques</li>
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
                      <h3 className="font-semibold text-gray-800 mb-2">Public concerné</h3>
                      <p className="text-gray-600">Tout salarié peut devenir sauveteur secouriste du travail sans prérequis particulier.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Durée</h3>
                      <p className="text-gray-600">14 heures réparties sur 2 jours</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Validation</h3>
                      <p className="text-gray-600">Certificat de Sauveteur Secouriste du Travail valable 24 mois</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Méthodes pédagogiques</h3>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Exposés interactifs</li>
                        <li>Démonstrations pratiques</li>
                        <li>Études de cas</li>
                        <li>Mises en situation</li>
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

export default SSTPage;
