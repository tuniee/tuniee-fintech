// Login Form validation
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "user" && password === "webdev") {
    alert("You have successfully logged in.");
    window.location.href = "index.html";
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});

// Signup Form validation
const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-form-submit");
const signupErrorMsg = document.getElementById("signup-error-msg");

signupButton.addEventListener("click", (e) => {
  e.preventDefault();
  const fullname = signupForm.fullname.value;
  const email = signupForm.email.value;
  const username = signupForm.username.value;
  const password = signupForm.password.value;

  if (fullname === "" || email === "" || username === "" || password === "") {
    signupErrorMsg.innerHTML = "Please fill out all fields.";
    signupErrorMsg.style.opacity = 1;
  } else {
    alert("Thank you for signing up! You can now login.");
    window.location.href = "login.html";
  }
});


const liTags = document.querySelectorAll('li');

liTags.forEach(li => {
  li.addEventListener('click', () => {
    li.classList.toggle('clicked');
  });
});
