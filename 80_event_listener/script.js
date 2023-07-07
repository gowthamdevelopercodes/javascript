/* let ptag = document.querySelector("p");
ptag.textContent = "changed with js"; */

let ptag = document.querySelectorAll("p");
// ptag.textContent = "changed with js";
ptag.forEach((p) => (p.textContent = "changed in js"));

let newPtag = document.createElement("p");
newPtag.textContent = "created with js";

document.querySelector("body").appendChild(newPtag);

document.querySelector("button").addEventListener("click", (event) => {
  //   console.log(alert("hi"));
  //   console.log("button is clicked");
  //   console.log(event);
  // event.target.textContent = "add to cart";
  // document.querySelector('p').textContent = "add to cart";
  /*  let bTag = document.querySelector("p");
  bTag.textContent = "remove from cart"; */
  document.querySelector("p").textContent = "add to cart";
});
