<?php
$to = 'brentbowles111@yahoo.com' //sendto@example.com
$subject = 'The subject';
$body = 'The email body content';
$headers = array('Content-Type: text/html; charset=UTF-8');


wp_mail( $to, $subject, $body, $headers );
?>