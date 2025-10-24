import { guardarLocalStorage, consultarLocalStorage } from "../services/local-storage.js";
import { Aula } from "../models/AulaModels.js";

let formCreacionAula = document.getElementById("formCreacionAula")

if (formCreacionAula) {
    formCreacionAula.addEventListener("submit", function (e) {
        e.preventDefault()
        console.log("Formulario enviado")
        let data = new FormData(formCreacionAula)
        let aula = Object.fromEntries(data)
        Aula.push(aula)
        guardarLocalStorage("aula", Aula)
    });
}