// * let myTodos = [];

/* myTodos.push("get early morning");
myTodos.push("drink cup of water");
myTodos.push("running");
myTodos.push("do exercises");
myTodos.push("eat healthy foods"); */

/* myTodos.push("eat");
myTodos.push("sleep");
myTodos.push("code");
myTodos.push("repeat"); */

/* let findTodo = myTodos.findIndex(function (todo) {
  return todo == "code";
});

console.log(findTodo); */

/* let findTodo = function (todoList, searchItem) {
  let result = todoList.findIndex(function (todo) {
    return todo == searchItem;
  });
  return result;
};

console.log(findTodo(myTodos, "code")); */

// ! 2

let myTodos = [];

myTodos.push("get early morning");
myTodos.push("drink cup of water");
myTodos.push("running");
myTodos.push("do exercises");
myTodos.push("eat healthy foods");

//  * findIndex

/* let findTodo = function (todosList, searchItem) {
  let result = todosList.findIndex(function (todo) {
    return todo.toLowerCase() == searchItem.toLowerCase();
  });
  return result;
};

console.log(findTodo(myTodos, "Eat Healthy FOODs")); */

// ? find

/* let finding = myTodos.find(function (todo) {
    return todo.toLowerCase() == "do exercises";
})

console.log(finding); */

let findTodo = function (todosList, searchItem) {
  let result = todosList.find(function (todo) {
    return todo.toLowerCase() == searchItem.toLowerCase();
  });
  return result;
};

console.log(findTodo(myTodos, "do exeRCisEs"));

// undefined
// do exercises

let finding = myTodos.find(function (todo) {
  console.log(todo.toLowerCase() == "do exercises");
});

/* 
 false
false
false
true
false
 */