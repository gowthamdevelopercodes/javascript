/* console.log(typeof 65);
console.log(typeof "gowtham");
 */

/* let convertRupees = (rupees) => {
    return rupees * 69;
}

console.log(convertRupees(45)); */

/* const convertRupees = (Rupees) => Rupees * 69;
console.log(convertRupees(30)); */

/* 
let convertRupees = (rupees) => {
  if (typeof rupees === "number") {
    return rupees * 70;
  } else {
    console.log("error");
  }
};

console.log(convertRupees(45)); */

let convertRupees = (dollar) => {
  if (typeof dollar === "number") {
    return dollar * 70;
  } else {
    throw Error("Amount need to be In Numbers");
  }
};

console.log(convertRupees(23)); //   1610
// console.log(convertRupees("gowtham"));
console.log("This line will not show if program crashes");

// !  error

//1610
// trycatch.js:30 Uncaught Error: Amount need to be In Numbers
// at convertRupees (trycatch.js:30:11)
// at trycatch.js:35:13

// * op success

// 1610
//This line will not show if program crashes


