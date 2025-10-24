import { guardarLocalStorage, consultarLocalStorage } from "../services/local-storage.js";
import { Persona } from "../models/PersonaModels.js";


let formularioInicioSesion = document.getElementById("formInicioSesion")
if (formularioInicioSesion) {
    formularioInicioSesion.addEventListener("submit", function (e) {
        e.preventDefault()
        let data = new FormData(formularioInicioSesion)
        let persona = Object.fromEntries(data)
        console.log(persona)
        if (persona.correo == "admin" && persona.contrasena == "1234") {
            window.location.href = "/views/pages/gestorHorariosAdministrador.html"
        }
        else {
            Swal.fire({
                title: "ERROR",
                text: "Error de credenciales",
                icon: "error"
            });
        }
        if (persona.correo == "profesor" && persona.contrasena == "1234") {
            window.location.href = "/views/pages/gestorHorariosProfesor.html"
        }
        else {
            Swal.fire({
                title: "ERROR",
                text: "Error de credenciales",
                icon: "error"
            });
        }
    });
}


let formCreacionProfesor = document.getElementById("formCreacionProfesor")

if (formCreacionProfesor) {
    formCreacionProfesor.addEventListener("submit", function (e) {
        e.preventDefault()
        console.log("Formulario enviado")
        let data = new FormData(formCreacionProfesor)
        let persona = Object.fromEntries(data)
        Persona.push(persona)
        guardarLocalStorage("persona", Persona)
    });
}

