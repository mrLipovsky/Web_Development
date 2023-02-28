<!DOCTYPE html>
<?php

// session_start();

if(!isset($_SESSION['username'])) {

    header("Location: ./login.php");
    
    $_SESSION["success"] = "You are now logged in";
    
    }


?>