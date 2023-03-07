<?PHP 

require_once("./db/db.php");
require_once("./dal/repository.php");
require_once("./model/User.php");

$repo = new Repository($connection, "Users");

// $input = array("Username" => "PeterLipo", "Password" => "ssjhjjs", "FirstName" => "Peter", "LastName"=> "Lipo");
// $newUserId = $repo -> create($input);

// var_dump( $repo -> retrieve("Id = 1"));

// $input = array("FirstName" => "Martin");
// $podminka = "Id = 1";

// $repo -> update($input, $podminka);

// $input = "Id = 2";
// $repo -> delete($input);

$res = $repo -> get_user("PeterLipo");

var_dump($res);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>


    
</body>
</html>