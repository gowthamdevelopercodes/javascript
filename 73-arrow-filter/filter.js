const myTodos = [
  {
    title: "eat healthy foods",
    isDone: true,
  },
  {
    title: "maintaining physical fitness",
    isDone: true,
  },
  {
    title: "more active in work",
    isDone: false,
  },
];

/* let filterTodos = myTodos.filter((todo) => {
  console.log(todo.title);
});

console.log(filterTodos); */

/* let filterTodos = myTodos.filter((todo) => {
  return todo.isDone === true;
});

console.log(filterTodos); */

// ? using arrow function

let filterTodos = myTodos.filter((todo) => todo.isDone === false);

console.log(filterTodos);
