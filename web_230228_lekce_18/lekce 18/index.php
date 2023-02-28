<?php
namespace RnDDepartement;

use RnDDepartement as RnD;

interface Person{
    public function speak();
    public function walk();
    public function eat();
    public function sleap();
}

interface Student{
    public function study();
    public function learn();
}

interface Teacher{
    public function Teach();
}

abstract class Developer implements Person{
    // public function __construct(
    //     public string $name,
    //     public int $age,
    //     public int $experience,
    // ){}

    public $name;
    public int $age;
    public int $experience;

    public function __construct($name, $age, $experience){
        $this -> name = $name;
        $this -> age =  $age;
        $this -> experience = $experience;
    }
    public function speak() {
        echo "my name is ".$this -> name;
    }

    public function walk() {
        echo "my name is ".$this -> name;
    }

    public function eat() {
        echo "my name is ".$this -> name;
    }

    public function sleap() {
        echo "my name is ".$this -> name;
    }

    abstract public function vyvijet();

    public function intro() {
        echo "The developer is {$this->name} and his age is {$this->age} and expirience is {$this->experience}.";
    }

}

final class JuniorDeveloper extends Developer implements Person, Student  {
    public static $EXPERIENCE_DESCRIPTION = "Skusenost nemoze byt viac ako 3 roky";

    public function vyvijet(){
        echo 'pomaly vyvoj';
    }

    public function study(){
        echo 'pomaly study';
    }

    public function learn(){
        echo 'pomaly learn';
    }

    public function speak(){
        echo 'pomaly speak';
    }

    public static function ReturnExperienceDescription(){
        echo JuniorDeveloper::$EXPERIENCE_DESCRIPTION;
    }

    use Dev1, Dev2;
}


final class SeniorDeveloper extends Developer implements Person, Teacher  {
    const EXPERIENCE_DESCRIPTION = "Skusenost nemoze byt viac ako 3 roky";

    public function vyvijet(){
        echo 'rychly vyvoj';    
    }

    public function study(){
        echo 'study rychlo';    
    }

    public function learn(){
        echo 'rychly learn';
    }

    public function teach(){
        echo 'rychly teach';    
    }

    use Dev1;
}

trait Dev1{
    public function Develop(){
        echo "Develop sw" ;
    }
}

trait Dev2{
    public function Develop(){
        echo "Develop sw analyst" ;
    }
}

echo RnD\JuniorDeveloper::$EXPERIENCE_DESCRIPTION;
echo RnD\JuniorDeveloper::ReturnExperienceDescription();
echo RnD\SeniorDeveloper::EXPERIENCE_DESCRIPTION;
$jun = new JuniorDeveloper("Peter", 34, 2);
$jun -> vyvijet();
$jun -> intro();
$jun -> speak();


$sen = new SeniorDeveloper("Martin", 30, 4);
$sen -> vyvijet();
$sen -> intro();


/////////////////////////


// class Fruit {
//     public $name;
//     public $color;
//     public $weight;

//     function set_name($n) 
//     {  
//     $this->name = $n;
//     }

//     protected function set_color($n) 
//     { 
//     $this->color = $n;
//     }

//     private function set_weight($n) 
//     { 
//     $this->weight = $n;
//     }
// }

// $mango = new Fruit();
// $mango -> set_name('Mango'); 

// class Fruit {
//     public $name;
//     public $color;
//     public function __construct($name, $color) {
//       $this->name = $name;
//       $this->color = $color;
//     }
//     public function intro() {
//       echo "The fruit is {$this->name} and the color is {$this->color}.";
//     }
//   }

//   // Strawberry is inherited from Fruit
//   class Strawberry extends Fruit {
//     public function message() {
//       echo "Am I a fruit or a berry? ";
//     }
//   }
//   $strawberry = new Strawberry("Strawberry", "red");
//   $strawberry->message();
//   $strawberry->intro();

?>