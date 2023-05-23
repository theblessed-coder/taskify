function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  document.getElementById("usernameError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  // Get input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

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

  // Perform login logic here
  // You can send the data to a server for authentication or perform client-side validation
  // For this example, we'll just display a success message
  alert("Login successful!");
}
