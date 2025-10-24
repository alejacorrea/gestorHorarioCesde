import { guardarLocalStorage, consultarLocalStorage } from "../services/local-storage.js";
import { HorarioProfesor } from "../models/HorarioProfesorModels.js";

let formHorarioProfesor = document.getElementById("formHorarioProfesor")
let btnGuardar = document.getElementById("btnGuardar")
let modalCheckbox = document.getElementById("popup-form")

// Función para cerrar el modal
function cerrarModal() {
    if (modalCheckbox) {
        modalCheckbox.checked = false;
    }
}

// Función para limpiar formulario
function limpiarFormulario() {
    if (formHorarioProfesor) {
        formHorarioProfesor.reset();
        if (window.limpiarDiasSeleccionados) {
            window.limpiarDiasSeleccionados();
        }
    }
}

// Botón GUARDAR - Solo este guarda los datos
if (formHorarioProfesor) {
    formHorarioProfesor.addEventListener("submit", function (e) {
        e.preventDefault()
        console.log("Guardando horario...")

        // Capturar datos del formulario
        let data = new FormData(formHorarioProfesor)
        let horarioProfesor = Object.fromEntries(data)

        // Capturar los días seleccionados
        const diasSeleccionados = window.getDiasSeleccionados ? window.getDiasSeleccionados() : [];
        horarioProfesor.recurrencia = diasSeleccionados;
        
        console.log("Datos capturados:", horarioProfesor)
        HorarioProfesor.push(horarioProfesor)
        guardarLocalStorage("horarioProfesor", HorarioProfesor)

        console.log("Datos guardados en localStorage")

        // Limpiar formulario y cerrar modal
        limpiarFormulario();
        cerrarModal();
        
        alert("Horario guardado correctamente")
    });
}

// Cerrar modal al hacer clic fuera de él
document.addEventListener('click', function(e) {
    const modal = document.querySelector('.modal');
    const modalContainer = document.querySelector('.modal-container');
    
    if (modalCheckbox && modalCheckbox.checked) {
        // Si se hace clic en el contenedor del modal pero no en el modal mismo
        if (modalContainer && modalContainer.contains(e.target) && !modal.contains(e.target)) {
            cerrarModal();
        }
    }
});