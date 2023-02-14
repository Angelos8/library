let myLibrary = [];
// to access the form, get the form first
let form = document.getElementById('form');
// get the div to display books
let table = document.getElementById('table');

// OBJECT ------------------------------------------------------------------
function Book(title, author, pages, read) {
  // the constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
Book.prototype.info = function() {
  return `${this.title}  ${this.author}  ${this.pages}  ${this.read}`;
}

// create book objects
ob1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, true);
ob2 = new Book("The Hobbit", "J.R.R. Tolkien", 302, true);

// push books to list
myLibrary.push(ob1);
myLibrary.push(ob2);
// OBJECT ------------------------------------------------------------------


function isRead(read){
  if (read){
    return 'Yes';
  }
  else{
    return 'No';
  }
}

function printBookList(){
  table.innerHTML +=` <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Pages</th>
                        <th>Have been read</th>
                        <th>Remove</th>
                      </tr>
  `
  for (let book in myLibrary){
    let readValue = isRead(myLibrary[book].read);
    console.log('readValue = ', readValue);
    table.innerHTML += `<tr>
                          <td>${myLibrary[book].title}</td>
                          <td>${myLibrary[book].author}</td>
                          <td>${myLibrary[book].pages}</td>
                          <td class='change-read'>
                           <button id='bt${book}' value=change> ${readValue} </button>
                          </td>
                          <td> <button id=${book} value='delete'> Delete </button> </td>
                        </tr>`
  }
}


function addBookToLibrary() {
  // And use index, id, or name to access the element. The following accesses the first form element:
  let title = document.getElementById('book-title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('checkbox').checked;
  let obj = new Book(title, author, pages, read);
  myLibrary.push(obj);
  console.log(title);
  console.log(author);
  console.log(pages);
  console.log(read);
                      

}

function clearForm(){
  document.getElementById('book-title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('checkbox').value = '';
}

printBookList();


// EVENT LISTENERS-------------------------------------------------------
// SUBMIT EVENT
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  let title = document.getElementById('book-title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  if (title === '' && author === ''){
    alert('Please insert minimum title and author!');
  }
  else{
    addBookToLibrary();
    table.innerHTML = '';
    printBookList();
    clearForm();
  }
})

// CLICK EVENT 

// the addEventListener listens for an event in the document
// the type of event is click
// once it captures the event it checks the id of the button
// it deletes the object with index buttonID
document.addEventListener('click',(e)=>{
  buttonID = e.target.id;
  buttonValue = e.target.value;
  console.log(`button id = ${buttonID} and value of buttonID ${buttonValue}`);
  if (buttonValue == 'delete'){
    myLibrary.splice(Number(buttonID),1);
    console.log(myLibrary);
    table.innerHTML = '';
    printBookList();
  }

  if (buttonValue== 'change'){
    let index = Number(buttonID.split('bt')[1]);
    myLibrary[index].read = !myLibrary[index].read; 
    table.innerHTML = '';
    printBookList();
  }

});





// PROJECT REQUIREMENTS: 6



