// function android() {
//   console.log(`i'm an android function`);
// }

// android(); // ! i'm an android function

// let ios = function apple() {
//   console.log(`im an ios function`);
// };

// console.log(ios); //! [Function: apple]
// ios(); // !  im an ios function

// * arrow type function

let apple = () => {
  console.log(`i am an apple and arrow  function`);
};

apple();

// ? single line arrow function

let android = (droid) => `i am an ${droid} and arrow  function`;

console.log(android("gowtham"));

let myTodos = [
  {
    title: "go to gym",
    isDone: true,
  },
  {
    title: "record breaking",
    isDone: false,
  },
  {
    title: "Hard Working",
    isDone: true,
  },
];

console.log(myTodos);
/* [
    { title: 'go to gym', isDone: true },
    { title: 'record breaking', isDone: false },
    { title: 'Hard Working', isDone: true }
  ] */
console.log(myTodos[0]);  // ! { title: 'go to gym', isDone: true }


