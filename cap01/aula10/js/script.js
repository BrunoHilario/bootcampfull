'use strict'; //acusa mais erros

console.log('Hello');

//var x let

function withVar() {
  for (var i = 0; i <= 10; i++) {
    console.log('var' + i);
  }

  i = 20;
  console.log(i);
}

function withLet() {
  for (let i = 0; i <= 10; i++) {
    console.log('let' + i);
  }

  // i = 20;
  // console.log(i);
}
withVar();
withLet();

//const - não podemos reatribuir
const d = [];
console.log(d);
d.push(1);
console.log(d);

function sum(a, b) {
  return a + b;
}

const sum2 = function (a, b) {
  return a + b;
};

const sum3 = (a, b) => {
  return a + b;
};
const sum4 = (a, b) => a + b;
console.log(sum(2, 3));
console.log(sum2(2, 3));
console.log(sum3(2, 3));
console.log(sum4(2, 3));
const name = 'Bruno';
const sobrenome = 'Alves';
const text1 = 'Meu nome é ' + name + ' ' + sobrenome;
console.log(text1);
const text2 = `Meu nome é ${name} ${sobrenome}`;
console.log(text2);
const sum5 = (a, b = 10) => a + b;
console.log(sum5(2));
