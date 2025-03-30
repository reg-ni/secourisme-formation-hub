
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const MentionsLegalesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. Informations légales</h2>
            <p className="mb-4">
              <strong>Raison sociale :</strong> SEMA PREV<br />
              <strong>Forme juridique :</strong> SARL (Société à Responsabilité Limitée)<br />
              <strong>Capital social :</strong> 10 000 €<br />
              <strong>Siège social :</strong> 123 rue de la Prévention, 75000 Paris<br />
              <strong>SIRET :</strong> 123 456 789 00012<br />
              <strong>N° TVA intracommunautaire :</strong> FR 12 123456789<br />
              <strong>Code APE :</strong> 8559A - Formation continue d'adultes<br />
              <strong>Représentant légal :</strong> M. Nicolas Regnier, Gérant
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. Coordonnées</h2>
            <p className="mb-4">
              <strong>Adresse :</strong> 123 rue de la Prévention, 75000 Paris<br />
              <strong>Téléphone :</strong> 01 23 45 67 89<br />
              <strong>Email :</strong> contact@semaprev.fr<br />
              <strong>Site web :</strong> www.semaprev.fr
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. Hébergement du site</h2>
            <p className="mb-4">
              <strong>Raison sociale :</strong> OVH SAS<br />
              <strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France<br />
              <strong>Téléphone :</strong> 09 72 10 10 10
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">4. Propriété intellectuelle</h2>
            <p className="mb-4">
              L'ensemble des éléments constituant le site www.semaprev.fr (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.) ainsi que le site lui-même, sont la propriété exclusive de SEMA PREV ou de ses partenaires. Ces éléments sont protégés par les lois françaises et les textes internationaux relatifs au respect des droits d'auteur, des marques, des dessins et modèles et/ou tout autre droit de propriété intellectuelle applicable.
            </p>
            <p className="mb-4">
              Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l'accord préalable et écrit de SEMA PREV, sont strictement interdites et constitueraient une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">5. Protection des données personnelles</h2>
            <p className="mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification, d'opposition, de limitation du traitement, d'effacement et de portabilité de vos données personnelles, que vous pouvez exercer en nous contactant par email à l'adresse : rgpd@semaprev.fr ou par courrier à l'adresse du siège social.
            </p>
            <p className="mb-4">
              Pour plus d'informations sur la façon dont nous traitons vos données, consultez notre politique de confidentialité.
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">6. Cookies</h2>
            <p className="mb-4">
              Le site www.semaprev.fr utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur notre site, vous consentez à l'utilisation de ces cookies conformément à notre politique en matière de cookies.
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">7. Liens hypertextes</h2>
            <p className="mb-4">
              Le site www.semaprev.fr peut contenir des liens hypertextes vers d'autres sites web. SEMA PREV n'exerce aucun contrôle sur ces sites et n'assume aucune responsabilité quant à leur contenu ou aux pratiques de confidentialité de leurs propriétaires.
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">8. Droit applicable et juridiction compétente</h2>
            <p className="mb-4">
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">9. Crédits</h2>
            <p className="mb-4">
              <strong>Conception et réalisation du site :</strong> SEMA PREV<br />
              <strong>Photographies :</strong> © SEMA PREV, Adobe Stock, Unsplash
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

export default MentionsLegalesPage;
