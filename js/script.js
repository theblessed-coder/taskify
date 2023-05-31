// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  // Get references to the login and signup forms
  const loginForm = document.getElementById('login-page');
  const signupForm = document.getElementById('signup-page');

  // Get references to the login and signup buttons
  const loginBtn = document.getElementById('login');
  const signupBtn = document.getElementById('signup');

  // Add click event listeners to the buttons
  loginBtn.addEventListener('click', function () {
    // Toggle the visibility of the login form
    loginForm.style.display =
      loginForm.style.display === 'none' ? 'block' : 'none';

    // Hide the signup form
    signupForm.style.display = 'none';
  });

  signupBtn.addEventListener('click', function () {
    // Toggle the visibility of the signup form
    signupForm.style.display =
      signupForm.style.display === 'none' ? 'block' : 'none';

    // Hide the login form
    loginForm.style.display = 'none';
  });
});

// Function to toggle the visibility of the login form
function toggleLoginForm() {
  const loginForm = document.getElementById('login-page');
  loginForm.classList.toggle('hidden');
}

// Function to toggle the visibility of the signup form
function toggleSignupForm() {
  const signupForm = document.getElementById('signup-page');
  signupForm.classList.toggle('hidden');
}

// Function to check if the user credentials provided are in the MySQL database
async function loginFormHandler(event) {
  event.preventDefault();

  // Get the values from the login form
  const username = document.querySelector('#username1').value.trim();
  const password = document.querySelector('#password1').value.trim();

  // Check if the username and password fields are not empty
  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    // Check if the response is OK
    if (response.ok) {
      // If so, redirect to the dashboard page
      document.location.replace('/dashboard');
    } else {
      // Otherwise, display the error
      alert(response.statusText);
    }
  }
}