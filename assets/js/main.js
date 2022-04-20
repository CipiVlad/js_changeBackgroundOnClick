// deklarieren 
let color = document.getElementById('input-color');
let button = document.getElementById('input-button');


// function

function changeBackground() {
    color = document.getElementById('input-color').value;
    document.body.style.backgroundColor = color;
}