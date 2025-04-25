document.addEventListener("DOMContentLoaded", function () {
  let counter = 0;
  const counterDisplay = document.getElementById("counter");

  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // evita redirecionamento
      counter++;
      counterDisplay.textContent = counter;
    });
  });
});
