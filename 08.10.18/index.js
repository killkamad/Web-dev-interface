var form = document.querySelector("form");
var list = document.getElementById('list');
var userInput = document.getElementById('user-todo');
console.log(form);

form.addEventListener("submit",function(event){
event.preventDefault();
var li = document.createElement('li');
li.textContent = userInput.value;
li.style.color = 'red';
list.appendChild(li);
});
