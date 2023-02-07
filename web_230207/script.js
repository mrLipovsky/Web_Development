// var a = 1;
// var b = 2;

// var c = a == b;

// // === - pouzivat stale len toto 

// function helloWorld(name, surname )
// {
//     document.write('Hi ' + name + ' ' + surname + "<br>");
//     console.log('Hello world')
// };

// helloWorld('Peter', 'Smith');
// helloWorld('Juro', 'Lipo');

// // retur in function

// function inputYourName(name, surname )
// {
//     return 'Hi ' + name + ' ' + surname + "<br>";
// };

// var nameSurname = inputYourName('Peter', 'Smith');

// document.write(nameSurname)

// // operator IF
// function inputYourName(name, surname )
// {
//         // mozeme pouzit switch 
//     switch (name) {
//         case name1:
//             return "name1";

//         case name2:
//             return "name1";

//         default:
//             break;
//     }

//     if(name === surname)
//     {
//         return "Chyba"
//     }
//     if(surname == '')
//     {
//         return 'Hi ' + name + ' ' + surname + "<br>";
//     }
//         return 'Hi ' + name + ' ' + surname + "<br>";

// };

// var nameSurname = inputYourName('Peter', 'Pet');

// document.write(nameSurname)

var a = 1.0345;

document.write(a.toString() + '<br>');
document.write(a.toExponential(5) + '<br>');
document.write(a.toFixed(5) + '<br>');
document.write(a.toPrecision(5) + '<br>')

var b = 'text';
var polozka = b[0];
var polozka1 = b[b.length - 1];
document.write(polozka);
document.write(polozka1);


var c = b.toUpperCase();
document.write(c + '<br>');

var d = c.toLowerCase();
document.write(d + '<br>');

var e = d.charAt(0);
document.write(e + '<br>');

var f = d.indexOf('e');
document.write(f + '<br>');

var g = d.slice(1, 3);
document.write(g + '<br>');

var h = ' texts ';
var i = h.trim();
document.write(i + '<br>');

var j = h.split('x');

document.write(j[0] + '<br>')
document.write(j[1] + '<br>')

var k = h.replace('text', 'animal');
document.write(k + '<br>');

var name = 'adam'
var surname = 'lipo'

var l = `Ahoj, ${name} ${surname} <br>` ;
document.write(l + '<br>');

let myArray = [];
let myArrayOfData = ["red", "blue", "green"];

var names = ['Peter','Juro','Martin'];
names.push('Pavol');
var deleteLastName = names.pop();
var reverse = names.reverse();

console.log(names);
console.log(deleteLastName);

var adam = names[0].split('');
console.log(adam);
var adamText = adam.join('');
console.log(adamText);

var m = adamText.indexOf('y');
console.log(m);

var a1 = adam.shift();
console.log(adam);
console.log(a1);

var result = names.concat(adam);
console.log(result);

document.write('Peter');

var year = 2023;
var month = 2;
var day = 1;
var hour = 6;
var min = 33;
var sec = 33;
var milSec = 444;

var date = new Date(year, month, day, hour, min, sec, milSec);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());
console.log(date.getDay());
console.log(date.toString());
console.log(date.toUTCString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());



