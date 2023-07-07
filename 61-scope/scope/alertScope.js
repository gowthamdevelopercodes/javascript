// * scope such as let , var, const
/* {
  let morning = "good morning have a nice day";
  alert(morning);
}

alert(morning); */

//?  We can use this to isolate a piece of code that does its own task, with variables that only belong to it:

/* {
  let message = "good morning";
  alert(message);
}

{
  let message = "good evening";
  alert(message);
} */

//There’d be an error without blocks

// *  There’d be an error without blocks, if we use let with the existing variable name:

//show message

/* let message = "good morning";
alert(message);
 */

// show another message

/* let message = "good morning";
alert(message); */
