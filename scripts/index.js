function loadComponent(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    });
}

//loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");

document.querySelectorAll(".toggle-header").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});
