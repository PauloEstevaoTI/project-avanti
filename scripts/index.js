function loadComponent(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    });
}

//loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");
loadComponent("header", "components/header.html");
