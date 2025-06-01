// === Particle Background ===
particlesJS.load("particles-js", "particles-config.js", function () {
  console.log("Particles.js config loaded!");
});

// === Confetti ===
function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  const confetti = confetti || window.confetti.create(canvas, { resize: true });
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });
}

// === Badge Reveal Logic ===
function checkAndRevealBadge(moduleId, checkboxClass, badgeId) {
  const checkboxes = document.querySelectorAll('.' + checkboxClass);
  const badge = document.getElementById(badgeId);
  const completed = Array.from(checkboxes).every(checkbox => checkbox.checked);
  if (completed && badge) {
    badge.style.display = 'block';
  } else if (badge) {
    badge.style.display = 'none';
  }
}

// === Main Progress Bar ===
function updateOverallProgress() {
  const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
  const checked = Array.from(allCheckboxes).filter((cb) => cb.checked).length;
  const percent = (checked / allCheckboxes.length) * 100;
  document.getElementById("overallProgress").style.width = percent + "%";

  if (percent >= 100) {
    document.getElementById("certCompleteBadge").style.display = "block";
    launchConfetti();
  }
}

// === Background Effect Switching ===
function switchBackground(value) {
  const particlesContainer = document.getElementById("particles-js");
  particlesContainer.style.display = value === "particles" ? "block" : "none";

  if (value === "glitch") {
    document.body.classList.add("glitch");
  } else {
    document.body.classList.remove("glitch");
  }
}

// === ASCII Rain & Neon Grid Effects ===
let asciiCanvas, asciiCtx, asciiInterval;
function toggleAsciiRain() {
  const isChecked = document.getElementById("asciiToggle").checked;
  if (isChecked) {
    asciiCanvas = document.createElement("canvas");
    asciiCanvas.id = "asciiRain";
    asciiCanvas.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;z-index:-2;pointer-events:none;`;
    document.body.appendChild(asciiCanvas);
    asciiCtx = asciiCanvas.getContext("2d");
    const letters = Array(256).join("1").split("");
    let fontSize = 14;
    asciiCanvas.width = window.innerWidth;
    asciiCanvas.height = window.innerHeight;
    asciiInterval = setInterval(() => {
      asciiCtx.fillStyle = "rgba(0, 0, 0, 0.05)";
      asciiCtx.fillRect(0, 0, asciiCanvas.width, asciiCanvas.height);
      asciiCtx.fillStyle = "#0f0";
      letters.forEach((y_pos, index) => {
        const text = String.fromCharCode(3e4 + Math.random() * 33);
        const x_pos = index * fontSize;
        asciiCtx.fillText(text, x_pos, y_pos);
        letters[index] = y_pos > 100 + Math.random() * 1e4 ? 0 : y_pos + fontSize;
      });
    }, 50);
  } else {
    clearInterval(asciiInterval);
    if (asciiCanvas) asciiCanvas.remove();
  }
}

function toggleNeonGrid() {
  const isChecked = document.getElementById("gridToggle").checked;
  document.body.classList.toggle("neon-grid", isChecked);
}

// === Event Binding for All Checkboxes ===
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("input[type='checkbox']").forEach((cb) => {
    cb.addEventListener("change", () => {
      updateOverallProgress();
      // You can add per-module update logic here
    });
  });
  updateOverallProgress();
});
