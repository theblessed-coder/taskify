document
  .getElementById('profileForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve the entered values from the form fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;
    const username = document.getElementById('username').value;
    const bio = document.getElementById('bio').value;
    const interests = document.getElementById('interests').value;
    const facebook = document.getElementById('facebook').value;
    const twitter = document.getElementById('twitter').value;
    const instagram = document.getElementById('instagram').value;
    const linkedin = document.getElementById('linkedin').value;
    const other = document.getElementById('other').value;

    // Update the respective HTML elements with the entered values
    document.getElementById('fullName').textContent =
      firstName + ' ' + lastName;
    document.getElementById('username').textContent = '@' + username;
    document.getElementById('age').textContent = age;
    document.getElementById('location').textContent = location;
    document.getElementById('bio').textContent = bio;
    document.getElementById('interests').textContent = interests;
    document.getElementById('facebook').textContent = facebook;
    document.getElementById('twitter').textContent = twitter;
    document.getElementById('instagram').textContent = instagram;
    document.getElementById('linkedin').textContent = linkedin;
    document.getElementById('other').textContent = other;
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
