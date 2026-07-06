// Class
class Book {
	constructor (name, author, pages, isRead) {
		this.name = name;
		this.author = author;
		this.pages = pages;
		this.isRead = isRead;
	}
}

// Variables
let books = [];
const library = document.querySelector(".library");
const form = document.querySelector("form");

// Buttons
const newBookBtn = document.querySelector("#new-book-btn");
const addBookBtn = document.querySelector("#add-book-btn");
const bookNameInput = document.querySelector("#bookName");
const bookAuthorInput = document.querySelector("#bookAuthor");
const bookPagesInput = document.querySelector("#bookPages");

const book1 = new Book("1984", "George Orwell", 328, "Yes");

addBookToLibrary(books, book1);

newBookBtn.addEventListener("click", function (e) {
	form.style.display = "grid";
	addBookBtn.style.display = "block";
	newBookBtn.style.display = "none";	
});

addBookBtn.addEventListener("click", function (e) {
	form.style.display = "none";
	addBookBtn.style.display = "none";
	newBookBtn.style.display = "block";
	let radioIsRead = document.querySelector('input[type="radio"]:checked');
	addBookToLibrary(books, bookNameInput.value, bookAuthorInput.value, bookPagesInput.value, radioIsRead.value);
	cleanInputs();
});

// Functions

function addBookToLibrary(books, book) {
	let id = crypto.randomUUID();
	book.id = id;
	books.push(book);
	let div = document.createElement("div");
	div.classList.add("book");
	addDeleteBtn(books, book, div);
	addBookInfo(div, book);
}

function addDeleteBtn(books, book, div) {
	let deleteBtnDiv = document.createElement("div");
	let deleteBtn = document.createElement("button");
	deleteBtn.textContent = "delete";
	deleteBtn.addEventListener("click", function (e) {
		div.remove();
		books.splice(books.indexOf(book), 1);
		// console.table(books);
	});
	deleteBtnDiv.appendChild(deleteBtn);
	div.appendChild(deleteBtnDiv);
}

function addBookInfo(div, book) {
	for (info in book) {
		infoDiv = document.createElement("div");
		infoPara = document.createElement("p");
		infoPara.textContent = book[info];
		if (info === "id") {
			div.dataset.id = book.id;
		}
		if (info === "pages") {
			book[info] = parseInt(book[info]);
		}
		if (info === "isRead") {
			addChangeIsReadBtn(infoDiv, infoPara);
		}
		infoDiv.appendChild(infoPara);
		div.appendChild(infoDiv);
	}
	library.appendChild(div);
}

function addChangeIsReadBtn(isReadDiv, isReadPara) {
	let changeIsReadBtn = document.createElement("button");
	changeIsReadBtn.textContent = "Change";
	changeIsReadBtn.addEventListener("click", function (e) {
		isReadPara.textContent = (isReadPara.textContent === "Yes") ? "No": "Yes";
	});
	isReadDiv.appendChild(changeIsReadBtn);
}

function cleanInputs() {
	bookNameInput.value = "";
	bookAuthorInput.value = "";
	bookPagesInput.value = "";
}