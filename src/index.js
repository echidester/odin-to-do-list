import displayList from "./display";
import EventListeners from "./eventListeners";
import Task from "./task";
import todoList from "./todoList";
import "./style.css";

const listeners = EventListeners();
const task1 = new Task("Title 1", "Description 1", "Due Date 1", "High");
const task2 = new Task("Title 2", "Description 2", "Due Date 2", "High");
const task3 = new Task("Title 3", "Description 3", "Due Date 3", "High");
todoList.push(task1);
todoList.push(task2);
todoList.push(task3);
displayList();
listeners.addInitialListeners();
