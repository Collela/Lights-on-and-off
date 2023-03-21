const turnOnOff = document.getElementById('btnOnOff');
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

function bulbOnOff () {
    if( turnOnOff.textContent == 'Turn ON!'){
        bulbOn();
        turnOnOff.textContent = 'Turn OFF!';
    }else{
        bulbOff();
        turnOnOff.textContent = 'Turn ON!';
    }
}

turnOnOff.addEventListener('click', bulbOnOff);

bulb.addEventListener('mouseover', bulbOn);
bulb.addEventListener('mouseout', bulbOff);
bulb.addEventListener('dblclick', bulbBroken)