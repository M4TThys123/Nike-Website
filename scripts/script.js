// JavaScript Document
var hambutton = document.querySelector('nav button');
var list = document.querySelector('aside ul');

hambutton.addEventListener('click', toonMenu);

function toonMenu() {
    list.classList.toggle('show');
}


// Animatie en getal
var WinkelmandjeKnop = document.querySelectorAll("#winkel_wagen");


WinkelmandjeKnop[0].addEventListener("click", updateWinkelmandje);
WinkelmandjeKnop[1].addEventListener("click", updateWinkelmandje);
WinkelmandjeKnop[2].addEventListener("click", updateWinkelmandje);
WinkelmandjeKnop[3].addEventListener("click", updateWinkelmandje);

function updateWinkelmandje() {
    let winkelMandje = document.querySelector(".winkel_mandje");
    let WinkelmandjeAantal = document.querySelector("#aantal");
    let momenteelAantal = WinkelmandjeAantal.innerHTML;

    momenteelAantal = parseInt(momenteelAantal);

    let newAantal = momenteelAantal + 1;

    WinkelmandjeAantal.innerHTML = newAantal;

    winkelMandje.classList.add("updated");
    winkelMandje.addEventListener("animationend", function(event){
    winkelMandje.classList.remove("updated");
  }, { once: true });
}

// Kleur kiezen
var rodeSchoen = document.querySelector('#Rode_schoen');
var blauweSchoen = document.querySelector('#Blauwe_schoen');
var rodeAfbeeldingen = document.querySelector('.schoen1_afb');
var blauweAfbeeldingen = document.querySelector('.schoen2_afb');

rodeSchoen.addEventListener('click', wordRood);
blauweSchoen.addEventListener('click', wordBlauw);

function wordRood() {
    list.classList.toggle('show');
    rodeSchoen.classList.toggle('.border');
}

function wordBlauw() {
    list.classList.toggle('show');
}
