// Navbar Button Click ++++++++++++++++++++++++++++++++++++++++++++++

var button = document.querySelector('.navbar-toggler');
var img_1 = document.querySelector('.img-1');
var img_2 = document.querySelector('.img-2');
var isImg1Visible = true;

button.addEventListener('click', function () {
  if (isImg1Visible) {
    img_1.classList.add('hide');
    img_2.classList.remove('hide');
    img_2.style.display = 'block';
  } else {
    img_1.classList.remove('hide');
    img_2.classList.add('hide');
  }

  isImg1Visible = !isImg1Visible;
});

// Filter Cards ++++++++++++++++++++++++++++++++++++++++++++++

document.addEventListener('DOMContentLoaded', () => {
  // Get filter buttons and cards
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('#col');

  // Add event listeners to filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Remove 'active' class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));

      // Add 'active' class to the clicked button
      button.classList.add('active');

      // Filter the cards
      filterCards(filter);
    });
  });

  function filterCards(filter) {
    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (filter === 'all' || cardCategory === filter) {
        card.classList.remove('d-none');
      } else {
        card.classList.add('d-none');
      }
    });
  }
});

// Mouse Cursor Effect ++++++++++++++++++++++++++++++++++++++++++++++

document.addEventListener('mousemove', (event) => {
  const follower = document.getElementById('follower');
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Make the follower visible
  follower.classList.add('visible');

  // Update the position of the follower element
  follower.style.left = `${mouseX}px`;
  follower.style.top = `${mouseY}px`;
});

// Optional: Hide the follower when the mouse stops moving
let timer;
document.addEventListener('mousemove', () => {
  const follower = document.getElementById('follower');

  clearTimeout(timer);
  timer = setTimeout(() => {
    follower.classList.remove('visible');
  }, 3000); // Hide after 3 second of inactivity
});


// animated Counter Number ++++++++++++++++++++++++++++++++++++++++++++++

$('.counter').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 7000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});

// Preloader  ++++++++++++++++++++++++++++++++++++++++++++++

const load = document.querySelector(".f1");

window.addEventListener("load", function () {
  load.style.display = "none";
  // console.log("Page loaded");
});
