//var input1 = document.querySelector('#input1');
//input1.value = 'Bruno Hilario';

var inputRed = null,
  inputGreen = null,
  inputBlue = null,
  rangeRed = null,
  rangeGreen = null,
  rangeBlue = null,
  divSquare = null;

window.addEventListener('load', start);

function start() {
  console.log('oi');
  console.log('pagina carregada');

  var input1 = document.querySelector('#input1');
  input1.addEventListener('keyup', countName);
  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);

  inputRed = document.querySelector('#inputRed');
  inputGreen = document.querySelector('#inputGreen');
  inputBlue = document.querySelector('#inputBlue');

  rangeRed = document.querySelector('#rangeRed');
  rangeGreen = document.querySelector('#rangeGreen');
  rangeBlue = document.querySelector('#rangeBlue');

  divSquare = document.querySelector('#square');
  rangeRed.addEventListener('input', setColor); //change só quando solta o mouse input vai dinamincamente
  rangeGreen.addEventListener('input', setColor); //vai ouvindo o input , a mudanca na barra e chama a funcao setColor
  rangeBlue.addEventListener('input', setColor);

  setColor();
}
function setColor() {
  //var red = +rangeRed.value; //+ converte para inteiro
  var red = parseInt(rangeRed.value, 10);
  var green = +rangeGreen.value;
  var blue = +rangeBlue.value;

  inputRed.value = red;
  inputGreen.value = green;
  inputBlue.value = blue;
  var rgbCSS = 'rgb(' + red + ',' + green + ',' + blue + ')';

  divSquare.style.backgroundColor = rgbCSS;
}

function countName(event) {
  //console.log(event);
  var count = event.target.value;
  var span = document.querySelector('#nameLength');
  span.textContent = count.length;
}

function preventSubmit(event) {
  event.preventDefault();
}
