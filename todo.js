
function Task(title, category) {
    this.title = title;
    this.category = category;
    this.completed = false;
  }

  function Category(name) {
    this.name = name;
    this.tasks = [];
  }

  function Library() {
    this.categories = [];
  }

  Library.prototype.addTask = function(title, categoryName) {
    let category = this.categories.find(cat => cat.name === categoryName);
  
    if (!category) {
      category = new Category(categoryName);
      this.categories.push(category);
    }
  
    const task = new Task(title, categoryName);
    category.tasks.push(task);
  }

  Library.prototype.displayTasks = function() {
    console.log('Tasks grouped by categories:');
  
    this.categories.forEach(category => {
      console.log(`\n${category.name}:`);
      category.tasks.forEach(task => {
        console.log(`- ${task.title} (${task.completed ? 'Completed' : 'Not Completed'})`);
      });
    });
  }
  
  Library.prototype.markTaskAsCompleted = function(title, categoryName) {
    const category = this.categories.find(cat => cat.name === categoryName);
  
    if (category) {
      const task = category.tasks.find(task => task.title === title);
  
      if (task) {
        task.completed = true;
      }
    }
  }
  
  Library.prototype.removeTask = function(title, categoryName) {
    const category = this.categories.find(cat => cat.name === categoryName);
  
    if (category) {
      category.tasks = category.tasks.filter(task => task.title !== title);
    }
  }
  
  const library = new Library();
  library.addTask('Buy groceries', 'Shopping');
  library.addTask('Read a book', 'Learning');
  library.addTask('Exercise', 'Health');
  
  library.displayTasks();
  
  library.markTaskAsCompleted('Read a book', 'Learning');
  
  library.displayTasks();
  
  library.removeTask('Exercise', 'Health');
  
  library.displayTasks();