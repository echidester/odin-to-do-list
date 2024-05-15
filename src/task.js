function Task(taskName, description, dueDate, priority) {
  this.taskName = taskName;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.complete = false;
  this.switchComplete = (completeStatus) => {
    this.complete = !completeStatus;
  };
}

export default Task;
