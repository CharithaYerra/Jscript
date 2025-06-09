class Library {

    // Class fields
    libraryName;
    books = [];

    // Constructor
    constructor(name) {
        this.libraryName = name;
        console.log(`Welcome to ${name} Library!`);
    }

    // Method to add books
    addBook(bookName) {
        this.books.push(bookName);
        console.log(`Book "${bookName}" has been added to the library.`);
    }

    // Method to list books
    listBooks() {
        console.log(`Books in ${this.libraryName} Library:`);
        console.log(this.books.length > 0 ? this.books : "No books available.");
    }
}



const myLibrary = new Library("City Central"); // Constructor runs

myLibrary.addBook("The Alchemist");
myLibrary.addBook("Harry Potter");

myLibrary.listBooks();
