function validateForm(form) 
{
    var inputs = [...form.getElementsByTagName("input")];
    var required = inputs.filter(element => element.hasAttribute("required"));
    var email = inputs.filter(element => element.getAttribute("name") === "email");
    var password = inputs.filter(element => element.getAttribute("name") === "password");
    var result = validateRequired(required) && validateEmail(email) && validatePassword(password);
    console.log(result);
    return result;
}

//validate required
function validateRequired(requiredElements){
    var result = true;
    requiredElements.forEach(element => {
        if(element.value == "" || element == null || element == undefined){
            result = false;
        }
    });

    return result;
}

//validate email
function validateEmail(email){
    // contains @ 
    if(!(email.value.includes("@"))){
        console.log("Email does not contains @.");
        return false;
    }

    // contains dot
    if(!(email.value.includes("."))){
        console.log("Email does not contains dot.");
        return false;
    }

    // contains dot before @
    if(!(email.value.indexOf("@") < email.value.indexOf("."))){
        console.log("Email does contains dot befire @.");
        return false;
    }

    // email start with @
    if(email.value.indexOf("@") > 0 ){
        console.log("Email does contains @ on first possition.");
        return false;
    }

    // dot is not on the end
    if(!(email.value.indexOf(".") < email.value.lenght - 1)){
        console.log("Email does containsdot on last possition.");
        return false;
    }
    console.log('Email is Ok')
    return true;
}

//validate password
function validatePassword(passsword){

    const capitals = "ABCDEFGHIJKLMNOPRSTUVWQXYZ"
    const numbers = "1234567890"
    const specials = "!@#$%^&*()"

    //validate lenght
    if(!(passsword.value.lenght >= 16 && element.value.lenght < 100)){
        console.log("password is not lenght enought");
        return false;
    }

    //check for capitals
    if(!element.value.split("").some((letter) => capitals.includes(letter))){
        console.log("password does not containc capitals");
        return false;
    }

    //check for numbers
    if(!element.value.split("").some((letter) => numbers.includes(letter))){
        console.log("password does not containc numbers");
        return false;
    }

    //check for characters
    if(!element.value.split("").some((letter) => specials.includes(letter))){
        console.log("password does not containc character");
        return false;
    }


    return true;
}

function validatePasswordAdvanced(passsword){
    const pattern =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(passsword.value);

}

var tlacitko = document.getElementsByTagName("button")[0];
tlacitko.style.color = "red";
tlacitko.style.background = "black";
tlacitko.onclick = buttonClick;

function buttonClick(){
    window.alert('hellow word');
}

function buttonMouseDown(div){
    div.style.backgroundColour = 'red';
}

function buttonMouseUp(div){
    div.style.backgroundColour = 'blue';

}

function buttonMouseMove(div){
    div.style.backgroundColour = 'green';
}

function buttonMouseOut(div){
    div.style.backgroundColour = 'black';
}

//elements udalosti
function elementFocus(object){
    object.style.transform = 'scale(1.2)';
}

function elementLostFocus(object){
    object.style.transform = 'scale(1)';
}

function elementSelect(object){
    console.log(object.value);
}

function elementInput(object, event){
    console.log('vybrany text je:' + 
    object.value.substring(event.target.selectionStart,
        event.target.selectionEnd));
}
const lorem = 'Lorem Ipsum'
var loremArr = lorem.split(" ");
var res = dokument.getElementsById('serach-result');

function elementSearch(object){
    var isNotFound = true;
    res.innerHTML = '';
    var delimiter = object.value.toLowerCase();

    if(delimiter === ''){
        return;
    }

    lowerArr.forEach(word => {
        if(word.toLowerCase().includes(delimiter)){
        var wordParts = word.toLowerCase().split(delimiter);
        var resWord = wordParts.join(`<br>$(delimiter)</br>`);
        res.innerHTML += `$(resWord)<br>`;
        isNotFound = false;
        }
    });

    if(isNotFound){
        res.innerHTML += `Not found: $(delimiter)<br>`;
    }
}