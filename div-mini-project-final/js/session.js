$(document).ready(function() {
    var loggedInUser = sessionStorage.getItem('loggedInUser');

    if (!loggedInUser) {
      // User is not logged in, redirect to login page
      window.location.href = '/html/user.html';
    }

    // Logout button click event
    $('#logout').click(function() {
      // Remove logged-in user session and redirect to login page
      sessionStorage.removeItem('loggedInUser');
      window.location.href = '/html/index.html';
    });
});