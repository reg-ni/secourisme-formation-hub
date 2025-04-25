
import React from 'react';

const SessionDescription = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Les Gestes de Premiers Secours Enfants et Nourrissons - Lyon
      </h3>
      <article className="text-gray-700">
        <p className="mb-4">
          Cet atelier, est conçu pour vous sensibiliser à la prévention des accidents
          domestiques et des incidents de la vie quotidienne. Vous y apprendrez les gestes de premiers secours cruciaux pour les tout-petits. 
          Vous découvrirez comment anticiper les risques, appeler les secours en cas d'urgence, et réagir de manière efficace en présence d'un enfant ou d'un nourrisson en détresse.
        </p>
        <div className="mb-4">
          <span className="font-semibold">Contenu :</span>
          <ul className="list-disc pl-5 mt-2">
            <li>Prévention des accidents domestiques</li>
            <li>Prévention des incidents de la vie quotidienne</li>
            <li>Prévention du syndrome du bébé secoué</li>
            <li>Secourir un enfant qui s'étouffe</li>
            <li>Secourir un nourrisson qui s'étouffe</li>
            <li>Gestion d'une victime saignant abondamment (nourrisson et enfant)</li>
            <li>Réagir en cas de perte de connaissance (nourrisson et enfant)</li>
            <li>Victime en arrêt respiratoire (nourrisson et enfant)</li>
          </ul>
        </div>
        <p className="mb-4">
          Cette initiation est ouverte à tous sans prérequis. Elle s'adresse aux futurs parents, aux parents, aux grands-parents, aux assistantes maternelles, et même aux enfants à partir de 10 ans.
        </p>
      </article>
    </div>
  );
};

export default SessionDescription;
