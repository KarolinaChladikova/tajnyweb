document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("passwordForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let passwordInput = document.getElementById("password").value.trim(); // Získá hodnotu bez mezer
      let errorMessage = document.getElementById("errorMessage");

      if (passwordInput.toLowerCase() === "funkce") {
        alert("Správně! Vítej na dobrodružné cestě! 🎉");
        window.location.href = "next.html"; // Přesměrování na další stránku
      } else {
        errorMessage.textContent = "❌ Špatné heslo! Zkus to znovu.";
        errorMessage.style.color = "red"; // Zvýraznění chyby
      }
    });
});
