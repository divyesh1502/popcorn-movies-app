$(document).ready(function() {
    // Check if the user is logged in on page load
    checkLoginStatus();

    // Login form submit event
    $('#login').submit(function(event) {
      event.preventDefault();
      var username = $('#username').val();
      var password = $('#password').val();

      // Mocking user data (replace with your actual user data retrieval)
      var users = [
        { "username": "user1", "password": "password1" },
        { "username": "user2", "password": "password2" }
      ];

      var authenticatedUser = users.find(function(user) {
        return user.username === username && user.password === password;
      });

      if (authenticatedUser) {
        // User authenticated, set session and redirect to user dashboard
        sessionStorage.setItem('loggedInUser', JSON.stringify(authenticatedUser));
        window.location.href = 'user.html';
      } else {
        alert('Invalid username or password');
      }
    });
  });

  // Function to check login status
  function checkLoginStatus() {
    var loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      // Redirect if already logged in
      window.location.href = 'user.html';
    }
  }