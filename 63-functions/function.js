function sayHello(name) {
  console.log(`${name}`);
}

sayHello("gowtham");

function fullname(firstName, secondName) {
  console.log(`${firstName} ${secondName}`);
}

let name2 = "prem";

fullname(name2, "gowtham", "m");

function addTwoNumbers(num1, num2) {
  // console.log(`${num1} ${num2}`);
  // console.log(num1 + num2);
  let added = num1 + num2;
  return added;
}

// addTwoNumbers(122,433);
// console.log(addTwoNumbers(122,433));

console.log(`your result is ${addTwoNumbers(190, 100)}`);
