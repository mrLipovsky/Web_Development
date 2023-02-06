function sum() {
    //dostat dve cisla z inputu 
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    
    //spocitat cisla a ulozit do nove premenne
    let result = num1 + num2;

    //zobrazit vysledok na webu 
    document.getElementById('result').innerText = result;
}   

function substract(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    
    let result = num1 - num2;

    document.getElementById('result').innerText = result;
}

function multiply(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    
    let result = num1 * num2;

    document.getElementById('result').innerText = result;
}

function repairAndRevertSentence() {
    let sentence = 'Myslis si, ze risk je risk';
    let words = sentence.split(' ');
    console.log(words);
    words[5] = 'zisk';
    words = words.reverse();
    let reverseSentence = words.join(' ');

    console.log(words);
    console.log(reverseSentence);
}