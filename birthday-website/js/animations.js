(function () {
  const confettiColors = ["#BDE0FE", "#CDB4DB", "#FFC8DD", "#F6D58A", "#C9F2E5"];

  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createConfetti(amount = 70) {
    for (let index = 0; index < amount; index += 1) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.left = `${randomBetween(0, 100)}vw`;
      piece.style.background = confettiColors[index % confettiColors.length];
      piece.style.animationDelay = `${randomBetween(0, 0.45)}s`;
      document.body.appendChild(piece);
      piece.addEventListener("animationend", () => piece.remove());
    }
  }

  function createFireworks(amount = 34) {
    const centerX = randomBetween(25, 75);
    const centerY = randomBetween(18, 55);
    for (let index = 0; index < amount; index += 1) {
      const piece = document.createElement("span");
      const angle = (Math.PI * 2 * index) / amount;
      const distance = randomBetween(60, 170);
      piece.className = "firework-piece";
      piece.style.setProperty("--x", `${centerX}vw`);
      piece.style.setProperty("--y", `${centerY}vh`);
      piece.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
      piece.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
      piece.style.background = confettiColors[index % confettiColors.length];
      document.body.appendChild(piece);
      piece.addEventListener("animationend", () => piece.remove());
    }
  }

  function observeReveals() {
    const reveals = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      reveals.forEach((element) => element.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    reveals.forEach((element) => observer.observe(element));
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove("hidden");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.add("hidden"), 3200);
  }

  function chime(frequency = 660, duration = 0.08) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.frequency.value = frequency;
    oscillator.type = "sine";
    gain.gain.value = 0.04;
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + duration);
    oscillator.addEventListener("ended", () => context.close());
  }

  window.birthdayAnimations = {
    confetti: createConfetti,
    fireworks: createFireworks,
    observeReveals,
    showToast,
    chime
  };

  document.addEventListener("DOMContentLoaded", observeReveals);
})();
