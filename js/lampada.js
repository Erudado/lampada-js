const lamp = document.getElementById ('lamp');
const turnon = document.getElementById('turnon');
const turnoff = document.getElementById ('turnoff');
const legenda = document.getElementById ('legenda');
turnon.addEventListener ('click', lampon );
turnoff.addEventListener ('click', lampoff );
lamp.addEventListener ('dblclick', lampbroken);

function lampon (){
    lamp.src = '../img/acesa.gif';
    
}

function lampoff (){
    lamp.src = '../img/apagada.gif';
}

function lampbroken (){
    lamp.src = '../img/quebrada.jpg'
}