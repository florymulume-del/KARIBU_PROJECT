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


// PASSWORD SHOW / HIDE
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";

  togglePassword.classList.toggle("fa-eye");
  togglePassword.classList.toggle("fa-eye-slash");
});
// ================
// LOGIN PAGE
// ===============

// LOGIN FUNCTION
function login(event) {
  event.preventDefault(); // stop page refresh

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // VALIDATION
  if (!username || !password) {
    message.style.color = "#a50636";
    message.textContent = "Please fill in all fields.";
    return;
  }

  // DEMO AUTH (replace with backend later)
  if (username === "admin" && password === "1234") {
    message.style.color = "lightgreen";
    message.textContent = "Login successful! Redirecting...";

    // Example redirect
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1200);
  } else {
    message.style.color = "#a50636";
    message.textContent = "Invalid username or password.";
  }
}

// ================
// PROCUREMENT FORM
// ================
tonnage.addEventListener("input", calculate);
costPerTon.addEventListener("input", calculate);
salePrice.addEventListener("input", calculate);

document.getElementById("procurementForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Procurement recorded successfully!");
  this.reset();
  totalCost.textContent = "0";
  profit.textContent = "0";
});

