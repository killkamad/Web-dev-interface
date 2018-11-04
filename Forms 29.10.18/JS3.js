 function valid (form) {
  var fail = false;
  var name = form.name.value;
  var surname = form.surname.value;
  var age = form.age.value;
  var adr_pattern = /[0-9]/i;
  
	if (name == "" || name == " ") 
		fail = "Вы не ввели свое имя";
	else if (surname == "" || surname == " ")
		fail = "Вы не ввели свою фамилию";
	else if (adr_pattern.test(age) == false) 
		fail = "Вы не правильно ввели свой возвраст";
	else if (age<18)
		fail = "Вам меньше 18-ти лет"

	if (fail) 
		alert(fail);
	else 
		alert("Изменения Сохранены!")
 
 }