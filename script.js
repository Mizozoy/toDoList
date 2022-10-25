//Model
const renderPlace = document.getElementById("todo-list");
let todolist = [];

const createToDo = (title) => {
  todolist.push({ title: title, id: "" + Math.random(), done: false });
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

const doneToDo = (idToDone) => {
  for (i = 0; i < todolist.length; i++) {
    if (todolist[i].id === idToDone && todolist[i].done === false) {
      todolist[i].done = true;
    } else if (todolist[i].id === idToDone && todolist[i].done === true) {
      todolist[i].done = false;
    }
  }
};

document.getElementById("todo-title").onkeypress = function (e) {
  var chr = String.fromCharCode(e.which);
  if ("></— ".indexOf(chr) >= 0) return false;
};

//Control
const addToDo = () => {
  const todoTitle = document.getElementById("todo-title").value;
  if (todoTitle != "") {
    createToDo(todoTitle);
  }
  render();
};

const deleteToDo = (event) => {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;
  removeToDo(idToDelete);
  render();
};

const stateToDo = (event) => {
  const stateCheckBox = event.target;
  const idToChange = stateCheckBox.id;
  doneToDo(idToChange);
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
    checkBox.id = todo.id;
    checkBox.onchange = stateToDo;
    if (todo.done) {
      checkBox.checked = true;
    } else {
      checkBox.checked = false;
    }

    const delButton = document.createElement("button");
    delButton.onclick = deleteToDo;
    delButton.id = todo.id;
    delButton.className = "delButton";

    const text = document.createElement("para");
    text.innerText = todo.title;
    text.classList = "todoTitle";

    element.appendChild(checkBox);
    element.appendChild(text);
    element.appendChild(delButton);

    renderPlace.appendChild(element);
  });
};

render();
