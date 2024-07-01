async function getAllBooks() {
    const response = await fetch('/books/');
    const books = await response.json();

    displayResponse(books);
}

async function getBookById() {
    const bookId = prompt("Enter Book ID:");
    const response = await fetch(`/books/${bookId}/`);
    const book = await response.json();
    displayResponse(book);
}

async function getBooksByAuthor() {
    const authorId = prompt("Enter Author ID:");
    const response = await fetch(`/authors/${authorId}/books/`);
    const books = await response.json();
    displayResponse(books);
}

function displayResponse(data) {
    const responseDiv = document.getElementById("response");
    responseDiv.innerHTML = JSON.stringify(data, null, 2);
