
# Guide pour le Développement Local de SEMA PREV

Ce guide vous aidera à configurer un environnement de développement local pour travailler sur le site SEMA PREV.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé:

1. **Node.js** (version 14 ou supérieure) - [Télécharger Node.js](https://nodejs.org/)
2. **npm** (généralement installé avec Node.js)
3. **Git** (optionnel, pour la gestion de versions) - [Télécharger Git](https://git-scm.com/)
4. Un éditeur de code comme **Visual Studio Code** - [Télécharger VS Code](https://code.visualstudio.com/)

## Configuration du Projet React

### Étape 1: Cloner ou Télécharger le Projet

Si vous utilisez Git:
```bash
git clone [URL-DU-REPO]
cd sema-prev-website
```

Ou simplement téléchargez et extrayez le projet dans un dossier.

### Étape 2: Installer les Dépendances

Dans le terminal, naviguez vers le dossier du projet et exécutez:
```bash
npm install
```

### Étape 3: Lancer le Serveur de Développement

Pour démarrer le serveur de développement local:
```bash
npm run dev
```

Le site sera accessible à l'adresse [http://localhost:5173](http://localhost:5173) dans votre navigateur.

## Structure du Projet

Voici la structure principale du projet:

```
sema-prev-website/
├── public/             # Fichiers statiques (images, favicon, etc.)
├── src/                # Code source
│   ├── components/     # Composants React réutilisables
│   │   ├── layout/     # Composants de mise en page (Navbar, Footer)
│   │   ├── sections/   # Sections principales du site
│   │   └── ui/         # Composants d'interface utilisateur
│   ├── hooks/          # Hooks React personnalisés
│   ├── lib/            # Bibliothèques et utilitaires
│   ├── pages/          # Pages principales du site
│   ├── App.tsx         # Composant racine de l'application
│   ├── index.css       # Styles CSS globaux
│   └── main.tsx        # Point d'entrée de l'application
└── index.html          # Fichier HTML principal
```

## Modification du Site

### Modifier le Contenu

Pour modifier le contenu des différentes sections:

1. Naviguez vers `src/components/sections/`
2. Ouvrez le fichier correspondant à la section que vous souhaitez modifier (ex: `Hero.tsx`, `Formations.tsx`, etc.)
3. Modifiez le texte ou les images selon vos besoins
4. Enregistrez le fichier et le serveur de développement mettra à jour le site automatiquement

### Modifier le Style

Le projet utilise Tailwind CSS pour le style. Pour modifier l'apparence:

1. Les classes Tailwind sont appliquées directement dans les composants React
2. Les styles globaux sont définis dans `src/index.css`
3. La configuration de Tailwind se trouve dans `tailwind.config.ts`

### Ajouter de Nouvelles Pages

Pour ajouter une nouvelle page:

1. Créez un nouveau fichier dans `src/pages/` (ex: `NouveauService.tsx`)
2. Ajoutez la route dans `src/App.tsx` dans le composant `Routes`

## Migration vers HTML/CSS/JS/PHP

Pour migrer progressivement vers du HTML/CSS/JS/PHP:

1. Utilisez les exemples HTML dans `src/examples/` comme point de départ
2. Créez des fichiers PHP pour gérer les formulaires et les inscriptions
3. Convertissez un composant React à la fois en HTML/CSS/JS

### Exemple de Structure PHP pour le Formulaire de Contact

Créez un fichier `process-form.php`:

```php
<?php
// Configurer les en-têtes pour permettre CORS si nécessaire
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Récupérer les données du formulaire
$data = json_decode(file_get_contents("php://input"), true);

// Vérifier si les données sont présentes
if (
    isset($data['name']) &&
    isset($data['email']) &&
    isset($data['subject']) &&
    isset($data['message'])
) {
    $name = $data['name'];
    $email = $data['email'];
    $subject = $data['subject'];
    $message = $data['message'];
    
    // Adresse email de destination
    $to = "contact@semaprev.fr";
    
    // Sujet de l'email
    $emailSubject = "Nouveau message de $name: $subject";
    
    // Corps de l'email
    $emailBody = "Nom: $name\n";
    $emailBody .= "Email: $email\n\n";
    $emailBody .= "Message:\n$message";
    
    // En-têtes de l'email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Envoyer l'email
    $mailSent = mail($to, $emailSubject, $emailBody, $headers);
    
    if ($mailSent) {
        // Succès
        echo json_encode(["success" => true, "message" => "Votre message a été envoyé avec succès!"]);
    } else {
        // Échec
        echo json_encode(["success" => false, "message" => "Une erreur est survenue lors de l'envoi du message."]);
    }
} else {
    // Données manquantes
    echo json_encode(["success" => false, "message" => "Veuillez remplir tous les champs du formulaire."]);
}
?>
```

## Ressources Utiles

- [Documentation de React](https://reactjs.org/docs/getting-started.html)
- [Documentation de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation PHP](https://www.php.net/docs.php)

## Support

Si vous rencontrez des problèmes ou avez des questions, n'hésitez pas à consulter la documentation ou à contacter votre développeur.
