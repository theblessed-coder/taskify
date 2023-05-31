function validateForm(event) {
  event.preventDefault();

  // Reset error messages
  document.getElementById('password-error').textContent = '';

  // Get input values
  const fullname = document.getElementById('fullname').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validate email
  if (email === '') {
    document.getElementById('email-error').textContent =
      'Email is required.';
    return;
  }

  // Validate password
  if (password === '') {
    document.getElementById('password-error').textContent =
      'Password is required.';
    return;
  }

  // Success message
  //alert('Sign-up successful!');
  document.getElementById('signup-form').reset();
}
