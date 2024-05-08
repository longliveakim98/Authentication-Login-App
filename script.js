const formTitle = document.getElementById("form-title");
const confirmPasswordContainer = document.getElementById("confirm-password-container");
const submitButton = document.getElementById("submit");
const toggleLink = document.getElementById("toggle-link");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

function toggleAuth() {
  const isLoginForm = formTitle.textContent === "Login";
  formTitle.textContent = isLoginForm ? "Sign Up" : "Login";
  submitButton.textContent = isLoginForm ? "Sign Up" : "Login";
  toggleLink.textContent = isLoginForm ? "Login" : "Sign Up";
  confirmPasswordContainer.style.display = isLoginForm ? "block" : "none";
}

const users = [];

function login(username, password) {
  const user = users.find(user => username === username && user.password === password);

  if (user) {
    alert("Successful login!");
    window.location.href = "profile.html"
  } else {
    alert("User not found, please sign-up first.");
  }
}

function signUp(username, password, confirmPassword) {
  if (password !== confirmPassword) {
    alert("Password does not match.");
  } else {
    users.push({ username: username, password: password });
    alert("Sign up successful! You can now login.");
    toggleAuth();
  }
}

function handleSubmit() {
  const isLoginForm = formTitle.textContent === "Login";
  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (isLoginForm) {
    login(username, password);
  } else {
    signUp(username, password, confirmPassword);
  }
}