document.getElementById("form-tarea").addEventListener("submit", function (e) {
  e.preventDefault();

  const texto = e.target[0].value;
  const hora = e.target[1].value;
  const lista = document.getElementById("tareas");

  const nuevaTarea = document.createElement("li");
  nuevaTarea.textContent = `${hora} — ${texto}`;

  lista.appendChild(nuevaTarea);

  e.target.reset();
});
