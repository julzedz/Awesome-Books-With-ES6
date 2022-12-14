import Books from './modules/booksClass.js';
import navFunction from './modules/navigation.js';
import { DateTime } from './modules/datetime.js';
import {
  collection, title, author, addBtn,
} from './modules/variables.js';

const newBook = new Books();
let { books } = newBook;

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.books = JSON.parse(localStorage.getItem('books'));
  }

  static addBooks() {
    let box = '';
    const bookLength = books.length;
    for (let i = 0; i < bookLength; i += 1) {
      box += `<li class="book">
      <div id="space">
      <p class="title">${books[i].title} by ${books[i].author}</p>
      <button class="remove-btn" id="${i}">Remove</button>
      </div>
      </li>`;
    }
    collection.innerHTML = box;
    this.removeBook();
    this.clearField();
  }

  static removeBook() {
    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        elem.parentNode.parentNode.remove();
        const index = elem.id;
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
        Book.addBooks();
      });
    });
  }

  static clearField() {
    document.querySelector('.title-input').value = '';
    document.querySelector('.author-input').value = '';
  }
}

addBtn.addEventListener('click', () => {
  const titleValue = title.value;
  const authorValue = author.value;
  const bookObject = new Book(titleValue, authorValue);
  books.push(bookObject);
  Book.addBooks();
  localStorage.setItem('books', JSON.stringify(books));
});

window.addEventListener('load', () => {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  }
  Book.addBooks();
});

navFunction();
document.querySelector('.date').innerHTML = DateTime.now().toFormat('MMMM dd, yyyy');