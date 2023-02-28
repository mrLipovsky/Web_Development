<?php

require dirname(__FILE__) . "/helpers/check_logged_user.php"
?>

<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>prihlasit</title>
</head>

<body>
    <h1>Prihlasit sa</h1>
    <form method="post" action="./helpers/check_login.php">
        Uzivatelske meno: <input name='username'>
        <input type="checkbox" name="rememberMe"> Zapapatovat si mne <br>
        <button type="submit" name="submit">Prihlasit</button>
    </form>
</body>

</html>
