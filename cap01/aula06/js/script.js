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
  function insertName(newName) {
    globalNames.push(newName);
    render();
  }
  function handleTyping(event) {
    if (event.key === 'Enter') {
      insertName(event.target.value);
    }
  }
  inputName.focus;
  inputName.addEventListener('keyup', handleTyping);
}
function render() {
  var divNames = document.querySelector('#names');
  divNames.innerHTML = '<ul><li>NOme 1</li><li>NOme 2</li></ul>';
}
