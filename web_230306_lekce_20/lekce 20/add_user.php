<?PHP
require dirname(__FILE__) . "/db.php";
// CREATE TABLE Persons (
//     Personid int NOT NULL AUTO_INCREMENT,
//     LastName varchar(255) NOT NULL,
//     FirstName varchar(255),
//     Age int,
//     PRIMARY KEY (Personid)
// );
if(isset($_POST['submit'])){
 
    $sql = $connection->prepare('INSERT INTO users (Name, Country, Age, Email) VALUES (?,?,?,?)');
    $sql->bind_param("ssis", $_POST['name'],$_POST['country'],$_POST['age'],$_POST['email'] );

    $sql->execute();

    header('Location: ../index.php');
}









?>