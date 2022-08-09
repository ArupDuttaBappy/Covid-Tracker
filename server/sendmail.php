<?php

$result = mysqli_query(mysqli_connect("localhost", "root", "", "covid-tracker"), "SELECT `first_name`, `last_name`, `email`, `country_name`, `daily_weekly` FROM `subscribers` WHERE 1");
$first_name_list = array();
$last_name_list = array();
$email_list = array();
$country_name_list = array();
$newsletter_frequency_list = array();

while($row = mysqli_fetch_assoc($result)) {
	$first_name_list[] = $row['first_name'];
	$last_name_list[] = $row['last_name'];
	$email_list[] = $row['email'];
	$country_name_list[] = $row['country_name'];
	$newsletter_frequency_list[] = $row['daily_weekly'];
}

for($i = 0; $i < count($email_list); $i++) {
  $to = $email_list[$i];
  $subject = 'Covid-Tracker Newsletter';

  // $message = file_get_contents("email-template.html");
	$message = "Hello " . $first_name_list[$i] . " " . $last_name_list[$i] . ",\n";
	$message .= "This mail is part of the regular newsletter from Covid-Tracker.\n";
	$message .= "For more information, visit Covid-Tracker.\n";
	$message .= "Have a nice day!\n";


  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers = 'From:ad.bappy10@gmail.com' . "\r\n";

	if(mail($to, $subject, $message, $headers)) {
		echo "success";
	}
	else {
		echo "failed";
	}
}

?>
