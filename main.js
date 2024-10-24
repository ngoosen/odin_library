const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  this.info = function () {
    return `${this.title} by ${this.author}, ${pages} pages`;
  };
  this.toggleRead = function () {
    if (this.read) {
      this.read = false;
    } else {
      this.read = true;
    }
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function showLibrary() {
  const list = document.getElementById("library");
  list.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const element = document.createElement("li");
    element.textContent = book.info();

    if (book.read) {
      element.style.textDecoration = "line-through";
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
      deleteBookFromLibrary(index);
    });

    element.append(deleteButton);

    const readToggleButton = document.createElement("button");
    readToggleButton.textContent = "Read";

    readToggleButton.addEventListener("click", () => {
      book.toggleRead();
      showLibrary();
    });

    element.append(readToggleButton);

    list.append(element);
  });
}

function deleteBookFromLibrary(id) {
  myLibrary.splice(id, 1);
  showLibrary();
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
