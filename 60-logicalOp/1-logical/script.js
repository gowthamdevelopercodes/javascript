//* && - both condition are true its worked
//! || - any one condition should be true its worked
//? ! - false condition

let isLoggedIn = false;
let payment = true;

if (isLoggedIn && payment) {
  console.log("watch videos");
} else {
  console.log("buy now");
}

let gLogin = "false";
let fbLogin = "true";

if (gLogin || fblogin) {
  console.log("you have been logged in");
} else {
  console.log("please login");
}
