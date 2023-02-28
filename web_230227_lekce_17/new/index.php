<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $x = 100;

    if (!filter_var($x, FILTER_VALIDATE_INT ) === false){
        echo $x . ' je cislo';
    } else {
        echo $x .' ' . ' nie je cislo';
    }

    function getLength($item)
    {
        return strlen($item);
    }
    ?>
    <br>
    <?php

    $y = 'abc';
    $yLength = getLength($y);
    echo $yLenght;
    ?>

    <br>
    <?php
    $fruits = ['aple', 'orange', 'banana'];
    $lenght = array_map('getLength', $fruits);
    print_r($lenghs);

    ?>

    <br>

    <?php

    function exclaim($str)
    {
        return $str . '!';
    }
    
    function ask($str) 
    {
        return $str . '?';
    }
    
    function printFormated($str, $format)
    {
        echo $format($str);
    }

    printFormated('hello world', 'exclaim');
    echo '<br>';
    printFormated('hello world', 'ask');
    ?>

      

    <br>

    <?php

    $users = array("Peter" => 35,"Ben" => 37,"Joe" => 43);
    echo json_encode($users);
    
    ?>
    <br>
    <?php
    $json = '{"Peter":35,"Ben":37,"Joe":43}';
    echo var_dump(json_decode($json));

    $obj = json_decode($json);
    echo $obj -> Peter;
    
    ?>

</body>
</html>