const navButton = document.querySelector("#menu-button");

const menuItems = document.querySelector("#menu");

const menuButtonSpan = document.querySelectorAll("#menu-button span");

const enlaces = document.querySelectorAll("#menu a");

//funcionalidad a boton de navbar movil
navButton.addEventListener("click", () => {
  menuItems.classList.toggle("hidden");

  menuButtonSpan.forEach((span) => {
    span.classList.toggle("anim");
  });
});

//Cerrar menu al dar click en un enlace
enlaces.forEach((link) => {
  link.addEventListener("click", () => {
    menuItems.classList.add("hidden");

    menuButtonSpan.forEach((span) => {
      span.classList.remove("anim");
    });
  });
});
