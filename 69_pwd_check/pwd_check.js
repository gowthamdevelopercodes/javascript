let email = "         gowtham007@gmail.com          ";
let passWord = "12345";

// console.log(email.toUpperCase());
// console.log(email.trim());

/*         GOWTHAM007@GMAIL.COM
gowtham007@gmail.com
 */

let emailCheck = function (user) {
  if (user.includes("@")) {
    return true;
  } else {
    return false;
  }
};

console.log(emailCheck(email));

function passwordCheck(pwdCheck) {
  if (pwdCheck.includes("12345") && pwdCheck.length > 8) {
    return true;
  } else {
    return false;
  }
}

console.log(passwordCheck(passWord));

/* 
D:\gowthamangel84\stack\frontend\zfra\js\class\69_pwd_check>node pwd_check.js
true
false
*/
