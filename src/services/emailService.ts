
/**
 * Service pour l'envoi d'emails
 * Dans un environnement de production, ce service serait connecté à une API backend
 */

interface EmailData {
  name: string;
  email: string;
  phone: string;
  company: string;
  sessionTitle?: string;
  sessionDate?: string;
  sessionLocation?: string;
  message?: string;
}

/**
 * Envoie un email de demande d'inscription
 * 
 * Dans le projet actuel, cette fonction est simulée.
 * En production, elle enverrait une requête à un serveur backend.
 */
export const sendRegistrationEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Simulation d'un appel API
    console.log('Envoi d\'un email à n.regnier@semaprev.fr avec les données suivantes:', data);

    // Dans un environnement réel, vous utiliseriez quelque chose comme:
    // const response = await fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     to: 'n.regnier@semaprev.fr',
    //     subject: `Demande d'inscription - ${data.name} - ${data.sessionTitle}`,
    //     data
    //   })
    // });
    // return response.ok;

    // Pour l'instant, on simule un délai et un succès
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return false;
  }
};
