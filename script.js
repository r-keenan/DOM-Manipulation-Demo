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
spanHi.remove(spanHi);
spanBye.remove(spanBye);

//Add back to the DOM
divHTML.append(spanHi);
divHTML.append(spanBye);

//You can use class notation instead of using getAttribute
//console.log(spanHi.getAttribute("id"));
console.log(spanHi.id);
console.log(spanHi.title);

//this changes the title of the spanHi tag from "hi" to "sayHello"
spanHi.setAttribute("title", "sayHello");
console.log(spanHi.title);

//changing title back to the original
spanHi.title = "hello";
console.log(spanHi.title);
