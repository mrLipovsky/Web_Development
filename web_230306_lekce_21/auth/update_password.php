<?PHP

if(isset($_POST("submit")))
{
$username = $_POST["username"];
$password = $_POST["password"];
$confirmPassword = $_POST["confirmPassword"];
if(isset($username)&&isset($password)&&isset($confirmPassword)&&
!isset($username)&& !isset($password)&& !isset($confirmPassword)){
    $signer = new Signer($connection);
    $signer -> update_user($username, $password, $confirmPassword);
    header("Location: login.php")
}


}


?>