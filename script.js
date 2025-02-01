particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

document.getElementById('hamburgerButton').addEventListener('click', function() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
});


function toggleAccordion(element) {
    // Fecha todos os outros accordions
    const allAccordions = document.querySelectorAll('.accordion');
    allAccordions.forEach((accordion) => {
      if (accordion !== element.parentElement) {
        accordion.classList.remove('open');
      }
    });
  
    // Alterna o estado do accordion clicado
    element.parentElement.classList.toggle('open');
  }