// Simple fake "submit" for the email form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".email-form");
  const input = form.querySelector("input");

  form.addEventListener("submit", () => {
    alert("Thanks, " + input.value + "! Vectflix is coming soon 😄");
    input.value = "";
  });
});