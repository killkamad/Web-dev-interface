function valid (form) {
  var fail = false;
  var name = form.name.value;
  var email = form.email.value;
  var password = form.password.value;
  var RePassword = form.RePassword.value;
  var adr_pattern = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
  

  
  if (name == "" || name == " ") 
   fail = "Вы не ввели свое имя";
  else if (adr_pattern.test(email) == false) 
   fail = "email неправильный";
  else if (password == "") 	
   fail = "Вы не ввели пароль";
  else if (password !== RePassword) 
   fail = "Пароли не совпадают";
  
  

  if (fail) 
   alert(fail);
  else 
   window.location = "vhod.html";
 
 }
