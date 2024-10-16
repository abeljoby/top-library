const myLibrary = [
    {id:1,title: 'Harry Potter',author: 'JK Rowling',read: false},
    {id:2,title: '1984',author: 'George Orwell',read: false},
    {id:3,title: 'Harry Potter',author: 'JK Rowling',read: false},
];

function Book(id,title,author,read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
}

function createBook(id) {
    const svgNS = "http://www.w3.org/2000/svg"; 
    const svg = document.createElementNS(svgNS, "svg");

    // Set attributes for the SVG
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    // svg.setAttribute("width", "24px");
    // svg.setAttribute("height", "24px");
    svg.setAttribute("viewBox", "0 -960 860 960");
    svg.setAttribute("fill", "#ffa500");
    svg.setAttribute("id",`${id}`);

    // Assign a class to the SVG
    svg.classList.add("my-svg-class");

    // Create the <path> element and set its attributes
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", "M240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h440v640H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-640h80v720H240Zm120-240h240v-480H360v480Zm-80 0v-480h-40q-17 0-28.5 11.5T200-760v447q10-3 19.5-5t20.5-2h40Zm-80-480v487-487Z");

    svg.appendChild(path);

    return svg;
}

function addBook(newTitle,newAuthor,newRead) {
    let bookId = myLibrary.length;
    bookId++;
    myLibrary.push(new Book(bookId+1,newTitle,newAuthor,newRead));
    const book = document.createElement("div");
    const svgc = document.createElement("div");
    svgc.classList.add("svg-container");
    const svg = createBook(bookId);
    addBookListener(svgc);
    svgc.append(svg);
    book.append(svgc);
    book.classList.add("book");
    const title = document.createElement("span");
    title.classList.add("title");
    title.textContent = newTitle;
    book.appendChild(title);
    const author = document.createElement("span");
    author.classList.add("author");
    author.textContent = newAuthor;
    book.appendChild(author);
    // const read = document.createElement("span");
    // read.classList.add("read");
    // read.textContent = newRead;
    // book.appendChild(read);
    book.id = `book${bookId}`;
    grid.appendChild(book);
}

function displayBooks() {
    for (const [i,b] of myLibrary.entries()) {
        const book = document.createElement("div");
        const svgc = document.createElement("div");
        svgc.classList.add("svg-container");
        const svg = createBook(i+1);
        addBookListener(svgc);
        svgc.append(svg);
        book.append(svgc);
        book.classList.add("book");
        const title = document.createElement("span");
        title.classList.add("title");
        title.textContent = b.title;
        book.appendChild(title);
        const author = document.createElement("span");
        author.classList.add("author");
        author.textContent = b.author;
        book.appendChild(author);
        // const read = document.createElement("span");
        // read.classList.add("read");
        // read.textContent = b.read;
        // book.appendChild(read);
        book.id = `book${i+1}`;
        grid.appendChild(book);
    }
}

function addBookListener(svgc) {
    svgc.addEventListener("click",(e) => {
        e.currentTarget.firstChild.firstChild.getAttribute("d")=="M240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h440v640H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-640h80v720H240Zm120-240h240v-480H360v480Zm-80 0v-480h-40q-17 0-28.5 11.5T200-760v447q10-3 19.5-5t20.5-2h40Zm-80-480v487-487Z"?e.currentTarget.firstChild.firstChild.setAttribute("d", "M270-80q-45 0-77.5-30.5T160-186v-558q0-38 23.5-68t61.5-38l395-78v640l-379 76q-9 2-15 9.5t-6 16.5q0 11 9 18.5t21 7.5h450v-640h80v720H270Zm90-233 200-39v-478l-200 39v478Zm-80 16v-478l-15 3q-11 2-18 9.5t-7 18.5v457q5-2 10.5-3.5T261-293l19-4Zm-40-472v482-482Z"):e.currentTarget.firstChild.firstChild.setAttribute("d", "M240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h440v640H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-640h80v720H240Zm120-240h240v-480H360v480Zm-80 0v-480h-40q-17 0-28.5 11.5T200-760v447q10-3 19.5-5t20.5-2h40Zm-80-480v487-487Z");
        let bookId = +e.currentTarget.firstChild.getAttribute("id");
        myLibrary[bookId-1].read = myLibrary[bookId-1].read?false:true;
    });
}

const grid = document.querySelector(".books");

displayBooks();
addBook("a","b",false);