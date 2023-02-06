document.getElementById('demo');

// CONST  - neda sa zmenit konstanta.
const PI = 3.14;

var x = 1; 
console.log(x);

function turnBulbOn(){
    let y = 3;
    console.log(y);
    document.getElementById('bulb').src = './img/bulbon.png';
}

function turnBulbOff(){
    document.getElementById('bulb').src = './img/bulboff.png';
}