import { guardarLocalStorage, consultarLocalStorage } from "../services/local-storage.js";
import { HorarioAdmin } from "../models/HorarioAdminModels.js";

let formularioAdministrador = document.getElementById("formularioAdministrador")

if (formularioAdministrador) {
    formularioAdministrador.addEventListener("submit", function (e) {
        e.preventDefault()
        console.log("Formulario enviado")
        
        // Capturar datos del formulario
        let data = new FormData(formularioAdministrador)
        let horarioAdmin = Object.fromEntries(data)
        
        // Capturar los días seleccionados
        const diasSeleccionados = window.getDiasSeleccionados ? window.getDiasSeleccionados() : [];
        horarioAdmin.recurrencia = diasSeleccionados;
        
        console.log("Datos capturados:", horarioAdmin)
        
        // Agregar al array y guardar en localStorage
        HorarioAdmin.push(horarioAdmin)
        guardarLocalStorage("horarioAdmin", HorarioAdmin)
        
        console.log("Datos guardados en localStorage")
        
        // Limpiar formulario
        formularioAdministrador.reset();
        if (window.limpiarDiasSeleccionados) {
            window.limpiarDiasSeleccionados();
        }
        
        alert("Horario agregado correctamente")
    });
}