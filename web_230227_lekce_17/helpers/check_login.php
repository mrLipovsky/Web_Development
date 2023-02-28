<?php

session_start();

if (isset($_POST["submit"])) {
    $userName = $_POST["username"];
    $sanitizedUserName = filter_var($userName, FILTER_SANITIZE_STRING);

    if(!empty($userName) && isset($userName)) {

        if(!empty($_POST['rememberMe'])){
            setcookie("username", $userName, time() + (86400*10), '/' );
        }

        $_SESSION['username'] = $userName;
        header("Location: ../index.php");    
    } else {
        header("Location: ../login.php");
    }
} else {
    header("Location: ../login.php");
}

?>