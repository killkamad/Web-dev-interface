function showError(container, errorMessage) {
  container.className = 'error';
  var msgElem = document.createElement('span');
  msgElem.className = "error-message";
  msgElem.innerHTML = errorMessage;
  container.appendChild(msgElem);s
}

function resetError(container) {
  container.className = '';
  if (container.lastChild.className == "error-message") {
    container.removeChild(container.lastChild);
  }
}

function validate(form) {
  var elems = form.elements;

  resetError(elems.from.parentNode);
  if (!elems.from.value) {
    showError(elems.from.parentNode, ' Введите почту/моб.тел ');
  } 
}
