function valid (form) {
  var fail = false;

  var email = form.email.value;
  var password = form.password.value;

  var adr_pattern = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
  

  
 
  if (adr_pattern.test(email) == false) 
   fail = "Email неправильный";
  else if (password == "") 
   fail = "Вы не ввели пароль";
 
  
  

  if (fail) 
   alert(fail);
  else 
   window.location = "Kabinet.html";
 
 }