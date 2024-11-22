/* 
Task 1: Create a constructor function for the Book object with properties for title, author, and pages.


Task 3: Create an array to store book objects and implement functions to add new books 
and search for books by title or author.


*/

// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.
function Book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Task 2: Implement a method within the Book object to display book information.
Book.prototype.displayInformation = function() {
    console.log(`Title: '${this.title}', Author: '${this.author}', Number of Pages: ${this.pages}`);
}

// Task 3: Implement functions to add new books...
function addBook(book) { 
    library.push(book);
}

// Task 3: ...and search for books by title 
function searchByTitle(title) {
    for (let book of library) {
        if (book.title === title) {
            book.displayInformation();
            return;
        }
    }
    console.log(`Book '${title}' not found.`);
}

// Task 3: ...and author
function searchByAuthor(author) {
    found = false;
    for (let book of library) {
        if (book.author === author) {
            book.displayInformation();
            found = true;
        }
    }
    if (!found) {
        console.log(`Author '${author}' not found.`);

    }
}

// Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages
function filterByPageCount(pageCount){
    let filteredLibrary = library.filter(book => book.pages>=pageCount);
    return filteredLibrary || [];
}

// Task 3: Create an array to store book objects 
let library = [];

let book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 336);
let book2 = new Book('1984', 'George Orwell', 328);
let book3 = new Book('Pride and Prejudice', 'Jane Austin', 384);
let book4 = new Book('The Alchemist', 'Paulo Coelho', 164);
let book5 = new Book('Animal Farm', 'George Orwell', 192);

addBook(book1);
addBook(book2);
addBook(book3);
addBook(book4);
addBook(book5);

// Now that we've set up our library, let's display it
console.log('Welcome to the library app!\nHere are the books available: ');
library.forEach(book => {book.displayInformation();});

// Let's search by title and author
console.log("First, let's search by title: ");
searchByTitle('1984');
searchByTitle('Harry Potter');

console.log("Now, let's search by author: ");
searchByAuthor('George Orwell');
searchByAuthor('JK Rowling');

// We can filter by page count
console.log("If we filter our library by books that have a minimum page count of 200, we get : ");
for (let book of filterByPageCount(200)) {
    book.displayInformation();
}

// Task 4: ...and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.
console.log("Finally, let's map 'Title:' and 'Author:' to the beginning of the respective fields: ");
library.map(book => {
    book.title = "Title: "+book.title;
    book.author="Author: "+book.author;
})
console.log(library);
