const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = function () {
    return `${this.title} by ${this.author}, ${pages} pages`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function showLibrary() {
  const div = document.getElementById("library");
  div.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const element = document.createElement("p");
    element.textContent = `${index + 1}. ${book.info()}`;
    div.append(element);
  });
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 259);
const toKillaMockingbird = new Book("To Kill a Mockingbird", "Harper Lee", 265);
const hungerGames = new Book("Hunger Games", "Suzanne Collins", 265);

addBookToLibrary(theHobbit);
addBookToLibrary(toKillaMockingbird);
addBookToLibrary(hungerGames);

showLibrary();

const addBookFormToggleButton = document.getElementById("add_book_form_toggle");
addBookFormToggleButton.addEventListener("click", () => {
  const form = document.getElementById("add_book_form");
  form.style.display = "block";
});

const addBookButton = document.getElementById("add_book");
addBookButton.addEventListener("click", (e) => {
  e.preventDefault();

  const title = document.querySelector("input#title").value;
  const author = document.querySelector("input#author").value;
  const pages = document.querySelector("input#pages").value;

  const newBook = new Book(title, author, pages);
  addBookToLibrary(newBook);

  const form = document.getElementById("add_book_form");
  form.style.display = "none";
  showLibrary();
});
