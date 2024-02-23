import esBisiesto from "./esBisiesto";
const anio_input = document.querySelector("#primer-anio");
const form = document.querySelector("#bisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const anio=anio_input.value;
 
  div.innerHTML = "<p>" + esBisiesto(anio) + "</p>";
});
