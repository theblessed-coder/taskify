function validateForm(event) {
  event.preventDefault();

  // Reset error messages
  document.getElementById('username-error').textContent = '';
  document.getElementById('password-error').textContent = '';

  // Get input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validate username
  if (username === '') {
    document.getElementById('username-error').textContent =
      'Username is required.';
    return;
  }

  // Validate password
  if (password === '') {
    document.getElementById('password-error').textContent =
      'Password is required.';
    return;
  }

  // Success message
  alert('Sign-up successful!');
  document.getElementById('signup-form').reset();
}
