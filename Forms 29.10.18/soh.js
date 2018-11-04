var form = document.querySelector("form");
var list = document.getElementById('list');
var userInput = document.getElementById('name');

var todos = localStorage.getItem('todos') ?
   JSON.parse(localStorage.getItem('todos')) :
   [];

console.log(todos);

var makeItem = (item) => {
var li = document.createElement('li');
li.textContent = item;
li.style.color = 'red';
list.appendChild(li);
}

todos.map(todo => {
makeItem(todo);
});


form.addEventListener("submit",function(event){
event.preventDefault();
todos.push(userInput.value);
localStorage.setItem('todos', JSON.stringify(todos));
makeItem(userInput.value);

});
