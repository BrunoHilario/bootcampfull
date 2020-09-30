window.addEventListener('load', start);

var globalNames = ['um', 'dois', 'tres', 'quatro'];
var inputName = null;

function start() {
  inputName = document.querySelector('#inputName');
  preventFormSubmit();
  activeinput();
}
function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function activeinput() {
  inputName.focus;
}
