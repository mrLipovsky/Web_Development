<?PHP 
session_start();

require_once(__DIR__.'/dal/Repository.php');
require_once(__DIR__.'/db/db.php');
require_once(__DIR__.'/model/User.php');
require_once(__DIR__.'/dal/UsersRepository.php');
require_once(__DIR__.'/dal/GroupRepository.php');
require_once(__DIR__.'/dal/ItemRepository.php');
require_once(__DIR__.'/model/Group.php');
require_once(__DIR__.'/auth/crypt.php');
require_once(__DIR__.'/auth/auth.php');
require_once(__DIR__.'/auth/login.php');

$auth = new Auth($connection);

if(!isset($_SESSION["email"]))
{
    header("Location: auth/login.php");
}

if(!$auth -> check_user($_SESSION["name"], $_SESSION["heslo"]))
{
    header("Location: auth/login.php");
}
// ssjhjjs

// $repo = new ItemRepository($connection);
$crypt = new Crypt();

// $input = array("Username" => "PeterLipo", "Password" => "ssjhjjs", "FirstName" => "Peter", "LastName"=> "Lipo");
// $newUserId = $repo -> create($input);

// var_dump( $repo -> retrieve("Id = 1"));

// $input = array("FirstName" => "Martin");
// $podminka = "Id = 1";

// $repo -> update($input, $podminka);

// $input = "Id = 2";
// $repo -> delete($input);

// $res = $repo -> get_Items_by_group("PeterLipo");

// var_dump($res);

// echo $crypt -> encrypt("ssjhjjs");




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