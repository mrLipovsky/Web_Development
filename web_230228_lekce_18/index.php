<?php


// function add_data($data)
// {

//     try {
//         create($);
//     } catch (Exception $e) {
//         echo 'dotaz neni specifikovany.'.$e -> getcode().' '.$e -> getMessage();
//     } finally {
//         echo "First finally.\n";
//     }
// }

// function crete($query) 
// {
//     if(isset($query)) {
//         throw new Exception('Dotaz nebol specifikovany');

//         // $database = # spojovaci retazec;
//         // $database -> # insert($query);
//         // $database -> # close()
//     }
//     return true;
// }

class Pocitac {

    public $cena;
    public $vykon;
    protected $specifikace;
    private  $velikost;

    function __construct($price, $performance, $specification, $size)
    {
        $this -> cena = $price;      
        $this -> vykon = $performance;  
        $this -> specifikace = $specification;  
        $this -> velikost = $size;    
    }

    function __destruct()
    {
        $this -> vypnout();
        echo "Computer price is {$this->cena} and the performace is {$this->vykon}.";
    }

    #gettery a settery
    public function get_cena()
    {
        return $this -> cena;
    }

    public function set_cena($price){
        return $this -> cena = $price;
    }

    public function get_vykon()
    {
        return $this -> vykon;
    }

    public function set_vykon($performance){
        return $this -> vykon = $performance;
    }

    public function zapnout()
    {
        $this -> overeni_slozek();
        $this -> nahravani_os();
        $this -> provedeni_startovacich_akci();
    }

    public function vypnout()
    {
        return $this->cena;

    }

    private function overeni_slozek()
    {
        echo 'Slozky jsou overene';
        echo "<br>";
    }

    private function nahravani_os()
    {
        echo "Operacni system nahral os";
        echo "<br>";
    }

    private function provedeni_startovacich_akci()
    {
        #kod
    }
}

$poc = new Pocitac(3000, 6345.566, 'ModelRokBrand', 5);
if($poc instanceof Pocitac)
{
    $poc -> zapnout();
}

echo $poc -> zapnout();
echo "<br>";

?>