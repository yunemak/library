function Book(name, author, pages, id) {
	if (!new.target)
		throw Error("You called a constructor without the keyword 'new'!");
	this.name = name;
	this.author = author;
	this.pages = pages;
	this.id = id;
}

function addBookToLibrary(books, name, author, pages) {
	let id = crypto.randomUUID();
	let book = new Book(name, author, pages, id);
	books.push(book);
}

let books = [];
const library = document.querySelector(".library");


addBookToLibrary(books, "Warrior 1", "Ada", 453);
addBookToLibrary(books, "Savior", "Bob", 341);
addBookToLibrary(books, "Ipsum", "Lorem", 902);
addBookToLibrary(books, "Warrior 2", "Ada", 572);

books.forEach((book) => {
	let div = document.createElement("div");
	div.classList.add("book");
	let name = document.createElement("p");
	name.textContent = book.name;
	let author = document.createElement("p");
	author.textContent = book.author;
	let pages = document.createElement("p");
	pages.textContent = book.pages;
	let id = document.createElement("p");
	id.textContent = book.id;
	div.appendChild(name);
	div.appendChild(author);
	div.appendChild(pages);
	div.appendChild(id);
	library.appendChild(div);	
});