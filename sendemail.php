<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $prenom = strip_tags(trim($_POST["prenom"]));
    $nom = strip_tags(trim($_POST["nom"]));
    $message = strip_tags(trim($_POST["message"]));

    // Vérifiez ici si les champs sont remplis (validation)
    // ...

    // Adresse email de destination
    $to = "contact@sitewebdurance.com";

    // Sujet de l'email
    $subject = "Message de $prenom $nom";

    // Corps de l'email
    $email_content = "Prénom: $prenom\n";
    $email_content .= "Nom: $nom\n\n";
    $email_content .= "Message:\n$message\n";

    // Headers de l'email
    $email_headers = "From: $prenom $nom";

    // Envoi de l'email
    mail($to, $subject, $email_content, $email_headers);

    // Redirection vers une page de confirmation
    header("Location: merci.html");
} else {
    // Redirection vers la page du formulaire en cas d'accès direct au script
    header("Location: contact.html");
    exit;
}
?>
