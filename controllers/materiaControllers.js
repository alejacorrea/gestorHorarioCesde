import { guardarLocalStorage, consultarLocalStorage } from "../services/local-storage.js";
import { Materia } from "../models/MateriaModels.js";

let formCreacionMateria = document.getElementById("formCreacionMateria")

if (formCreacionMateria) {
    formCreacionMateria.addEventListener("submit", function (e) {
        e.preventDefault()
        console.log("Formulario enviado")
        let data = new FormData(formCreacionMateria)
        let materia = Object.fromEntries(data)
        Materia.push(materia)
        guardarLocalStorage("materia", Materia)
    });
}