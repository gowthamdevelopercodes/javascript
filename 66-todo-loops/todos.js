// let myTodos = ["drink 1 litre water", "get ready to workout", "bathing", "eat"];

// myTodos.push("sleepwell");
// myTodos.unshift("get early morning");

/* 
1.drink 1 litre water
2.get ready to workout
3.bathing
4.eat
5.sleepwell 
*/

// myTodos.forEach(function (todo, pos) {
//   console.log(`${pos + 1}.${todo}`);
// });

/* 1.drink 1 litre water
2.get ready to workout
3.bathing
4.eat */

let myTodos = [];

// myTodos.push("eat");
// myTodos.push("sleep");
// myTodos.push("code");
// myTodos.push("repeat");

// myTodos.push("eat", "sleep", "code", "repeat");

myTodos.push("eat", "sleep", "code", "repeat");

// myTodos.forEach(function (todo, pos) {
//   console.log(`${pos + 1}.${todo}`);
// });

/* 
1.eat
2.sleep
3.code
4.repeat
 */

for (i = 0; i < myTodos.length; i++) {
  console.log(`${i + 1}.${myTodos}`);
}

/* 0.eat,sleep,code,repeat
1.eat,sleep,code,repeat
2.eat,sleep,code,repeat
3.eat,sleep,code,repeat */

for (i = 0; i < myTodos.length; i++) {
  console.log(`${i + 1}.${myTodos[i]}`);
}

/* 
1.eat
2.sleep
3.code
4.repeat
*/
