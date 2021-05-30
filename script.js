//Add element to a page
const body = document.body;
//body.append("Hello World");

const div = document.createElement("div");
//div.innerText = "Here is your div";
//div.textContent = " Here is"

//This renders HTML tags into an element
//div.innerHTML("<strong>Hello World!</strong>");

//This is more secure than div.InnerHTML
const strong = document.createElement("strong");
strong.innerText = "Hello World 2";
div.append(strong);

body.append(div);

const divHTML = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

//Remove elements from the DOM. 
spanHi.remove(spanHi)
spanBye.remove(spanBye)