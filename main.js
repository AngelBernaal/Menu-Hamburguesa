document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#menu");
  const abrir = document.querySelector("#abrir");
  const cerrar = document.querySelector("#cerrar");

  abrir.addEventListener("click", () => {
    menu.classList.add("menu-open");
  });

  cerrar.addEventListener("click", () => {
    menu.classList.remove("menu-open");
  });
});
