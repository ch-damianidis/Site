document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

function toggleEmail() {
  const button = document.querySelector(".email-toggle");
  const email = document.getElementById("emailText");

  if (email.style.display === "block") {
    email.style.display = "none";
    button.setAttribute("aria-expanded", "false");
  } else {
    email.style.display = "block";
    button.setAttribute("aria-expanded", "true");
  }
}

function toggleAnnouncements() {
  const moreAnnouncements = document.getElementById("moreAnnouncements");
  const button = document.getElementById("viewMoreBtn");

  moreAnnouncements.classList.toggle("show");

  if (moreAnnouncements.classList.contains("show")) {
    button.textContent = "View less";
  } else {
    button.textContent = "View more";
  }
}
