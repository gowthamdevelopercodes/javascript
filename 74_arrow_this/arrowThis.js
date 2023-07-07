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

const filterTodos = myTodos.filter((todo) => todo.isDone === false);

console.log(filterTodos);

/* let phone = {
  title: "samsung",
  price: "20,000rs",
  desp: function () {
    return `my phone price is ${price}`;
  },
};

console.log(phone.desp()); */

// ! ReferenceError: price is not defined

/* let phone = {
  title: "samsung",
  price: "20,000rs",
  desp: function () {
    return `my phone price is ${this.price}`;
  },
};

console.log(phone.desp()); */

// * op

/*  [ { title: 'more active in work', isDone: false } ]
 my phone price is 20,000rs */

let phone = {
  title: "samsung",
  price: "20,000rs",
  desp: () => {
    return `my phone price is ${this.price}`;
  },
};

console.log(phone.desp());

// ! my phone price is undefined

// ? arrow function cant work this keyword

let mobilePhone = {
  title: "samsung",
  price: "20,000rs",
  desp: () => `my phone price is ${this.price}`,
};

console.log(mobilePhone.desp());
