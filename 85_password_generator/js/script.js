let keyList = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
let password = "";

let generatePass = (pLength) => {
  password = "";
  for (i = 0; i < pLength; i++) {
    password += keyList.charAt(Math.floor(Math.random() * keyList.length));
  }
  return password;
};

// console.log(generatePass);

// console.log(keyList.charAt(0));

let passwordGen = (passLen) => {
    document.output.password.value = generatePass(passLen);
}

// console.log(passwordGen);
