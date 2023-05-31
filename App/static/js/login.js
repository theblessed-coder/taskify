function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  document.getElementById("usernameError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  // Get input values
  const username = document.getElementById("username1").value;
  const password = document.getElementById("password1").value;

  // Validate input fields
  if (username.trim() === "") {
    document.getElementById("usernameError").textContent =
      "Username is required";
    return;
  }

  if (password.trim() === "") {
    document.getElementById("passwordError").textContent =
      "Password is required";
    return;
  }

  // Simulated user credentials
  const userCredentials = {
    username: "exampleuser",
    password: "examplepassword",
  };

  // Check if credentials match
  if (
    username.trim() === userCredentials.username &&
    password.trim() === userCredentials.password
  ) {
    // Redirect to dashboard upon successful login
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}
