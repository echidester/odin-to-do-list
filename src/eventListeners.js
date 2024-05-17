import Task from "./task";
import todoList from "./todoList";
import displayList from "./display";

const EventListeners = () => {
  const newTaskBtn = document.querySelector("#new-task");
  const newTaskForm = document.querySelector("#task-form");
  const submitBtn = document.querySelector("#submit");
  const closeWindowBtn = document.querySelector("#close-window");
  const activeListBtn = document.querySelector("#active-list");
  const completeListBtn = document.querySelector("#completed-list");

  const addNewTaskListener = () => {
    const handleClick = () => {
      newTaskForm.showModal();
    };

    newTaskBtn.removeEventListener("click", handleClick);
    newTaskBtn.addEventListener("click", handleClick);
  };

  const addSubmitBtnListener = () => {
    const handleClick = (event) => {
      event.preventDefault();

      let task = new Task(
        taskName.value,
        description.value,
        dueDate.value,
        priority.value
      );
      todoList.push(task);

      taskName.value = "";
      description.value = "";
      dueDate.value = "";
      priority.value = "";

      newTaskForm.close();
      displayList("active");
    };
    submitBtn.removeEventListener("click", handleClick);
    submitBtn.addEventListener("click", handleClick);
  };

  const addCloseWindowListener = () => {
    const handleClick = () => {
      newTaskForm.close();
    };

    closeWindowBtn.removeEventListener("click", handleClick);
    closeWindowBtn.addEventListener("click", handleClick);
  };

  const addActiveTaskListener = () => {
    const handleClick = () => {
      displayList("active");
    };

    activeListBtn.removeEventListener("click", handleClick);
    activeListBtn.addEventListener("click", handleClick);
  };

  const addCompleteTaskListener = () => {
    const handleClick = () => {
      displayList("complete");
    };

    completeListBtn.removeEventListener("click", handleClick);
    completeListBtn.addEventListener("click", handleClick);
  };

  const addCompleteListener = () => {
    const completeBtn = document.querySelectorAll(".complete");

    const handleClick = (event) => {
      const index = event.target.id.slice(9);
      todoList[index].switchComplete(todoList[index].complete);
      displayList("active");
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
      displayList("active");
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
    addActiveTaskListener();
    addCompleteTaskListener();
    addCloseWindowListener();
  };

  const addRecurringListeners = () => {
    addCompleteListener();
    addDeleteListener();
  };

  return { addInitialListeners, addRecurringListeners };
};

export default EventListeners;
