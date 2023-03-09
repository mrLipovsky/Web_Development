<?PHP 

class Signer implements ISigner{

    private mysqli $connection;
    private const TABLE_NAME = "Users";
    private Crypt $crypt;

    public function __construct(mysqli $conn)
    {
        $this -> connection = $conn;
        $this -> crypt = new Crypt();
    }
public function add_user(string $username, $string $password, string)
{
    if($password === $confirmPassword)
    {

    }
}

public function update_user(string $username, string $newPassword, string $confirmNewPassword,)
    {
        if($newPassword)
    }

}


?>