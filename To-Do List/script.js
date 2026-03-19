window.onload = function() {
    document.querySelector("#addTaskButton").addEventListener("click", AñadirTarea);
}
function AñadirTarea() {

    //Guardar valor del input
    let addText = document.getElementById("addText").value;

    //Se evita una lista con elementos vacios
    if (addText === ""){
        alert("Es obligatorio añadir texto")
        return
    }

    //Esto crea las tareas de la lista
    let task = document.createElement("li");
    task.textContent = addText + " ";

    //Crea el boton para eliminar
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = function() {task.remove()};

    //Crear boton completar tarea
    let completetask = document.createElement("button");
    completetask.textContent = "Completar";
    completetask.onclick = function() {task.classList.toggle("completed")}

    //Aqui el boton se añade a la tarea
    task.appendChild(deleteButton);
    task.appendChild(completetask);

    //Aqui la tarea se añade a la lista
    document.getElementById("addedtasks").appendChild(task);

    //Borra el texto en el input al añadir la tarea
    document.getElementById("addText").value = "";

}