// If you check the HTML, you will find that the second <li> has the id=secondElement
// You can use that to your advantage like a CSS selector
let element = document.querySelector("#secondElement");
// Your code here
element.parentNode.removeChild(element);