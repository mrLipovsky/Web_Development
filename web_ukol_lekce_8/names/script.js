// Combination of two diferent input text
function combination() {
    let name = String(document.getElementById('name').value);
    let surname = document.getElementById('surname').value;
    
    console.log(name)
    console.log(surname)

    let result = name + " " +surname;
    console.log(result)

    document.getElementById('result').innerText = result;
};


// Replace the string
var sentence = 'Praha Coding School';
var resultReplace = sentence.replace("Coding", 'CODING');

var arr = sentence.split(" ");
arr.reverse();
newstr = arr.join(" ");

document.write(resultReplace + "<br>");
document.write(newstr);

// Reverse Word Order

function reverseWordOrder() {
    let text = document.getElementById('text').value;

    let arr = text.split("");
    arr.reverse();
    console.log(arr)

    resultOne = arr.join("");

    document.getElementById('resultOne').innerText = resultOne;
};

// print event to console

function logEvent(eventNameOne, occuredOne){
    console.log(`Event: &{eventName} ocured on &{ocured}`);
}

logEvent('', date)

// print event to console + if && ||

function logEvent(eventNameOne, occuredOne){
    console.log(`Event: &{eventName} ocured on &{ocured}`);
if( date <= date ){
    console.log('chyba')
}else if( date = date ) {
    console.log('chyba')
}
else {
    console.log('ok')
}
};

logEvent('event name', date)