//Model
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
    const element = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onchange = deleteToDo;
    checkBox.id = todo.id;

    const text = document.createElement("para");
    text.innerText = todo.title;

    element.appendChild(checkBox);
    element.appendChild(text);

    renderPlace.appendChild(element);
  });
};

render();
