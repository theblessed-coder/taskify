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
  