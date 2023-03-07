<?php
$host = "localhost";
$username = "web_user";
$password = "heslo";
$database = 'lekce20';

$connection = new mysqli($host, $username, $password, $database);

if($connection->connect_error){
    die('Connection failed successfully' . $connection->connect_error);
}

echo "conection OK"

// $userId = $_REQUEST[]








?>