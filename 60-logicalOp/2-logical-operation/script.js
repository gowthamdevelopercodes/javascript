// result = a || b;

/* alert(true || true); // true
alert(true || false); //true
alert(false || true); // true
alert(false || false); // false */

/* if (1 || 0) {
  alert("truthy");
} */

// * step 1

/* let hour = 9;

if (hour < 10 || hour > 18) {
  alert('office is closed')
}
 */

// ? step 2

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 12 || isWeekend) {
  alert("office is closed");
}
