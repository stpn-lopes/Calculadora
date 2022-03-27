//criando variavel para usar o display da calculadora
let display = document.querySelector('#display');

//função do botão Clear
function clearAll (){
    display.value=" ";
}

//função para mostrar os valores clicados nos botões na tela do display da calculadora
function showDisplay(value) {
    display.value += value;
}

//função do botão igual (=)
function result () {
    let y = eval(display.value);
    display.value = y;
    if (display.value == "undefined") {
        display.value = 'error';
    }
}