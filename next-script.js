document.addEventListener("DOMContentLoaded", function () {
  // Posloucháme odeslání formuláře
  document
    .getElementById("answerForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let userAnswer = document
        .getElementById("answer")
        .value.trim()
        .toLowerCase();
      let feedbackMessage = document.getElementById("feedbackMessage");

      if (userAnswer === "sušák na prádlo na zahradě") {
        feedbackMessage.textContent = "✅ Správně! Přesměrování...";
        feedbackMessage.classList.remove("error");
        feedbackMessage.classList.add("success");

        // Přesměrování po 3 sekundách
        setTimeout(function () {
          window.location.href = "druha.html";
        }, 1000);
      } else {
        feedbackMessage.textContent = "❌ Špatná odpověď! Zkus to znovu.";
        feedbackMessage.classList.remove("success");
        feedbackMessage.classList.add("error");
      }
    });
});
