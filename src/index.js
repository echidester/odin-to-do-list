import "./style.css";

const todoList = [
  {
    title: "Title 1",
    description: "Description 1",
    dueDate: "Due Date 1",
    priority: "High",
  },
  {
    title: "Title 2",
    description: "Description 2",
    dueDate: "Due Date 2",
    priority: "Medium",
  },
  {
    title: "Title 3",
    description: "Description 3",
    dueDate: "Due Date 3",
    priority: "Low",
  },
];

const displayList = () => {
  const container = document.querySelector(".container");

  container.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    let todo = todoList[i];
    let todoItem = document.createElement("div");
    todoItem.classList.add("todo-container");
    todoItem.innerHTML = `<h2 class="title">${todo.title}</h2>
        <p class="description">${todo.description}</p>
        <p class="due-date">${todo.dueDate}</p>
        <p class="priority">${todo.priority}</p>`;
    container.appendChild(todoItem);
  }
};

displayList();

// New To-Do Event Listener
const newTodoBtn = document.querySelector("button");
const newTodoForm = document.querySelector("dialog");

const handleNewClick = () => {
  newTodoForm.showModal();
};

newTodoBtn.addEventListener("click", handleNewClick);
