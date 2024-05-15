import Task from "./task";
import todoList from "./todoList";
import displayList from "./display";

const EventListeners = () => {
  const newTaskBtn = document.querySelector("#new-task");
  const newTaskForm = document.querySelector("#task-form");
  const submitBtn = document.querySelector("#submit");

  const addNewTaskListener = () => {
    const handleClick = () => {
      console.log("new task clicked");
      newTaskForm.showModal();
    };

    newTaskBtn.removeEventListener("click", handleClick);
    newTaskBtn.addEventListener("click", handleClick);
  };

  const addSubmitBtnListener = () => {
    const handleClick = (event) => {
      event.preventDefault();
      console.log("clicked");

      console.log("Add task...");
      let task = new Task(
        taskName.value,
        description.value,
        dueDate.value,
        priority.value
      );
      todoList.push(task);

      console.log("Clear form...");
      taskName.value = "";
      description.value = "";
      dueDate.value = "";
      priority.value = "";

      newTaskForm.close();
      displayList();
    };
    submitBtn.removeEventListener("click", handleClick);
    submitBtn.addEventListener("click", handleClick);
  };

  const addCompleteListener = () => {
    const completeBtn = document.querySelectorAll(".complete");

    const handleClick = (event) => {
      const index = event.target.id.slice(9);
      todoList[index].switchComplete(todoList[index].complete);
      displayList();
      console.log(todoList);
    };

    completeBtn.forEach((btn) => {
      btn.removeEventListener("click", handleClick);
      btn.addEventListener("click", handleClick);
    });
  };

  const addDeleteListener = () => {
    const deleteBtn = document.querySelectorAll(".delete");

    const handleClick = (event) => {
      const index = event.target.id.slice(7);
      todoList.splice(index, 1);
      displayList();
      console.log(todoList);
    };

    deleteBtn.forEach((btn) => {
      btn.removeEventListener("click", handleClick);
      btn.addEventListener("click", handleClick);
    });
  };

  const addInitialListeners = () => {
    addNewTaskListener();
    addSubmitBtnListener();
  };

  const addRecurringListeners = () => {
    addCompleteListener();
    addDeleteListener();
  };

  return { addInitialListeners, addRecurringListeners };
};

export default EventListeners;
