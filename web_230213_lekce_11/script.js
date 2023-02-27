var operationExists = false;
var displayingResult = false;

function addNum(pressedNumber) {

    if(displayingResult) {
        document.getElementById("display").value = "";
        displayingResult = false;
    } 

    document.getElementById("display").value += pressedNumber;
    
    if(operationExists) {
        setOperationsDisableValue(false);
    }
}

function sum(){
    document.getElementById("display").value += " + ";
    setOperationsDisableValue(true); 
    operationExists = true;
}

function substrack(){
    document.getElementById("display").value += " - ";
    setOperationsDisableValue(true); 
    operationExists = true;

}

function multiple(){
    document.getElementById("display").value += " * ";
    setOperationsDisableValue(true); 
    operationExists = true;

}

function divide(){
    document.getElementById("display").value += " / ";
    setOperationsDisableValue(true); 
    operationExists = true;

}

function setOperationsDisableValue(value){
    Array.from(document.getElementsByClassName("operation")).forEach(
    (button) => {
    button.disabled = value;
    });
}

function showResult() {
    const displayTest = document.getElementById("display").value;
    const operators = displayTest.split(" ");

    let result = 0;

    const num1 = parseInt(operators[0]);
    const num2 = parseInt(operators[2]);

switch (operators[1]) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    };

    operationExists = false;
    displayingResult = true;
    document.getElementById("display").value = result;
};

function createCustomElements() {
    const text = document.createElement("p");
    text.innerText = "blabla";
    text.id = "sampleText";

    const anchor = document.createElement("a");
    anchor.href = "http://www.google.com";
    anchor.innerText = "Google";
    anchor.id = "sampleAnchor";

    //vlozisa do koniec body
    document.body.appendChild(text);

    //vlozi sa do main
    const main = document.getElementsByTagName("main")[0];
    main.appendChild(anchor);
}

function removeCustomElements() {
    document.getElementById("sampleText").remove();
    document.getElementById("sampleAnchor").remove();
}

function replaceCustomElements() {
    const text = document.createElement("p");
    text.innerText = "Strejda Marta mi vygeneroval JS";

    const actualText = document.getElementById("sampleText")

    document.body.replaceChild(text, actualText);
}