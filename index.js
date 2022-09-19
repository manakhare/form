// //Variables

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const check = document.getElementById("cpassword");

const passwordMsg =
  "Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number and 1 special character in (!@#$%^&*)";
const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,30}$/;


function validateForm() {
  if (!validateName())
    setError(username, "Username must be between 3 and 25 characters");
  else if (!validatePassword()) setError(password, passwordMsg);
  else if (!matchPasswords()) setError(check, "Passwords do not match");
  else {
    alert("You are signed in!");
  }
}

function validateName() {
  const usernameVal = username.value.trim();
  if (usernameVal === "" || usernameVal.length < 3 || usernameVal.length > 25) {
    setError(username, "Username must be between 3 and 25 characters");
    return false;
  } else {
    setSuccess(username);
    return true;
  }
}

function validatePassword() {
  const passwordVal = password.value.trim();

  if (passwordVal === "") {
    setError(password, "Password cannot be blank");
    return false;
  } else if (!checkPassword(passwordVal)) {
    setError(password, passwordMsg);
    return false;
  } else {
    setSuccess(password);
    return true;
  }
}

function matchPasswords() {
  const passwordVal = password.value;
  const checkVal = check.value;

  if (passwordVal === checkVal) {
    setSuccess(check);
    return true;
  } else {
    setError(check, "Passwords do not match!");
    return false;
  }
}


function setError(input, message) {
//   console.log(message);
  //access parent div element
  const ele = input.parentElement;
  const small = ele.querySelector("small");
  small.innerHTML = message;

  //   small.style.visibility = "visible";
  small.style.color = "red";
  input.style.borderColor = "red";
  //   ele.classList.add("ele error");
}

function setSuccess(input) {
//   console.log("Success");
  const ele = input.parentElement;
  const small = ele.querySelector("small");
  small.innerText = "";
  input.style.borderColor = "green";
  //   ele.className = "ele success";
}

function checkPassword(pwd) {
  return pwd.match(regex);
}


