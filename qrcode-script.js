document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("codeForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let userCode = document.getElementById("code").value.trim();
      let feedbackMessage = document.getElementById("feedbackMessage");

      if (userCode === "1789") {
        // Správná čísla z vyznačených políček
        feedbackMessage.textContent = "✅ Správně!";
        feedbackMessage.classList.remove("error");
        feedbackMessage.classList.add("success");

        // Přesměrování po 3 sekundách
        setTimeout(function () {
          window.location.href = "next-step.html"; // Další stránka
        }, 1000);
      } else {
        feedbackMessage.textContent = "❌ Špatný kód! Zkus to znovu.";
        feedbackMessage.classList.remove("success");
        feedbackMessage.classList.add("error");
      }
    });
});
