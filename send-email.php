<?php

if (isset($_POST["submit"])) {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $address = $_POST["address"];
    $message = $_POST["message"];

    $lineBreak = "\n";
    $lineHtml = "<br>";

    $html = "<p style='color=#000;'><b>This is a self-generated message from the Contact Us form.</b></p>" . $lineHtml . "<p style='color=#000;'>" . "<b>Name: </b>" . $name . "</p>" . "<p style='color=#000;'>" . "<b>Email: </b>" . $email . "</p>" . "<p style='color=#000;'>" . "<b>Address: </b>" . $address . "</p>" . "<p style='color=#000;'>" . "<b>Phone: </b>" . $phone . "</p>" . "<p style='color=#000;'>" . "<b>Message: </b>" . $message . "</p>"
        . $lineHtml . "<p style='color=#000;'>Regards,</p>" . "<p style='color=#000;'><b>Alliance Processors Inc. Website</b></p>";

    $text = "This is a self-generated message from the Contact Us form." . $lineBreak . "Name: " . $name . $lineBreak . "Email: " . $email . $lineBreak . "Address: " . $address . $lineBreak . "Phone: " . $phone . $lineBreak . "Message: " . $message . $lineBreak . "Regards," . $lineBreak . "Alliance Processors Inc. Website";


    $to = "sales@accedodigital.com, service@accedodigital.com";
    $from = "website@apifw.com";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From:" . $from;
    $subject = "Alliance Processors Inc. - Website";
    $message = $html;

    $success = mail($to, $subject, $message, $headers);

    if (!$success) {
        // $errorMessage = error_get_last()['message'];
        header("Location: /contact.html?notification=error");
        // die();
        exit;
    }

    // echo "Mail Sent.";
    header("Location: /contact.html?notification=success");
    // die();
    exit;
}
