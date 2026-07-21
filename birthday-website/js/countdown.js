(function () {
  const birthdayMonth = 6;
  const birthdayDay = 21;

  function getNextBirthday() {
    const now = new Date();
    const target = new Date(now.getFullYear(), birthdayMonth, birthdayDay, 0, 0, 0);
    if (now > new Date(now.getFullYear(), birthdayMonth, birthdayDay, 23, 59, 59)) {
      target.setFullYear(target.getFullYear() + 1);
    }
    return target;
  }

  function updateCountdown() {
    const countdown = document.getElementById("countdown");
    const label = document.getElementById("countdownLabel");
    if (!countdown || !label) return;

    const now = new Date();
    const currentBirthdayStart = new Date(now.getFullYear(), birthdayMonth, birthdayDay, 0, 0, 0);
    const currentBirthdayEnd = new Date(now.getFullYear(), birthdayMonth, birthdayDay, 23, 59, 59);

    if (now >= currentBirthdayStart && now <= currentBirthdayEnd) {
      label.textContent = "Happy Birthday, My Love!";
      ["days", "hours", "minutes", "seconds"].forEach((id) => {
        document.getElementById(id).textContent = "00";
      });
      return;
    }

    const distance = getNextBirthday() - now;
    const secondsTotal = Math.max(0, Math.floor(distance / 1000));
    const days = Math.floor(secondsTotal / 86400);
    const hours = Math.floor((secondsTotal % 86400) / 3600);
    const minutes = Math.floor((secondsTotal % 3600) / 60);
    const seconds = secondsTotal % 60;

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  }

  document.addEventListener("DOMContentLoaded", () => {
    updateCountdown();
    window.setInterval(updateCountdown, 1000);
  });
})();
