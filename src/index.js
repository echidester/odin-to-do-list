import displayList from "./display";
import EventListeners from "./eventListeners";
import Task from "./task";
import todoList from "./todoList";
import "./style.css";
import { format, formatDate } from "date-fns";

const listeners = EventListeners();

const task1 = new Task(
  "Title 1",
  "Description",
  format(new Date(), "yyyy-MM-dd"),
  "High"
);
const task2 = new Task(
  "Title 2",
  "Description",
  formatDate(new Date("2024/01/03"), "yyyy-MM-dd"),
  "High"
);
const task3 = new Task(
  "Title 3",
  "Description",
  format(new Date("2024/12/31"), "yyyy-MM-dd"),
  "High"
);

todoList.push(task1);
todoList.push(task2);
todoList.push(task3);

displayList("active");
listeners.addInitialListeners();
