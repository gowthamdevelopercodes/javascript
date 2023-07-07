// const convertRupees = (dollar) => {
//   if (typeof dollar === "number") {
//     return dollar * 69;
//   } else {
//     throw Error(`Amount need to be in Numbers`);
//   }
// };

// console.log(convertRupees(45));
// // console.log(convertRupees("one"));
// console.log("if an error this line will not show");

const convertRupees = (dollar) => {
  if (typeof dollar === "number") {
    return dollar * 69;
  } else {
    throw Error(`Amount need to be in Numbers`);
  }
};

//console.log(convertRupees(45));
// // console.log(convertRupees("one"));
// console.log("if an error this line will not show");

try {
  // console.log(convertRupees(23));
  console.log(convertRupees("one"));
} catch (e) {
  console.log(e);
  // ! not using throw error in catch block
  //  throw Error('not using this')
  // console.error(e)
}
console.log("This line will not show If program crashes");
