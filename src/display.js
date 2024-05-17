import todoList from "./todoList";
import EventListeners from "./eventListeners";

const displayTask = (i) => {
  const container = document.querySelector(".container");

  let todo = todoList[i];
  let todoItem = document.createElement("div");
  todoItem.classList.add("todo-container");
  todoItem.setAttribute("id", `task-${i}`);
  todoItem.innerHTML = `<h2 class="task-name">${todo.taskName}</h2>
  <p class="task-text description">${todo.description}</p>
        <div class="flex-container">
        <p class="task-text due-date">${todo.dueDate}</p>
        <p class="task-text priority">${todo.priority}</p>
        <div class="task-btns">
        <button class="complete" id="complete-${i}">${
    todo.complete === false ? "Mark Complete" : "Mark Incomplete"
  }</button>
        <button class="delete" id="delete-${i}">Delete Task</button></div></div>`;
  container.appendChild(todoItem);
};

const displayList = (listType) => {
  const container = document.querySelector(".container");
  const listeners = EventListeners();

  container.innerHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    if (listType === "complete" && todoList[i].complete) {
      console.log("complete");
      displayTask(i);
    } else if (listType === "active" && !todoList[i].complete) {
      console.log("active");
      displayTask(i);
    }
  }

  console.log(todoList);
  listeners.addRecurringListeners();
};

export default displayList;
