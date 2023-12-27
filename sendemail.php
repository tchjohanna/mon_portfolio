<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $prenom = strip_tags(trim($_POST["prenom"]));
    $nom = strip_tags(trim($_POST["nom"]));
    $message = strip_tags(trim($_POST["message"]));

    // Vérification si les champs sont remplis (validation)
    if (empty($prenom) || empty($nom) || empty($message)) {
        echo "Erreur : Veuillez remplir tous les champs du formulaire.";
        exit;
    }

    // Adresse e-mail de destination
    $to = "tchjohanna@gmail.com"; 

    // Sujet de l'e-mail
    $subject = "Nouveau message de $prenom $nom";

    // Corps de l'e-mail
    $email_content = "Prénom: $prenom\n";
    $email_content .= "Nom: $nom\n\n";
    $email_content .= "Message:\n$message\n";

    // En-têtes de l'e-mail
    $email_headers = "From: $prenom $nom";

    // Envoi de l'e-mail
    if (mail($to, $subject, $email_content, $email_headers)) {
        echo "Votre message a été envoyé avec succès. Nous vous répondrons bientôt.";
    } else {
        echo "Erreur lors de l'envoi de votre message. Veuillez réessayer plus tard.";
    }
} else {
    echo "Accès direct non autorisé.";
}
?>
