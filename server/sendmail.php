<?php

$result = mysqli_query(mysqli_connect("localhost", "root", "", "test"), "SELECT `name`, `email` FROM `newsletter`");
$emails = array();
$names = array();

while($row = mysqli_fetch_assoc($result)) {
	$names[] = $row['name'];
	$emails[]=$row['email'];
}

for($i = 0; $i < count($emails); $i++) {
  $to = $emails[$i];
  $subject = 'Covid-Tracker Daily Stats';
  $message = file_get_contents("email-template.html");

  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'From: ad.bappy10@gmail.com' . "\r\n";

  mail($to, $subject, $message, $headers);
}

?>
