window.addEventListener('load', function () {
  fetch('https://api.github.com/users/rrgomide')
    .then((res) => {
      //console.log(res);
      res.json().then((data) => {
        showData(data);
      });
    })
    .catch((error) => {
      console.log('Erroi na requisicao');
    });
  divisionPromise(12, 6).then((result) => {
    console.log(result);
  });
  executeDivisionPromise();
  executeDivisionPromiseAsyncAwait();
});

function showData(data) {
  const user = document.querySelector('#user');
  user.textContent = data.login + ' ' + data.name;
}

function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Nãoé possivel dividir por 0');
    }
    resolve(a / b);
  });
}

function executeDivisionPromise() {
  divisionPromise(5, 0)
    .then((result) => {
      console.log(result);
    })
    .catch((errosMessage) => {
      console.log('Falha de divisão por 0');
    });
}
async function executeDivisionPromiseAsyncAwait() {
  const division = await divisionPromise(12, 2);
  console.log(division);
}
