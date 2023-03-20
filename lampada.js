const turnOn = document.getElementById('btnOn');
const turnOff = document.getElementById('btnOff');
const bulb = document.getElementById('bulb');

function isBulbBroken() {
    return bulb.src.indexOf('quebrada') > -1;
}

function bulbOn () {
    if(!isBulbBroken()){
        bulb.src = './img/ligada.jpg';
    }
    
}

function bulbOff () {
    if(!isBulbBroken()){
        bulb.src = './img/apagada.jpg';
    }
}

function bulbBroken () {
    bulb.src = './img/quebrada.jpg';
}

turnOn.addEventListener('click', bulbOn);
turnOff.addEventListener('click', bulbOff);

bulb.addEventListener('mouseover', bulbOn);
bulb.addEventListener('mouseout', bulbOff);
bulb.addEventListener('dblclick', bulbBroken)