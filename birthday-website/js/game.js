(function () {
  const gameLength = 25;
  const icons = ["heart", "flower", "star", "cake", "heart", "flower", "star", "cake"];
  let score = 0;
  let timeLeft = gameLength;
  let gameTimer = null;
  let spawnTimer = null;
  let highScore = 0;
  let flippedCards = [];
  let matchSeconds = 0;
  let matchTimer = null;
  let moves = 0;

  function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  function scoreMessage(finalScore) {
    if (finalScore <= 5) return "You may have missed some hearts, but you will never miss a place in mine.";
    if (finalScore <= 12) return "You caught so much love! But I still have more love waiting for you.";
    if (finalScore <= 20) return "Amazing! You caught almost all my love.";
    return "You caught every piece of my heart. It has always belonged to you anyway.";
  }

  function endGame() {
    window.clearInterval(gameTimer);
    window.clearInterval(spawnTimer);
    gameTimer = null;
    spawnTimer = null;
    document.querySelectorAll(".falling-heart").forEach((heart) => heart.remove());
    highScore = Math.max(highScore, score);
    setText("highScore", highScore);
    setText("resultMessage", scoreMessage(score));
    document.getElementById("gameReward")?.classList.remove("hidden");
    window.birthdayAnimations?.confetti(90);
  }

  function spawnHeart() {
    const gameArea = document.getElementById("gameArea");
    if (!gameArea) return;

    const heart = document.createElement("button");
    const roll = Math.random();
    const type = roll > 0.86 ? "broken" : roll > 0.68 ? "gold" : "normal";
    const size = 56;
    const maxX = Math.max(0, gameArea.clientWidth - size);
    const maxY = Math.max(0, gameArea.clientHeight - size);

    heart.type = "button";
    heart.className = `falling-heart ${type}`;
    heart.style.left = `${Math.random() * maxX}px`;
    heart.style.top = `${Math.random() * maxY}px`;
    heart.dataset.label = type === "broken" ? "x" : type === "gold" ? "3" : "1";
    heart.setAttribute("aria-label", type === "broken" ? "Broken heart minus one point" : `${type} heart`);

    heart.addEventListener("click", () => {
      score += type === "gold" ? 3 : type === "broken" ? -1 : 1;
      score = Math.max(0, score);
      setText("score", score);
      window.birthdayAnimations?.chime(type === "broken" ? 220 : type === "gold" ? 880 : 620);
      heart.remove();
    });

    gameArea.appendChild(heart);
    window.setTimeout(() => heart.remove(), 1200);
  }

  function startGame() {
    if (gameTimer) return;
    score = 0;
    timeLeft = gameLength;
    setText("score", score);
    setText("timeLeft", timeLeft);
    document.getElementById("gameReward")?.classList.add("hidden");
    document.querySelectorAll(".falling-heart").forEach((heart) => heart.remove());

    spawnTimer = window.setInterval(spawnHeart, 620);
    gameTimer = window.setInterval(() => {
      timeLeft -= 1;
      setText("timeLeft", timeLeft);
      if (timeLeft <= 0) endGame();
    }, 1000);
  }

  function shuffle(items) {
    return [...items].sort(() => Math.random() - 0.5);
  }

  function stopMatchTimer() {
    window.clearInterval(matchTimer);
    matchTimer = null;
  }

  function startMatchTimer() {
    if (matchTimer) return;
    matchTimer = window.setInterval(() => {
      matchSeconds += 1;
      setText("matchTime", matchSeconds);
    }, 1000);
  }

  function completeMatchIfReady() {
    const cards = document.querySelectorAll(".match-card");
    const complete = [...cards].every((card) => card.classList.contains("matched"));
    if (!complete) return;
    stopMatchTimer();
    document.getElementById("matchComplete")?.classList.remove("hidden");
    window.birthdayAnimations?.confetti(70);
  }

  function buildMatchGame() {
    const board = document.getElementById("matchBoard");
    if (!board) return;

    stopMatchTimer();
    board.innerHTML = "";
    flippedCards = [];
    matchSeconds = 0;
    moves = 0;
    setText("matchMoves", moves);
    setText("matchTime", matchSeconds);
    document.getElementById("matchComplete")?.classList.add("hidden");

    shuffle(icons).forEach((icon, index) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "match-card";
      card.dataset.icon = icon;
      card.dataset.index = String(index);
      card.textContent = "?";
      card.setAttribute("aria-label", "Hidden memory match card");
      card.addEventListener("click", () => {
        if (card.classList.contains("matched") || card.classList.contains("flipped") || flippedCards.length === 2) return;
        startMatchTimer();
        card.classList.add("flipped");
        card.textContent = icon;
        flippedCards.push(card);

        if (flippedCards.length === 2) {
          moves += 1;
          setText("matchMoves", moves);
          const [first, second] = flippedCards;
          if (first.dataset.icon === second.dataset.icon) {
            first.classList.add("matched");
            second.classList.add("matched");
            flippedCards = [];
            window.birthdayAnimations?.chime(720);
            completeMatchIfReady();
          } else {
            window.setTimeout(() => {
              first.classList.remove("flipped");
              second.classList.remove("flipped");
              first.textContent = "?";
              second.textContent = "?";
              flippedCards = [];
            }, 650);
          }
        }
      });
      board.appendChild(card);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("startGame")?.addEventListener("click", startGame);
    document.getElementById("replayGame")?.addEventListener("click", startGame);
    document.getElementById("restartMatch")?.addEventListener("click", buildMatchGame);
    buildMatchGame();
  });
})();
