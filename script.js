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
let library = [];
const libraryDiv = document.querySelector(".library");
const form = document.querySelector("form");

// Buttons
const newBookBtn = document.querySelector("#new-book-btn");
const addBookBtn = document.querySelector("#add-book-btn");
const bookNameInput = document.querySelector("#bookName");
const bookAuthorInput = document.querySelector("#bookAuthor");
const bookPagesInput = document.querySelector("#bookPages");

// Example books
const n1984 = new Book("1984", "George Orwell", 328, "Yes");
const aniFar = new Book("Animal Farm", "George Orwell", 152, "Yes");
const cheSto = new Book("Chess Story", "Stefan Zweig", 96, "Yes");
const whiFan = new Book("White Fang", "Jack London", 288, "No");
const criPus = new Book("Crime and Punishment", "Fyodor Dostoevsky", 704, "Yes");

addBookToLibrary(library, n1984);
addBookToLibrary(library, aniFar);
addBookToLibrary(library, cheSto);
addBookToLibrary(library, whiFan);
addBookToLibrary(library, criPus);

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
	addBookToLibrary(library, bookNameInput.value, bookAuthorInput.value, bookPagesInput.value, radioIsRead.value);
	cleanInputs();
});

// Functions

function addBookToLibrary(library, book) {
	let id = crypto.randomUUID();
	book.id = id;
	library.push(book);
	let div = document.createElement("div");
	div.classList.add("book");
	addDeleteBtn(library, book, div);
	addBookInfo(div, book);
}

function addDeleteBtn(library, book, div) {
	let deleteBtnDiv = document.createElement("div");
	let deleteBtn = document.createElement("button");
	deleteBtn.textContent = "delete";
	deleteBtn.addEventListener("click", function (e) {
		div.remove();
		library.splice(library.indexOf(book), 1);
		// console.table(library);
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
	libraryDiv.appendChild(div);
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