
<?php
// Configure headers for CORS if needed
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Get form data
$data = json_decode(file_get_contents("php://input"), true);

// Check if data exists
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
    
    // Email destination
    $to = "contact@semaprev.fr";
    
    // Email subject
    $emailSubject = "Nouveau message de $name: $subject";
    
    // Email body
    $emailBody = "Nom: $name\n";
    $emailBody .= "Email: $email\n\n";
    $emailBody .= "Message:\n$message";
    
    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Send email
    $mailSent = mail($to, $emailSubject, $emailBody, $headers);
    
    // Store form submission in database (optional)
    // This is where you would add database connection code
    // Example:
    /*
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "semaprev";
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    // Check connection
    if ($conn->connect_error) {
        echo json_encode(["success" => false, "message" => "Database connection failed"]);
        exit();
    }
    
    // Prepare and execute SQL query
    $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, subject, message, submission_date) VALUES (?, ?, ?, ?, NOW())");
    $stmt->bind_param("ssss", $name, $email, $subject, $message);
    $dbSuccess = $stmt->execute();
    
    $conn->close();
    */
    
    if ($mailSent) {
        // Success
        echo json_encode(["success" => true, "message" => "Votre message a été envoyé avec succès!"]);
    } else {
        // Failure
        echo json_encode(["success" => false, "message" => "Une erreur est survenue lors de l'envoi du message."]);
    }
} else {
    // Missing data
    echo json_encode(["success" => false, "message" => "Veuillez remplir tous les champs du formulaire."]);
}
?>
