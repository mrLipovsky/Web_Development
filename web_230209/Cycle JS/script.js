// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }


// for (let index = 0; index < 5; index++) {
//     document.write(`iterace c. ${index}`);
//     index += 5;
// };


// for (;;) {
//     document.write(`iterace c. ${index}`);
//     if(Date.getDaty() == 5){

//     }
// };

var arr = [1, 2, 3, 4, 5];

// for (let index = 0; arr.length; index++) {  
//     const element = arr[index];
//     if( element == 3){
//         break;
//     }
//     console.log(element);
// };

// var a3 = 1;

// for (let i = 0; i < cars.length; i++) {
//     document.write(text += cars[i] + "<br>");
// };

// for (key in object) {

// }

// var object1 = {
//     name : "Peter",
//     surname : "lipovsky",
//     vek : 35,
//     dob : new Date(1997, 8, 29),
// }

// var result;
// for (const key in object1) {
//     result += `$(object1[key]), `;
// }

// console.log(result);

// for (const iterator of arr) {
//     console.log(iterator);
// }

//WHILE LOOP

// while (condition) {
//     //blok kodu 
// }

// while (Date.getDay() == 5) {
//     console.log('nastala sobota');
//     break;
// }

// var klic = 0;

// while (klic > 10) {
//     console.log(klic);

//     klic++;
//     if(klic % 2 == 0){
//         //
//     }
// }


// var klic = 0;

// while (1 == 2) {
//     if(klic < 0){
//         console.log(klic);
//     }
//     klic++;
// }


//DO LOOP

// do {
//     if(klic < 0){
//         console.log(klic);
//     }
//     klic++;
// } while (condition);

//FOR LOOP

function logEvent(array)
{
    for (let index = 0; index < array.length; index++) {
        if (array[index] == 3)
        {
            return array[index];
            brake;
        }
    }

    console.log(result);
    return result;
}

function logEventOne(array)
{
    for (let index = 0; index < array.length; index++) {
        if (index == 3)
        {
            continue;
        }
        console.log(result);
    }
    return result;
}

// FOR EACH

arr.forEach((function(number){
    console.log(number);
}));

arr.forEach(element => {
    console.log(element);
});