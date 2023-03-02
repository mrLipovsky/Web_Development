<?php 

// overit Constructor property promotion in PHP 8

class Product{
    public string $name;
    public string $description;
    public int $price;


    public function __construct($name, $description, $price){
        $this -> name = $name;
        $this -> description = $description;
        $this -> price = $price;
    }

    public function name() {
        echo $this -> name;
    }

    public function description() {
        echo "Description is ".$this -> description;
    }

    public function price() {
        echo "The Price is ".$this -> price;
    }

}

class Product1 extends Product {
    public function name() {
        echo $this -> name;
    }
}

class Product2 extends Product {

    public function name(){
        $this -> name;
    }
}

$produkt = new Product1("telefon", "pekny", 34);
echo $product->name();


$produktx = new Product2("NovyTelefon", "pekny", 34);
echo $productx->name();

?>