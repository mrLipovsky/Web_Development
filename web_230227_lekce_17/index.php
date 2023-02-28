<?php
session_start();

require dirname(__FILE__) . "/helpers/check_session.php"

?>

<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hlavni obsah</title>
</head>

<body>
    <h1>
        Hlavni stranka
    </h1>
    <p>uzivatel(Cookies) <?php echo $_COOKIE['username']; ?></p>
    <p>uzivatel(Session) <?php echo $_SESSION['username']; ?></p>
    <form action="./helpers/logout.php"> method="post"> 
        <button type="">
    </form>
    

</body>

</html>