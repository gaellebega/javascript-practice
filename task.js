
function Task(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = false;
  }
  function TaskScheduler() {
    this.tasks = [];
  }
  TaskScheduler.prototype.addTask = function(title, description, dueDate) {
    const task = new Task(title, description, dueDate);
    this.tasks.push(task);
  }
  TaskScheduler.prototype.displayTasks = function() {
    this.tasks.sort((a, b) => {
      return new Date(a.dueDate) - new Date(b.dueDate);
    });
    console.log('Tasks sorted by due date:');
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.title} (due: ${task.dueDate})`);
    });
  }
  TaskScheduler.prototype.updateTask = function(index, title, description, dueDate, completed) {
    const task = this.tasks[index];
    if (title) task.title = title;
    if (description) task.description = description;
    if (dueDate) task.dueDate = dueDate;
    if (typeof completed === 'boolean') task.completed = completed;
  }
  TaskScheduler.prototype.removeTask = function(index) {
    this.tasks.splice(index, 1);
  }
  const scheduler = new TaskScheduler();
  scheduler.addTask('Buy groceries', 'Milk, eggs, bread', '2023-03-12');
  scheduler.addTask('Submit report', 'Project status report for Q1', '2024-03-13');
  scheduler.addTask('Call a friend', 'Follow up on meeting', '2023-03-14');
  scheduler.displayTasks();
  scheduler.updateTask(0, 'Buy groceries', 'Milk, eggs, bread, butter', '2024-03-15', true);
  scheduler.displayTasks();
  scheduler.removeTask(1);
  scheduler.displayTasks();