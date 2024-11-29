document.addEventListener("DOMContentLoaded", () => {
  let images = document.querySelectorAll(".image-gallery img");
  let currentIndex = 0;

  function showNextImage() {
      images.forEach((img) => img.classList.remove("active"));
      images[currentIndex].classList.add("active");
      currentIndex = (currentIndex + 1) % images.length;
  }

  if (window.matchMedia("(max-width: 600px)").matches) {
      images[0].classList.add("active");
      setInterval(showNextImage, 1500);
  }
});

let hamburgerMenu = document.querySelector('.hamburger-menu');
let navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

window.addEventListener("load", function () {
  let links = document.querySelectorAll(".nav-links a");
  let currentPage = window.location.pathname;

  links.forEach(link => {
      let linkPath = link.getAttribute("href");

      if (currentPage.includes(linkPath)) {
          link.classList.add("active");
      } else {
          link.classList.remove("active");
      }
  });
});

$(document).ready(function () {
  $('#forgotPasswordLink').on('click', function (event) {
    event.preventDefault();  
    $('#passwordResetPopup').fadeIn();
    $('#popup-overlay').fadeIn();
  });

  $('#popup-overlay').on('click', function () {
    $('#passwordResetPopup').fadeOut();
    $('#popup-overlay').fadeOut();
  });

  $('#resetPasswordForm').on('submit', function (event) {
    event.preventDefault();
    const email = $('#email').val();
    if (email) {
      alert("Password reset link has been sent to " + email);
      $('#passwordResetPopup').fadeOut();
      $('#popup-overlay').fadeOut();
    } else {
      alert("Please enter a valid email.");
    }
  });

  $('#loginForm').on('submit', function (event) {
    event.preventDefault();
    alert('Thank you for joining us!'); // Thank you message
    $('#username').val(''); // Clear the form fields
    $('#password').val('');
    $('#rememberMe').prop('checked', false);
    setTimeout(function () {
      window.location.href = 'index.html'; // Redirect after 2 seconds
    }, 2000);
  });

  $('#rememberMe').on('change', function () {
    if ($(this).is(':checked')) {
      localStorage.setItem('username', $('#username').val());
      localStorage.setItem('password', $('#password').val());
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
  });
  if (localStorage.getItem('username') && localStorage.getItem('password')) {
    $('#username').val(localStorage.getItem('username'));
    $('#password').val(localStorage.getItem('password'));
    $('#rememberMe').prop('checked', true);
  }
});
