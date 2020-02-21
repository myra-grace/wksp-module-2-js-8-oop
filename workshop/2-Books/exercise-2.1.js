// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//      - title, genre, author, read, startReadDate, endReadDate
// Declare the books as book1, book2, book3, book4, book5
//
// Remember that it isn't necessary to pass arguments for all of the parameters.
// if you haven't read the book, there should not be a startReadDate or endReadDate
//
// Console.log them to verify that all is working.

class Book {
    constructor(title, genre, author) {
        this.title = title;
        this.genre = genre
        this.author = author;
        this.read = false;
        this.startDate = 0;
        this.endDate = 0;
    }
}
let book1 = new Book('Pride and Prejudice', 'romance', 'Jane Austen');
let book2 = new Book('Book 2', 'Adventure', 'Sir Lancelot');
let book3 = new Book('book 3', 'comedy', 'Mr. Bean');
let book4 = new Book('Sherlock Holmes', 'Mystery', 'Doyle');
let book5 = new Book('book 5', 'action', 'Jet Li');
console.log(book1, book2, book3, book4, book5);