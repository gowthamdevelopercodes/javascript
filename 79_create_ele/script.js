let myTag = document.querySelectorAll("p");
myTag.forEach((p) => (p.textContent = "developer"));

/* 
 developer

developer

developer

developer

developer
 */

let newPTag = document.createElement("p");
newPTag.textContent = "created by js";

document.querySelector("body").appendChild(newPTag);
