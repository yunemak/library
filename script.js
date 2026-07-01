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
}

let books = [];
const library = document.querySelector(".library");
const newBookBtn = document.querySelector("#new-book-btn");
const form = document.querySelector("form");
const addBookBtn = document.querySelector("#add-book-btn");

addBookToLibrary(books, "Warrior 1", "Ada", 453, true);
addBookToLibrary(books, "Savior", "Bob", 341, true);
addBookToLibrary(books, "Ipsum", "Lorem", 902, false);
addBookToLibrary(books, "Warrior 2", "Ada", 572, false);

books.forEach((book) => {
	let div = document.createElement("div");
	div.classList.add("book");
	let name = document.createElement("p");
	name.textContent = book.name;
	let author = document.createElement("p");
	author.textContent = book.author;
	let pages = document.createElement("p");
	pages.textContent = book.pages;
	let isRead = document.createElement("p");
	isRead.textContent = book.isRead ? "Yes": "No";
	let id = document.createElement("p");
	id.textContent = book.id;
	div.appendChild(name);
	div.appendChild(author);
	div.appendChild(pages);
	div.appendChild(isRead);
	div.appendChild(id);
	library.appendChild(div);	
});

newBookBtn.addEventListener("click", function (e) {
	form.style.display = "grid";
	addBookBtn.style.display = "block";
	newBookBtn.style.display = "none";	
});

addBookBtn.addEventListener("click", function (e) {
	form.style.display = "none";
	addBookBtn.style.display = "none";
	newBookBtn.style.display = "block";
})