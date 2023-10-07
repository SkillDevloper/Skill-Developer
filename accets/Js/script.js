// animated Counter Number ++++++++++++++++++++++++++++++++++++++++++++++

$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1200,
  });
});

// back to top  ++++++++++++++++++++++++++++++++++++++++++++++

let toTop = document.querySelector('.back-to-top');

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 500) {
    toTop.classList.add("on");
  } else {
    toTop.classList.remove("on");
  }
});

let Mode = document.querySelector('.mode');

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 500) {
    toTop.classList.add("on");
    Mode.style.opacity = "1";
    Mode.style.pointerEvents = "auto";
  } else {
    toTop.classList.remove("on");
    Mode.style.opacity = "0";
    Mode.style.pointerEvents = "none";
  }
});


// Preloader  ++++++++++++++++++++++++++++++++++++++++++++++

const load = document.getElementById("load");

window.addEventListener("load", function () {
  load.style.display = "none";
  console.log("Page loaded"); // Logging a message
});


// Form Validation  ++++++++++++++++++++++++++++++++++++++++++++++

function validateForm() {
  // Get form elements
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");

  // Get the values of the inputs
  var name = nameInput.value.trim();
  var email = emailInput.value.trim();

  // Check if name is empty
  if (name === "") {
    alert("Name cannot be empty");
    nameInput.focus();
    return false;
  }

  // Check if email is empty
  if (email === "") {
    alert("Email cannot be empty");
    emailInput.focus();
    return false;
  }

  // Check if email is valid using a simple regular expression
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    emailInput.focus();
    return false;
  }

  // If all validations pass, the form is valid
  return true;
}

// Attach the validation function to the form's submit event
var form = document.getElementById("myForm");
form.onsubmit = validateForm;


// Dark Mode  ++++++++++++++++++++++++++++++++++++++++++++++

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-Theme");
}
