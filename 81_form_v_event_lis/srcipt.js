document.querySelector("#idtwo").addEventListener("input", (event) => {
  //   console.log(event);
  //   console.log(event.target.value);
});

function search() {
  /* let myValue = document.querySelector("#idtwo");
  console.log(myValue); */
  let myValue = document.getElementById("idtwo").value;
  //   console.log(myValue);
  if (myValue < 1 || myValue > 20) {
    console.log("not an invalid input");
  } else {
    console.log(myValue);
  }
/*   if (myValue == "fuck") {
    console.log("you can't search this word");
  } else {
    console.log(myValue);
  } */
}
