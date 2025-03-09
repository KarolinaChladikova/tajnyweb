document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("passwordForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let userPassword = document
        .getElementById("password")
        .value.trim()
        .toLowerCase();
      let feedbackMessage = document.getElementById("feedbackMessage");

      if (userPassword === "velka francouzska revoluce") {
        // Správné heslo
        feedbackMessage.textContent = "✅ Správně!!";
        feedbackMessage.classList.remove("error");
        feedbackMessage.classList.add("success");

        // Přesměrování po 3 sekundách
        setTimeout(function () {
          window.location.href = "dalsi.html"; // Další stránka
        }, 1000);
      } else {
        feedbackMessage.textContent = "❌ Špatná odpověď! Zkus to znovu.";
        feedbackMessage.classList.remove("success");
        feedbackMessage.classList.add("error");
      }
    });
});
