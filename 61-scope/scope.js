// scope in js

let name1 = "gowtham";
const name2 = "prem";
var name3 = "satheesh";

if (true) {
  const name5 = "santhosh";
  var name6 = "gowtham";
  let name4 = "vinoth";
  console.log(name4);
  console.log(name1);
}

//console.log(name4); // name4  is not defined error throwing
//console.log(name5); // name5 is not defined error throwing

if (true) {
  let name7 = "kabi";
  console.log(name7);
}

console.log(name6);
console.log(name7);
