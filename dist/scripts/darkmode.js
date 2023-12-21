//DARK MODE

//Verificar si el tema almacenado en localstorage o si el tema del sistema es dark, si es dark agrega la clase dark
//si el tema es claro, la elimina
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

const darkButton = document.querySelector("#darkButton");

//evento de click para cambiar el tema del color
darkButton.addEventListener("click", function () {
  if (localStorage.getItem("color-theme")) {  //Verificar si hay un tema almacenado
    if (localStorage.getItem("color-theme") === "light") { //si hay tema claro asigna tema oscuro
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark"); 
    } else { //si hay tema oscuro asigna tema claro
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {  //si no hay valor en local storage verifica si hay una clase en el html y actualiza segun el modo deseado
    if (document.documentElement.classList.contains("dark")) { 
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});
