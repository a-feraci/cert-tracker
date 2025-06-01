particlesJS("particles-js", {
    particles: {
      number: {
        value: 75,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#00ffe0" },
      shape: { type: "circle" },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: false }
      },
      size: {
        value: 2,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ffe0",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
  