import todoList from "./todoList";
import EventListeners from "./eventListeners";

const displayList = () => {
  const container = document.querySelector(".container");
  const listeners = EventListeners();

  container.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    if (!todoList[i].complete) {
      let todo = todoList[i];
      let todoItem = document.createElement("div");
      todoItem.classList.add("todo-container");
      todoItem.setAttribute("id", `task-${i}`);
      todoItem.innerHTML = `<h2 class="task-name">${todo.taskName}</h2>
            <p class="description">${todo.description}</p>
            <p class="due-date">${todo.dueDate}</p>
            <p class="priority">${todo.priority}</p>
            <button class="complete" id="complete-${i}">Mark Complete</button>
            <button class="delete" id="delete-${i}">Delete Task</button>`;
      container.appendChild(todoItem);
    }
  }

  listeners.addRecurringListeners();
};

export default displayList;
