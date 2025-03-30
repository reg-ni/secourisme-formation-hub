
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Calendar, Shield } from 'lucide-react';

const GestesPosturesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Formation Gestes et Postures
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Prévenez les troubles musculosquelettiques (TMS) et adoptez les bonnes postures dans votre environnement de travail.
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
                  La formation Gestes et Postures vise à prévenir les risques liés à l'activité physique et à réduire les troubles musculosquelettiques (TMS), première cause de maladies professionnelles en France.
                </p>
                <p className="text-gray-600 mb-4">
                  Cette formation permet d'acquérir les connaissances nécessaires pour participer à l'amélioration des conditions de travail. Elle donne aux stagiaires les outils pour adopter et appliquer les principes de base de sécurité physique et d'économie d'effort lors de leurs activités professionnelles.
                </p>
                <p className="text-gray-600 mb-8">
                  L'objectif est de diminuer les risques d'accidents et de maladies professionnelles liés aux activités physiques et de participer à l'amélioration des conditions de travail.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mb-6">Objectifs de la formation</h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Identifier les risques liés à l'activité physique au travail</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Comprendre le fonctionnement du corps humain et les risques d'atteintes à la santé</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Appliquer les principes de sécurité physique et d'économie d'effort</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Proposer des améliorations de sa situation de travail</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mb-6">Programme de la formation</h2>
                
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>1. Les troubles musculosquelettiques (TMS)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Définition et statistiques</li>
                      <li>Les différentes pathologies</li>
                      <li>Les facteurs de risque et causes des TMS</li>
                      <li>Les coûts humains et économiques</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>2. Notions d'anatomie et de physiologie</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>La colonne vertébrale : anatomie et fonctionnement</li>
                      <li>Les membres supérieurs et inférieurs</li>
                      <li>Les atteintes et lésions</li>
                      <li>Les facteurs aggravants</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>3. Principes de sécurité physique et d'économie d'effort</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Observation et analyse de l'environnement</li>
                      <li>Les principes généraux de manutention</li>
                      <li>Les principes de base de sécurité physique</li>
                      <li>Les postures de travail sécuritaires</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>4. Applications pratiques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Exercices d'échauffement et d'étirement</li>
                      <li>Techniques de port de charges</li>
                      <li>Exercices de manutention adaptés aux situations de travail des stagiaires</li>
                      <li>Mises en situation pratique</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>5. Amélioration des situations de travail</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Analyse des postes de travail</li>
                      <li>Identification des risques et contraintes</li>
                      <li>Recherche de pistes d'amélioration</li>
                      <li>Aménagements possibles des postes de travail</li>
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
                      <p className="text-gray-600">Tout salarié dont l'activité comporte des manutentions manuelles ou des postures contraignantes.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Prérequis</h3>
                      <p className="text-gray-600">Aucun prérequis nécessaire.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Durée</h3>
                      <p className="text-gray-600">7 heures (1 jour)</p>
                    </div>
                    
                    <div className="flex items-start">
                      <Shield className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Conformité</h3>
                        <p className="text-gray-600">Formation conforme à l'article R.4541-8 du Code du Travail</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Méthodes pédagogiques</h3>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Alternance de théorie et de pratique</li>
                        <li>Exercices pratiques adaptés à l'activité des stagiaires</li>
                        <li>Mises en situation et analyses de cas concrets</li>
                        <li>Support de formation remis à chaque participant</li>
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

export default GestesPosturesPage;
