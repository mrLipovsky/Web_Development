<?php

class CustomIterator implements Iterator{

    private $position;

    private $array = array("prvy", "druhy", "treti");

    public function __construct()
    {
        $this -> position = 0;
    }

    public function rewind(){
        echo "rewind -> ";
        $this -> position = 0;
    }

    public function current() {
        echo "current -> ";
        return $this->array[$this -> position];
    }

    public function key() {
        echo "key -> ";
        return $this -> position;
    }

    public function valid(){
        echo "valid -> ";
        return isset($this -> array[$this -> position]);
    }

    public function next() {
        echo "next -> ";
        ++ $this -> position;
    }
}

$it = new CustomIterator();

foreach ($it as $key => $value){
    echo "$key, $value<br>";
    echo "\n";
}


?>