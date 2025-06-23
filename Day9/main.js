////////////////////////////////////////// Selectors //////////////////////////////////////////////////////////
const allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);
console.log(allParagraphs[1]);

const classElements = document.getElementsByClassName("para");
console.log(classElements);

const singleElement = document.getElementById("head2");
console.log(singleElement);

const elementByQuery = document.querySelector("p");
const classByQuery = document.querySelector(".para2");
const IdByQuery = document.querySelector("#head2");
console.log(elementByQuery,classByQuery,IdByQuery);

const elementsByQuery = document.querySelectorAll(".para2");
console.log(elementsByQuery);

/////////////////////////////////// Getters //////////////////////////////////////////////////////////////////
const container = document.getElementById("container");
console.log(container.innerText);  // 
console.log(container.textContent);
console.log(container.innerHTML);

console.log(container.id,container.className);
// getAttribute()
console.log(container.getAttribute("id"));



//////////////////////// difference between innerText, textContent, innerHTML
// innerText is used to get the text content of an element, excluding any HTML markup. It is similar to the textContent property, but it does not include any text within script or style elements. It also does not include any text within comments. It does not include any text within a textarea element. It does not include any text within a pre element.
// innerHTML is used to get the HTML content of an element, including any HTML markup. It is similar to the outerHTML property, but it does not include the element itself. It does not include any text within a script or style element. It does not include any text within a comment. It does not include any text within a textarea element.It does not include any text within a pre element.
// textContent is used to get the text content of an element, including any text within script or style elements. It includes any text within comments. It includes any text within a textarea element. It includes any text within a pre element.

/////////////////////////////////// Setters //////////////////////////////////////////////////////////////////
const container2 = document.getElementById("container");
// container2.innerText = "Hello <h1>World</h1>";
// container2.innerHTML = "Hello <h1>World</h1>";
// container2.textContent = "Hello"; // does not work in IE8 and below
// console.log(container2.innerHTML);
// console.log(container2.innerText);
// console.log(container2.textContent);

container.className = "background";
// setAttribute
container.setAttribute("id","containerByJs");
console.log(container2.id);

/////////////////////////////////// class List //////////////////////////////////////////////////////////////////
// classList is a property of the Element interface that returns a DOMTokenList object that contains the classes of the element. It is a convenient way to add, remove, and toggle classes on an element.
console.log(elementByQuery.classList);
// add
elementByQuery.classList.add("cl5");
console.log(elementByQuery.classList);
// remove
elementByQuery.classList.remove("cl3");
console.log(elementByQuery.classList);
// toggle
// toggle() method toggles the class name of an element if it is a member of that class list, or adds it to the class list if it is not a member. It does not remove the class name from the class list if it is already a member.
elementByQuery.classList.toggle("cl5"); // if class present then remove , if not not then add
elementByQuery.classList.toggle("cl8");
console.log(elementByQuery.classList);

/////////////////////////////////////// 
console.log(container.children);  // only give list of child tags i.e. -> span, p, article
console.log(container.childNodes); // give all childs
console.log(container.firstChild); // give first child
console.log(container.children[1]); // gives paragraph tag
console.log(container.children[1].parentElement); // gives parent of paragraph tag i.e. div
console.log(container.children[1].nextSibling); // gives next sibling
console.log(container.children[1].nextElementSibling); // gives next tag sibling
console.log(container.children[1].previousElementSibling); /// gives previous sibling

container.children[1].nextElementSibling.innerText = "this is changed by js"; // article text changed


////////////////////////////////////////////////////////////// create a Element ///////////////////////////
const val = "hello Paragraph";
const div = document.createElement("div"); // create element
div.className = "cl1 cl2";
div.id = "dynamic-container";

div.innerHTML = `<p>${val}</p><p>${val} 2</p>`;

console.log(div);
////////////////////////////////////////////////////////////// Push a Element in HTML ///////////////////////////
container.append(div); // same as push // push inside div at last+1 index
container.prepend(div); // same as unshift // push inside div at 0 index
container.before(div); // same as insertBefore // place div after container
container.after(div); // same as insertAfter // place div before container

