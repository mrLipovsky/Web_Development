//UKOL 
var sprava = document.getElementById('message');
var pole = document.getElementsByTagName('input');
var tlacitko = document.getElementsByTagName('button');


function checkAge(object){
    if(object.value < 18){
        object.style.border = '1px red solid';
        sprava.innerHTML = 'Neni vam vice nez 18';
    }
    else {
        object.style.boarder = '1px green solid';
        sprava.innerHTML = 'je vam viac ako 18';
    }
}

tlacitko.addEventListener('click', function(){
    checkAge(pole);
});

var element = document.getElementById('text');

function show(){
    element.style.visibility = 'visible';
}


function hide(){
    element.style.visibility = 'hidden';
}

var pocitac = ['name', 'power', 'jeLaptop'];
var o = new{
    name: 'Alexey'
};

var date = new Date();

class Pocitac {
    constructor(name, perfomance, brand, monitor){
        this.Jmeno = name;
        this.perfomance = perfomance;
        this.brand = brand;
        this.monitor = monitor;
    }

    ProvideInfo()
    {
        return `Jmeno: $(this.Jmeno), perfomance: $(this.perfomance), brand: $(this.brand), monitor: $(this.monitor)`;
    }

    static GetInfo(){
        return 'to je trida';
    }

}

var poc = new Pocitac('Dell x2', 1223333, 'Dell', 17)
var inf = Pocitac.GetInfo();

var pocName = poc.Jmeno;

var info = poc.ProvideInfo();
console.log(info);

class Zvize {
    Kricet(krik){
        return krik;
    }
}

class Kocka extends Zvize{
    Mnaukat(mnau){
        return mnau;
    }
}

class Clovek{
    constructor(jmeno, vek){
        this.Jmeno = jmeno,
        this.Vek = vek;
    }
    Mluvit(){
        return "Ja mluvim"
    }
}

class Spravce extends Clovek{
    constructor(barva, jmeno, vek){
        super(jmeno, vek);
        this.barvaKravaty = barva;
    }
    get GetBarvaKravaty(){
        return this.barvaKravaty;
    }
    set SetBarvaKravaty(){
        this.barvaKravaty = barva;
    }
    Spravovat(){

    }
}

class SpravceHenry extends Spravce{
    DelaNeco(){
        
    }
}

var kocka = new Kocka();
kocka.

//LESON 
// var element = document.getElementById('animate')
// var container = element.parentNode;
// var animate = element.childNodes[0];
// var tlac = container.nextSibling;
// var cont = container.previousSibling;

// var doc = document;
// var bod = document.body;
// var docelem = document.documentElement;

// var step = 1;
// document.onload = setInterval(function(){
//     var currentOffset = element.offsetLeft;
//     if (currentOffset <= 350){
//         element.style.left = ( currentOffset + step)+ "px";
//     }
// }, 25);

// var tlacitko = document.getElementById('tlacitko');

// function buttonClick(){
//     window.alert('Ok');
// }

// function buttonClickLog(){
// console.log('hello word');
// }

// tlacitko.addEventListener('click', function(){
//     buttonClick('clicked');
// }, false);

// tlacitko.addEventListener('click', buttonClickLog, false);

// tlacitko.addEventListener('click', buttonClickLog);
