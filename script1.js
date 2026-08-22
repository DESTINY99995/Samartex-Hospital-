const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const username =
    document.getElementById("username").value.trim();

  const password =
    document.getElementById("password").value;

  // ADMIN LOGIN CREDENTIALS
  const correctUsername = "desmondgeraldo72@gmail.com";
  const correctPassword = "DESTINY99@$";

  if (
    username === correctUsername &&
    password === correctPassword
  ) {

    message.style.color = "green";
    message.textContent = "Login successful...";

    // Save login status
    sessionStorage.setItem("adminLoggedIn", "true");

    // Go to admin dashboard
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 800);

  } else {

    message.style.color = "red";
    message.textContent =
      "Incorrect username or password.";

  }

});