document
  .getElementById('profileForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve the entered values from the form fields
    const fullName = document.getElementById('fullName').value;
    const location = document.getElementById('location').value;
    const username = document.getElementById('username').value;
    const bio = document.getElementById('bio').value;
    const interests = document.getElementById('interests').value;

    // Update the respective HTML elements with the entered values
    document.getElementById('fullName').textContent = fullName;
    document.getElementById('username').textContent = '@' + username;
    document.getElementById('location').textContent = location;
    document.getElementById('bio').textContent = bio;
    document.getElementById('interests').textContent = interests;
  });

document
  .getElementById('profilePicInput')
  .addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      document.getElementById('profilePic').src = e.target.result;
    };

    reader.readAsDataURL(file);
  });

// Handle profile picture selection
document
  .getElementById('profilePicInput')
  .addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      document.getElementById('profilePic').src = e.target.result;
    };

    reader.readAsDataURL(file);
  });
