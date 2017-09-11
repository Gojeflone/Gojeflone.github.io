<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = 'jgouveia@udel.edu';

$body = "From: $name\n E-mail: $email\n Message: \n $message";

if($_POST['submit']) {
	if(mail ($to,$subject,$body)) {
	echo '<p>Your message has been sent!</p>';
} else {
	echo '<p>You are missing something! Try again </p>';
}
}

?>