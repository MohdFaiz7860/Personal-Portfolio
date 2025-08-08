document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formStatus").textContent = "Thanks for your message! (Form submission is disabled in demo)";
});