function updateDate() {
  const footerSpan = document.querySelector("footer span");
  footerSpan.textContent = new Date().getFullYear();
}

updateDate();

const myLibrary = [];

class Book {
  title;
  author;
  pages;
  read;

  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
  }

  info() {
    return `<p>${this.title}</p><p>${this.author}</p><p>${this.pages} pages</p>`;
  }

  toggleRead() {
    this.read = !this.read;
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
    element.innerHTML = book.info();

    if (book.read) {
      element.classList.add("read_book");
    }

    const buttonsDiv = document.createElement("div");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
      deleteBookFromLibrary(index);
    });

    buttonsDiv.append(deleteButton);

    const readToggleButton = document.createElement("button");
    readToggleButton.textContent = "Read";

    readToggleButton.addEventListener("click", () => {
      book.toggleRead();
      showLibrary();
    });

    buttonsDiv.append(readToggleButton);

    element.append(buttonsDiv);
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
  form.style.display = "flex";
});

const closeFormButton = document.getElementById("close_form_button");
closeFormButton.addEventListener("click", () => {
  const form = document.getElementById("add_book_form");
  form.style.display = "none";
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
