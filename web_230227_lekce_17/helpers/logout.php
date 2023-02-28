<?php
session_start();

if(isset($_POST['submit'])) {
    setcookie('username', '', time() -1, '/');
    unset($_COOKIE['username']);

    header('Location: ../login.php');
}






























?>