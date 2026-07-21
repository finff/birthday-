(function () {
  let galleryIndex = 0;
  let heroPhotoClicks = 0;
  const memoryClasses = ["memory-one", "memory-two", "memory-three", "memory-four"];
  const typingMessages = [
    "You are one of the best things that has ever happened to me.",
    "Loving you makes even ordinary days feel special.",
    "I hope your birthday is as beautiful as your heart.",
    "Thank you for being my safe place and my favourite person.",
    "Saya mungkin tidak sempurna, tapi kasih sayang saya untuk awak sentiasa ikhlas.",
    "Semoga senyuman awak hari ini kekal untuk hari-hari yang akan datang.",
    "I choose you today, tomorrow, and every day after that."
  ];

  function playMusic() {
    const audio = document.getElementById("bgMusic");
    if (!audio) return;
    audio.volume = Number(document.getElementById("volumeMusic")?.value || 0.45);
    audio.play().catch(() => {
      window.birthdayAnimations?.showToast("Add assets/music/our-song.mp3 to play your song.");
    });
  }

  function openMainSite() {
    document.getElementById("giftBox")?.classList.add("open");
    window.birthdayAnimations?.confetti(100);
    window.birthdayAnimations?.chime(740, 0.12);
    window.setTimeout(() => {
      document.getElementById("openingScreen")?.classList.add("opened");
      document.getElementById("main")?.classList.remove("hidden");
      document.getElementById("main")?.focus();
      window.birthdayAnimations?.observeReveals();
      playMusic();
    }, 650);
  }

  function scrollToTarget(selector) {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function updateModal() {
    const modalPhoto = document.getElementById("modalPhoto");
    if (!modalPhoto) return;
    modalPhoto.className = `modal-photo ${memoryClasses[galleryIndex]}`;
    modalPhoto.textContent = `Memory ${galleryIndex + 1} photo placeholder`;
  }

  function openGallery(index) {
    galleryIndex = index;
    updateModal();
    document.getElementById("galleryModal")?.classList.remove("hidden");
  }

  function closeGallery() {
    document.getElementById("galleryModal")?.classList.add("hidden");
  }

  function startTyping() {
    const target = document.getElementById("typingText");
    if (!target) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      target.textContent = typingMessages[0];
      return;
    }

    let messageIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const message = typingMessages[messageIndex];
      target.textContent = message.slice(0, charIndex);

      if (!deleting && charIndex < message.length) {
        charIndex += 1;
        window.setTimeout(tick, 42);
        return;
      }

      if (!deleting) {
        deleting = true;
        window.setTimeout(tick, 1500);
        return;
      }

      if (charIndex > 0) {
        charIndex -= 1;
        window.setTimeout(tick, 22);
        return;
      }

      deleting = false;
      messageIndex = (messageIndex + 1) % typingMessages.length;
      window.setTimeout(tick, 250);
    }

    tick();
  }

  function showSecret(source) {
    const secretMessage = document.getElementById("secretMessage");
    if (secretMessage) secretMessage.classList.remove("hidden");
    const text = source === "butterfly"
      ? "The blue butterfly found another little memory."
      : "You found a hidden message! Loving you is filled with beautiful moments waiting to be discovered.";
    window.birthdayAnimations?.showToast(text);
    window.birthdayAnimations?.confetti(36);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("openSurprise")?.addEventListener("click", openMainSite);

    document.querySelectorAll("[data-scroll]").forEach((button) => {
      button.addEventListener("click", () => scrollToTarget(button.dataset.scroll));
    });

    document.querySelectorAll(".love-card").forEach((card) => {
      card.addEventListener("click", () => card.classList.toggle("open"));
    });

    document.querySelectorAll("[data-gallery]").forEach((card) => {
      const index = Number(card.dataset.gallery);
      card.addEventListener("click", () => openGallery(index));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openGallery(index);
        }
      });
    });

    document.querySelector(".hero-photo")?.addEventListener("click", () => {
      heroPhotoClicks += 1;
      if (heroPhotoClicks === 5) {
        showSecret("photo");
      }
    });

    document.getElementById("closeModal")?.addEventListener("click", closeGallery);
    document.getElementById("prevPhoto")?.addEventListener("click", () => {
      galleryIndex = (galleryIndex + memoryClasses.length - 1) % memoryClasses.length;
      updateModal();
    });
    document.getElementById("nextPhoto")?.addEventListener("click", () => {
      galleryIndex = (galleryIndex + 1) % memoryClasses.length;
      updateModal();
    });

    document.getElementById("openLetter")?.addEventListener("click", () => {
      document.getElementById("openLetter")?.classList.add("open");
      document.getElementById("letterPaper")?.classList.remove("hidden");
      window.birthdayAnimations?.confetti(40);
    });
    document.getElementById("closeLetter")?.addEventListener("click", () => {
      document.getElementById("letterPaper")?.classList.add("hidden");
    });

    document.getElementById("blowCandles")?.addEventListener("click", () => {
      document.getElementById("cakeVisual")?.classList.add("blown");
      document.getElementById("cakeWish")?.classList.remove("hidden");
      window.birthdayAnimations?.confetti(80);
      window.birthdayAnimations?.fireworks(26);
      window.birthdayAnimations?.chime(880, 0.14);
    });

    document.getElementById("lastSurprise")?.addEventListener("click", () => {
      document.getElementById("final")?.classList.add("starry");
      document.getElementById("finalReveal")?.classList.remove("hidden");
      window.birthdayAnimations?.fireworks(40);
      window.birthdayAnimations?.confetti(70);
    });
    document.getElementById("loveButton")?.addEventListener("click", () => {
      document.getElementById("loveMessage")?.classList.remove("hidden");
      window.birthdayAnimations?.confetti(60);
    });

    document.querySelectorAll("[data-secret]").forEach((button) => {
      button.addEventListener("click", () => showSecret(button.dataset.secret));
    });

    document.getElementById("secretDate")?.addEventListener("input", (event) => {
      const normalized = event.target.value.trim().replaceAll("-", "/");
      if (normalized === "27/07" || normalized === "27/7") {
        showSecret("date");
      }
    });

    const audio = document.getElementById("bgMusic");
    document.getElementById("playMusic")?.addEventListener("click", playMusic);
    document.getElementById("pauseMusic")?.addEventListener("click", () => audio?.pause());
    document.getElementById("muteMusic")?.addEventListener("click", () => {
      if (!audio) return;
      audio.muted = !audio.muted;
      document.getElementById("muteMusic").textContent = audio.muted ? "Unmute" : "Mute";
    });
    document.getElementById("volumeMusic")?.addEventListener("input", (event) => {
      if (audio) audio.volume = Number(event.target.value);
    });
    document.getElementById("motionToggle")?.addEventListener("click", () => {
      document.body.classList.toggle("reduce-motion");
      const enabled = document.body.classList.contains("reduce-motion");
      document.getElementById("motionToggle").textContent = enabled ? "Motion On" : "Motion";
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeGallery();
        document.getElementById("letterPaper")?.classList.add("hidden");
      }
    });

    startTyping();
  });
})();
