document.addEventListener('DOMContentLoaded', function() {
  // Initialize particles.js with enhanced configuration
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "repulse": {
          "distance": 100,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  });

  // Carousel Functionality
  let carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;
  const totalItems = carouselItems.length;
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  function showItem(index) {
    carouselItems.forEach((item, i) => {
      item.classList.remove('active');
      if (i === index) {
        item.classList.add('active');
      }
    });
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showItem(currentIndex);
  }

  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  // Auto-slide every 5 seconds
  setInterval(showNext, 5000);
});
document.addEventListener('DOMContentLoaded', function() {
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 80, "density": { "enable": true, "value_area": 800 }},
      "color": { "value": "#ffffff" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5 },
      "size": { "value": 3, "random": true },
      "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
      "move": { "enable": true, "speed": 2 }
    },
    "interactivity": {
      "events": { "onhover": { "enable": true, "mode": "repulse" }},
      "modes": { "repulse": { "distance": 100, "duration": 0.4 }}
    },
    "retina_detect": true
  });
});
// Fetch and update total visit count using CountAPI
fetch('https://api.countapi.xyz/hit/rctvijayawada.org/total-visits')
  .then(response => response.json())
  .then(data => {
    const visitElement = document.getElementById('visitCount');
    if (visitElement) {
      visitElement.textContent = "Total Visitors: " + data.value;
    }
  })
  .catch(error => {
    console.error("Error fetching visit count:", error);
  });
