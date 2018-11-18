  function resert(){
  document.form.name.value ="";
  document.form.famil.value ="";
  document.form.mail.value ="";
  document.form.mail2.value ="";
  document.form.password.value ="";
  document.form.password2.value ="";
  document.form.to.value ="";
  document.form.tel.value ="";
  document.form.age.value ="";
}

  function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
  }

  function resetError(container) {
    container.className = '';
    if (container.lastChild.className == "error-message") {
      container.removeChild(container.lastChild);
    }
  }

  function validate(form) {
    var elems = form.elements;

    resetError(elems.name.parentNode);
    if (!elems.name.value) {
      showError(elems.name.parentNode, ' Поле "Имя" пустое ');
    }
    resetError(elems.famil.parentNode);
    if (!elems.famil.value) {
      showError(elems.famil.parentNode, ' Поле "Фамилия" пустое  ');
    }

   resetError(elems.mail.parentNode);
    if (!elems.mail.value) {
      showError(elems.mail.parentNode, ' Укажите Вашу почту');
    } else if (elems.mail.value != elems.mail2.value) {
      showError(elems.mail.parentNode, ' Почты не совпадают');
    }

    resetError(elems.password.parentNode);
    if (!elems.password.value) {
      showError(elems.password.parentNode, ' Укажите пароль');
    } else if (elems.password.value != elems.password2.value) {
      showError(elems.password.parentNode, ' Пароли не совпадают');
    }

  }

  function checkParams() {
      var name = $('#name').val();
      var famil = $('#famil').val();
      var age = $('#age').val();
      var to = $('#to').val();
      var mail = $('#mail').val();
      var mail2 = $('#mail2').val();
      var password = $('#password').val();
      var password2 = $('#password2').val();

      if(name.length != 0 && famil.length != 0 && age.length != 0 && to.length != 0 && mail.length != 0 && mail2.length != 0 && password.length != 0 && password2.length != 0) {
          $('#add-user-btn').removeAttr('disabled');
      } else {
          $('#add-user-btn').attr('disabled', 'disabled');
      }
  }
