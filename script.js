function showSignup() {
  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
}
function showLogin() {
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
}
function login() {
  window.location.href = "dashboard.html";
}
function logout() {
  window.location.href = "index.html";
}
