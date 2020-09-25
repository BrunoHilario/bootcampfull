//console.log('olá, mundo');

var title = document.querySelector('h1');
title.textContent = 'Modificado por Bruno Hilario';

var a = 5;
var b = 6;

if (a < b) {
  console.log(a + ' é menor que' + b);
} else {
  if (a > b) {
    console.log(a + 'é maior que ' + b);
  }
}

var r = '';
var dia = 5;
switch (dia) {
  case 1:
    r = 'Domingo';
    break;
  case 2:
    r = 'Segunda';
    break;
  case 3:
    r = 'Terça';
    break;
  case 4:
    r = 'Quarta';
    break;
  case 5:
    r = 'Quinta';
    break;
  case 6:
    r = 'Sexta';
    break;
  case 7:
    r = 'Sábado';
    break;

  default:
    r = 'Dia inválido';
}

console.log(r);
a = 6;
b = 7;
var resposta = a > b ? 'maior' : a < b ? 'menor' : 'igual';
console.log(resposta);

//somatorio com while

var numeroAtual = 1;
var somatorio = 0;
while (numeroAtual <= 10) {
  somatorio += numeroAtual;
  numeroAtual++;
}
console.log('a soma é ' + somatorio);
var numeroAtual = 1;
var somatorio = 0;

do {
  somatorio += numeroAtual;
  numeroAtual++;
} while (numeroAtual <= 10);
console.log(somatorio);
somatorio = 0;
for (numeroAtual = 1; numeroAtual <= 10; numeroAtual++) {
  somatorio += numeroAtual;
}
console.log('for ' + somatorio);

var title = document.querySelector('h1'); //componente HTML
console.log(title);
title.textContent = 'Bruno Hilario';
var city = document.querySelector('#city'); //id html
city.textContent = 'Rio de Janeiro';
var dadosPessoais = document.querySelectorAll('.Dados-pessoais'); //pegar a classe
console.log(dadosPessoais);

dadosPessoais = Array.from(dadosPessoais); //JOGANDO NO ARRAY
console.log(dadosPessoais);
for (var i = 0; i < dadosPessoais.length; i++) {
  var currentElement = dadosPessoais[i];
  // currentElement.style.color = 'green';
  currentElement.classList.add('emphasis');
}
