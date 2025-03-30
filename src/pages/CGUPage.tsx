
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const CGUPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Conditions Générales d'Utilisation</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du site web de SEMA PREV, accessible à l'adresse www.semaprev.fr.
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. Acceptation des conditions d'utilisation</h2>
            <p className="mb-4">
              En accédant et en utilisant ce site, vous acceptez d'être lié par les présentes CGU, toutes les lois et règlements applicables, et vous acceptez que vous êtes responsable du respect des lois locales applicables. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser ni accéder à ce site.
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. Utilisation du site</h2>
            <p className="mb-4">
              Le contenu du site web de SEMA PREV est destiné à votre information générale et à votre utilisation. Il peut être modifié sans préavis. SEMA PREV ne garantit pas que le site web ou tout contenu sur celui-ci sera toujours disponible ou ininterrompu. Nous nous réservons le droit de restreindre l'accès à certaines parties ou à la totalité du site sans préavis.
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. Propriété intellectuelle</h2>
            <p className="mb-4">
              Ce site contient du matériel qui est la propriété de SEMA PREV ou concédé sous licence. Ce matériel comprend, sans s'y limiter, la conception, la mise en page, l'apparence, les graphiques et le contenu. La reproduction est interdite sauf avec l'autorisation écrite de SEMA PREV.
            </p>
            <p className="mb-4">
              Tous les droits de propriété intellectuelle sont réservés. Vous ne pouvez pas reproduire, dupliquer, copier, vendre, revendre, visiter ou exploiter de quelque manière que ce soit le Site ou une partie du Site à des fins commerciales sans notre consentement écrit exprès.
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">4. Limitations de responsabilité</h2>
            <p className="mb-4">
              SEMA PREV ne sera pas tenue responsable des dommages directs, indirects, spéciaux, consécutifs ou exemplaires résultant de l'utilisation ou de l'incapacité d'utiliser le site web ou les services ou le contenu fournis sur le site web, même si SEMA PREV a été informée de la possibilité de tels dommages.
            </p>
            <p className="mb-4">
              Les informations contenues sur ce site web sont fournies sans aucune garantie, condition ou garantie quant à leur exactitude. Dans la mesure permise par la loi, SEMA PREV exclut expressément toutes les conditions, garanties et autres termes qui pourraient autrement être impliqués par la loi, la common law ou le droit de l'équité.
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">5. Sites web tiers</h2>
            <p className="mb-4">
              Notre site web peut contenir des liens vers des sites web tiers. Ces liens sont fournis pour votre commodité afin de fournir des informations supplémentaires. Ils ne signifient pas que nous approuvons ces sites web. Nous n'avons aucune responsabilité quant au contenu des sites web liés.
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">6. Informations personnelles</h2>
            <p className="mb-4">
              Toute information personnelle que vous transmettez à SEMA PREV via ce site sera utilisée conformément à notre politique de confidentialité.
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">7. Droit applicable</h2>
            <p className="mb-4">
              Votre utilisation de ce site web et tout litige découlant de cette utilisation du site web sont soumis aux lois de France.
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">8. Modifications des conditions</h2>
            <p className="mb-4">
              SEMA PREV se réserve le droit de modifier ces conditions d'utilisation à tout moment en publiant des modifications sur notre site web. Vous êtes censé consulter régulièrement cette page pour prendre connaissance des modifications, car elles sont juridiquement contraignantes pour vous.
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">9. Contact</h2>
            <p className="mb-4">
              Si vous avez des questions concernant ces CGU, veuillez nous contacter à :
            </p>
            <p className="mb-4">
              SEMA PREV<br />
              Email : contact@semaprev.fr<br />
              Téléphone : 01 23 45 67 89
            </p>
            
            <p className="mt-8 text-sm text-gray-500">
              Dernière mise à jour : 26 Août 2024
            </p>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Link to="/" className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-3 rounded-md font-medium transition-colors">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CGUPage;
