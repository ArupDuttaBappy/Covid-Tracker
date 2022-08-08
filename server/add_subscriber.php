<?php

$conn = mysqli_connect("localhost", "root", "", "covid-tracker");

if($conn === false){
    die("ERROR: Could not connect. ". mysqli_connect_error());
}

$first_name =  $_REQUEST['first_name'];
$last_name = $_REQUEST['last_name'];
$email =  $_REQUEST['email'];
$country_name = $_REQUEST['country_name'];
$daily_weekly = $_REQUEST['daily_weekly'];

$sqlquery = "INSERT INTO `subscribers` (`first_name`, `last_name`, `email`, `country_name`, `daily_weekly`) VALUES ('$first_name', '$last_name', '$email', '$country_name', '$daily_weekly')";

if(mysqli_query($conn, $sqlquery))
{
    echo "Subscriber added successfully.";
}
else
{
    echo "ERROR: $sqlquery. ". mysqli_error($conn);
}

mysqli_close($conn);

?>
