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

