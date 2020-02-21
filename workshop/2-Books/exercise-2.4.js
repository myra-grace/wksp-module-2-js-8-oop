// From 2.3
// Copy over all of the code from 2.3...


// Exercise 2.4
// We need methods in our BookList start reading and finish reading books
//      - startReading accepts a title parameter. (The book should already be in your books array.
//          - set currentlyReading
//          - set the startReadDate in the book object to new Date(Date now());
//      - finishREading accepts a title parameter.
//          - set lastRead to title
//          - update the book's object accordingly.
//          - update the read and unread count accordingly.

// console.log(homeLibrary) when you're done adding, starting and finishing books.
// Make sure that your changes are reflected in the homeLibrary.

class Book {
    constructor(title, genre, author) {
        this.title = title;
        this.genre = genre
        this.author = author;
        this.read = false;
        this.startDate = null;
        this.endDate = null;
    }
}

class BookList {
    constructor() {
        this.booksRead = 0;
        this.booksUnread = 0;
        this.books = [];
        this.lastBookRead = null;
        this.currentlyReading = null;
        this.upNext = null;
    }
    addBook = (book) => {
        this.books.push(book);
    }
    reading = (title) => {
        this.currentlyReading = title;
        let book = this.books.find(book.title === title);
        book.startDate = new Date(Date.now());
    }
    finishedReading = (title) => {
        this.lastBookRead = title;
        let book = this.books.find(book.title === title);
        book.endDate = new Date(Date.now());
        book.read = true;
        this.booksRead += 1;
        this.booksUnread -= 1;
    }
}

let homeLibrary = new BookList();

homeLibrary.addBook(new Book('Pride and Prejudice', 'romance', 'Jane Austen'));
homeLibrary.addBook(new Book('Book 2', 'Adventure', 'Sir Lancelot'));
homeLibrary.addBook(new Book('book 3', 'comedy', 'Mr. Bean'));
homeLibrary.addBook(new Book('Sherlock Holmes', 'Mystery', 'Doyle'));
homeLibrary.addBook(new Book('book 5', 'action', 'Jet Li'));
console.log(homeLibrary);

//not working?