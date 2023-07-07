let myTag = document.querySelectorAll(".class-one");

console.log(myTag);
console.log(myTag[0]);

/* 

NodeList(5) [p.class-one, p.class-one, p.class-one, p.class-one, p.class-one]
script.js:4 p.class-one

*/

let firstPtag = document.querySelectorAll("p");
// firstPtag.textContent = "javascript coder gowtham";

// javascript coder gowtham

console.log(firstPtag);

/* 
NodeList(6) [p, p.class-one, p.class-one, p.class-one, p.class-one, p.class-one, textContent: 'javascript coder gowtham']
0
: 
p
1
: 
p.class-one
2
: 
p.class-one
3
: 
p.class-one
4
: 
p.class-one
5
: 
p.class-one
textContent
: 
"javascript coder gowtham"
length
: 
6
[[Prototype]]
: 
NodeList
*/

let firstP2tag = document.querySelector("p");
firstP2tag.textContent = "javascript coder ";

// javascript coder

console.log(firstP2tag);

let ptagarrow = document.querySelectorAll("p");

ptagarrow.forEach((p) => {
  // console.log(p);
  p.textContent = "changed using loops in js";
  // console.log(p);
  p.remove();
});

ptagarrow.forEach((p) => (p.textContent = "changed using loops in js"));

/* 
changed using loops in js

changed using loops in js

changed using loops in js

changed using loops in js

changed using loops in js

changed using loops in js
*/
