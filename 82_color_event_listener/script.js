/* document.querySelector("#idtwo").addEventListener("input", (event) => {
    // console.log(event);
  //   console.log(event.target.value);
}); */

function submitvalue() {
  /* let myValue = document.querySelector("#idtwo");
    console.log(myValue); */
  let myValue = document.getElementById("inp").value;
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

function bgcolor() {
  let bg = document.querySelector("body");
  bg.style.background = "purple";
}

function revert() {
  let bg = document.querySelector("body");
  bg.style.background = "#fff";
}

paragraph = () => {
  let para = document.querySelector("ul");
  let list = document.createElement("li");
  list.textContent = "created by gowtham";
  para.appendChild(list);
};
