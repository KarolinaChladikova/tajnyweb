document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("answerForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let userAnswer = document
        .getElementById("answer")
        .value.trim()
        .toLowerCase();
      let feedbackMessage = document.getElementById("feedbackMessage");

      if (userAnswer === "husa") {
        // Správná odpověď
        feedbackMessage.textContent = "✅ Správně!";
        feedbackMessage.classList.remove("error");
        feedbackMessage.classList.add("success");

        // Přesměrování po 2 sekundách
        setTimeout(function () {
          window.location.href = "husa.html"; // Další stránka
        }, 2000);
      } else {
        feedbackMessage.textContent = "❌ Špatná odpověď! Zkus to znovu.";
        feedbackMessage.classList.remove("success");
        feedbackMessage.classList.add("error");
      }
    });
});
