// NUMBERS

let number1 = 2.95555;

console.log(number1);

let number2 = number1.toPrecision(3);

console.log(number2);

let number3 = number1.toFixed(2);

console.log(number3);

let numberTostring = number1.toString()

console.log(numberTostring)

let intValue = parseInt(number1);

console.log(intValue)

// STRINGS

let str = "abcdf";
console.log("dlzka retazca je: " + str.length);

let strToUpperCase = "abcdf";
console.log("Vsetky pismena retazca velke: " + strToUpperCase.toUpperCase());
console.log("Vsetky pismena retazca velke: " + strToUpperCase.toLowerCase());
console.log("Vsetky najdi: " + strToUpperCase.search('e'));
console.log(str.search('e'));
console.log(str.slice(3));

let str2 = 'it is what it is';
let words =  str2.split(' ');
console.log(words)

let replaced = str2.replace('is', 'iz');
console.log(replaced);