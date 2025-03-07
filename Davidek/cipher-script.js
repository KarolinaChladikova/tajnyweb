document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("cipherForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let userAnswer = document
        .getElementById("answer")
        .value.trim()
        .toLowerCase();
      let feedbackMessage = document.getElementById("feedbackMessage");

      if (userAnswer === "vánoční stromeček") {
        // Správná odpověď
        feedbackMessage.textContent = "✅ Správně! Přesměrování...";
        feedbackMessage.classList.remove("error");
        feedbackMessage.classList.add("success");

        // Přesměrování po 2 sekundách
        setTimeout(function () {
          window.location.href = "finalni-cil.html"; // Další stránka
        }, 2000);
      } else {
        feedbackMessage.textContent = "❌ Špatná odpověď! Zkus to znovu.";
        feedbackMessage.classList.remove("success");
        feedbackMessage.classList.add("error");
      }
    });
});
