let books = [];
const library = document.querySelector(".library");
const form = document.querySelector("form");

// Buttons
const newBookBtn = document.querySelector("#new-book-btn");
const addBookBtn = document.querySelector("#add-book-btn");
const bookNameInput = document.querySelector("#bookName");
const bookAuthorInput = document.querySelector("#bookAuthor");
const bookPagesInput = document.querySelector("#bookPages");

addBookToLibrary(books, "Warrior 1", "Ada", 453, "Yes");
addBookToLibrary(books, "Savior", "Bob", 341, "No");
addBookToLibrary(books, "Ipsum", "Lorem", 902, "Yes");
addBookToLibrary(books, "Warrior 2", "Ada", 572, "No");

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

function Book(name, author, pages, isRead, id) {
	if (!new.target)
		throw Error("You called a constructor without the keyword 'new'!");
	this.name = name;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
	this.id = id;
}

function addBookToLibrary(books, name, author, pages, isRead) {
	let id = crypto.randomUUID();
	let book = new Book(name, author, pages, isRead, id);
	books.push(book);
	let div = document.createElement("div");
	div.classList.add("book");
	addDeleteBtn(div);
	addBookInfo(div, book);
}

function addDeleteBtn(div) {
	let deleteBtnDiv = document.createElement("div");
	let deleteBtn = document.createElement("button");
	deleteBtn.textContent = "delete";
	deleteBtn.addEventListener("click", function (e) {
		div.remove();
	});
	deleteBtnDiv.appendChild(deleteBtn);
	div.appendChild(deleteBtnDiv);
}

function addBookInfo(div, book) {
	let nameDiv = document.createElement("div");
	let namePara = document.createElement("p");
	namePara.textContent = book.name;
	nameDiv.appendChild(namePara);
	let authorDiv = document.createElement("div");
	let authorPara = document.createElement("p");
	authorPara.textContent = book.author;
	authorDiv.appendChild(authorPara);
	let pagesDiv = document.createElement("div");
	let pagesPara = document.createElement("p");
	pagesPara.textContent = book.pages;
	pagesDiv.appendChild(pagesPara);
	let isReadDiv = document.createElement("div");
	let isReadPara = document.createElement("p");
	isReadPara.textContent = book.isRead;
	isReadDiv.appendChild(isReadPara);
	addChangeIsReadBtn(isReadDiv, isReadPara);
	let idDiv = document.createElement("div");
	let idPara = document.createElement("p");
	idPara.textContent = book.id;
	idDiv.appendChild(idPara);
	div.appendChild(nameDiv);
	div.appendChild(authorDiv);
	div.appendChild(pagesDiv);
	div.appendChild(isReadDiv);
	div.appendChild(idDiv);
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