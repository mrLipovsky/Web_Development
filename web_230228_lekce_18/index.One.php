<?php 

class Rectangle 
{
    private int $vyska;
    private int $sirka;

    public function __construct($hight, $width)
    {
        $this -> vyska = $hight;      
        $this -> sirka = $width;  
    }

    public function get_vyska()
    {
        return $this -> vyska;
    }

    public function set_vyska($hight){
        return $this -> vyska = $hight;
    }

    public function get_sirka()
    {
        return $this -> sirka;
    }

    public function set_sirka($width){
        return $this -> sirka = $width;
    }

    function __destruct()
    {
        echo "Rectangle hight is {$this->vyska} and the width is {$this->sirka}.";
    }

    public function calculate_area($hight, $width)
    {
        return $this ->  vyska * $this -> sirka;
    }

    public function calculate_perimeter($hight, $width)
    {
        return 2 * ($this -> vyska + $this -> sirka);
    }

    public function is_square()
    {
        return $this -> vyska == $this -> sirka;
        echo "It is a rectangle with the hight {$this->vyska} and the width {$this->sirka}.";
    }

    
$poc = new Rectangle(3, 3);
   echo 'plocha: '.$poc ;

$obdelnik = new Rectangle(4, 3);
    return 
    echo "<br>";

?>