<?php
require dirname(__FILE__) . "/db.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>USERS</h1>
    <form id="" method="POST" action="./add_user.php">
    Meno: <input name="name" type="text" required/>  <br>  
    Email: <input name="email" type="Email"/>  <br>  
    Vek: <input name="age" type="number"/>  <br>  
    Stat: <input name="country" type="text"/>  <br>  
    <button type="submit" name="submit">Vlozit uzivatele</button>
    </form>


    <?PHP
    $sql = $connection->prepare('SELECT * FROM users');
    $sql -> execute();

    $result = $sql->get_result();

    while($row = $result->fetch_assoc()){
            echo "id:" . $row["Id"] . ", Name:" . $row["Name"] . "<br/>";
        }
    
    $connection->close();
    ?>
</body>
</html>

