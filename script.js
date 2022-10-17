—//Model
const renderPlace = document.getElementById("todo-list");
let todolist = [];

const createToDo = (title) => {
  todolist.push({ title: title, id: "" + Math.random() });
};

const removeToDo = (idToDelete) => {
  todolist = todolist.filter((todo) => {
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });
};

document.getElementById("todo-title").onkeypress = function (e) {
  var chr = String.fromCharCode(e.which);
  if ('></—'.indexOf(chr) >= 0) return false;
};

//Control
const addToDo = () => {
  const todoTitle = document.getElementById("todo-title").value;

  createToDo(todoTitle);

  render();
};

const deleteToDo = (event) => {
  const deleteCheckBox = event.target;
  const idToDelete = deleteCheckBox.id;
  removeToDo(idToDelete);

  render();
};

//View
const render = () => {
  renderPlace.innerHTML = "";
  todolist.forEach((todo) => {
    const element = document.createElement("div");
    element.className = "todo";

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onchange = deleteToDo;
    checkBox.id = todo.id;

    const text = document.createElement("label");
    text.innerText = todo.title;

    element.appendChild(checkBox);
    element.appendChild(text);

    renderPlace.appendChild(element);
  });
};

render();
