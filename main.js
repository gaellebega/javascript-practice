
function Book(title, author) {
    this.title = title;
    this.author = author;
  }
  
  function Library() {
    this.books = [];
  }
  
  Library.prototype.addBook = function(title, author) {
    const book = new Book(title, author);
    this.books.push(book);
  };

  Library.prototype.removeBook = function(title) {
    this.books = this.books.filter(book => book.title !== title);
  };
  
  
  Library.prototype.listBooks = function() {
    this.books.forEach(book => console.log(`${book.title} by ${book.author}`));
  };
  
  
  const library = new Library();
  
  
  library.addBook('To Kill a Mockingbird', 'Harper Lee');
  library.addBook('The Great Gatsby', 'F. Scott Fitzgerald');
  
  library.listBooks();
  
  library.removeBook('To Kill a Mockingbird');
  
  library.listBooks();