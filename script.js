var books = document.querySelectorAll("#book-list li:nth-child(odd) .name");
var list = document.querySelector('#book-list ul');
const forms = document.forms;
console.log(books);
var deleteBut = document.querySelectorAll("#book-list .delete");
//Delete book
/*
Array.from(deleteBut).forEach(function (deleteBut) {
    deleteBut.addEventListener("click", function (e) {
        //e => is the button has class delet i press on it
       if (e.target.className =="delete") {
           const li = e.target.parentElement; //to know which row this button contain
           var ul = li.parentNode;
           ul.removeChild(li);
       }
    });
});
*/
//
list.addEventListener("click", function (e) {
    //e => is the button has class delet i press on it
    if (e.target.className == "delete") {
        const li = e.target.parentElement; //to know which row this button contain
        var ul = li.parentNode;
        ul.removeChild(li);
    }
});
//
//link to change his behavour
var link = document.querySelector("#page-banner a");
link.addEventListener("click", function (e) {
    e.preventDefault();
    e.target.textContent = "hi lolo"; //link=e.target;textContent=innerHTML
});
//add new book
var addForm = document.forms['add-book'];
addForm.addEventListener("submit", function (e) {
    e.preventDefault(); //to avoid refresh the page
    const value = addForm.querySelector('input[type="text"]').value;
    //create
    var li = document.createElement('li');
    var bookName = document.createElement('span');
    var deleteBut = document.createElement('span');
    //equal content innerText
    console.log(value);
    bookName.textContent = value;
    deleteBut.innerHTML = "delete";
    // deleteBut.innerText = 'delete';
    //add class 
    bookName.classList.add('name');
    deleteBut.classList.add('delete');
    //append
    li.appendChild(bookName);
    li.appendChild(deleteBut);
    list.appendChild(li);
});
//check box to hide or display books
const hide = document.querySelector("#hide");
hide.addEventListener("change", function (e) {
    if (hide.checked) {
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }
});
// search books

// Get input element
var searchBok = document.forms['search-books'].querySelector('input');
// Add event listener
searchBok.addEventListener('keyup', searchBook);

function searchBook() {
    // Get value of input
    let value = searchBok.value.toUpperCase();
    // Get names ul => list
    // Get lis from ul
    var lis = list.querySelectorAll("li");
    // Loop through collection-item lis
    for (let i = 0; i < lis.length; i++) {

        const span = lis[i].getElementsByTagName('span')[0];
        // if matching
        if (span.innerHTML.toUpperCase().indexOf(value) > -1) {
            lis[i].style.display = "";
        } else {
            lis[i].style.display = "none";
        }
    }
}
//tabes
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
        console.log(panel);
    
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
});
