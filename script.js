// Wedding date: November 25, 2026 at 8:35 PM India Standard Time (UTC+05:30).
// If the ceremony time changes, update WEDDING_DATE below.
const WEDDING_DATE = new Date("2026-11-25T20:35:00+05:30").getTime();

const countdownElements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};
const countdownMessage = document.getElementById("countdown-message");

function updateCountdown() {
  const difference = WEDDING_DATE - Date.now();

  if (difference <= 0) {
    Object.values(countdownElements).forEach((element) => {
      element.textContent = "0";
    });
    countdownMessage.textContent = "Today is the day! Wishing the couple a lifetime of happiness.";
    return;
  }

  const totalSeconds = Math.floor(difference / 1000);
  countdownElements.days.textContent = Math.floor(totalSeconds / 86400);
  countdownElements.hours.textContent = Math.floor((totalSeconds % 86400) / 3600);
  countdownElements.minutes.textContent = Math.floor((totalSeconds % 3600) / 60);
  countdownElements.seconds.textContent = totalSeconds % 60;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Accessible image lightbox for the gallery.
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightboxButton = document.getElementById("lightbox-close");

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = item.querySelector("img").alt;
    lightbox.showModal();
  });
});

function closeLightbox() {
  lightbox.close();
  lightboxImage.src = "";
}
closeLightboxButton.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.open) closeLightbox();
});
