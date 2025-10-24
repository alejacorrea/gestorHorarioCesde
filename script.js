import { expresionesRegulares } from "./services/utils.js"

let camposForm = document.querySelectorAll("#formInicioSesion input")
camposForm.forEach((campoForm) => {
    campoForm.addEventListener("keyup", function (e) {
        switch (e.target.id) {
            case "correo":
                if (expresionesRegulares.regexTexto.test(e.target.value)) {
                    document.getElementById("correo").style.outline = "none"
                    document.getElementById("correo").style.borderColor = "green"
                    document.getElementById("correo").style.borderWidth = "2px"
                    document.getElementById("correo").style.color = "black"
                } else {
                    document.getElementById("correo").style.outline = "none"
                    document.getElementById("correo").style.borderColor = "red"
                    document.getElementById("correo").style.borderWidth = "2px"
                    document.getElementById("correo").style.color = "red"
                }
                break;
            case "contraseña":
                if (expresionesRegulares.regexTexto.test(e.target.value)) {
                    document.getElementById("contrasena").style.outline = "none"
                    document.getElementById("contrasena").style.borderColor = "green"
                    document.getElementById("contrasena").style.borderWidth = "2px"
                    document.getElementById("contrasena").style.color = "black"
                } else {
                    document.getElementById("contrasena").style.outline = "none"
                    document.getElementById("contrasena").style.borderColor = "red"
                    document.getElementById("contrasena").style.borderWidth = "2px"
                    document.getElementById("contrasena").style.color = "red"
                }
                break;
        }
    })
})

let camposForm1 = document.querySelectorAll("#formCreacionProfesor input")
camposForm1.forEach((campoForm1) => {
    campoForm1.addEventListener("keyup", function (e) {
        switch (e.target.id) {
            case "nombre":
                if (expresionesRegulares.regexTexto.test(e.target.value)) {
                    document.getElementById("nombre").style.outline = "none"
                    document.getElementById("nombre").style.borderColor = "green"
                    document.getElementById("nombre").style.borderWidth = "2px"
                    document.getElementById("nombre").style.color = "black"
                } else {
                    document.getElementById("nombre").style.outline = "none"
                    document.getElementById("nombre").style.borderColor = "red"
                    document.getElementById("nombre").style.borderWidth = "2px"
                    document.getElementById("nombre").style.color = "red"
                }
                break;
            case "cedula":
                if (expresionesRegulares.regexNumero.test(e.target.value)) {
                    document.getElementById("cedula").style.outline = "none"
                    document.getElementById("cedula").style.borderColor = "green"
                    document.getElementById("cedula").style.borderWidth = "2px"
                    document.getElementById("cedula").style.color = "black"
                } else {
                    document.getElementById("cedula").style.outline = "none"
                    document.getElementById("cedula").style.borderColor = "red"
                    document.getElementById("cedula").style.borderWidth = "2px"
                    document.getElementById("cedula").style.color = "red"
                }
                break;
            case "correo":
                if (expresionesRegulares.regexCorreo.test(e.target.value)) {
                    document.getElementById("correo").style.outline = "none"
                    document.getElementById("correo").style.borderColor = "green"
                    document.getElementById("correo").style.borderWidth = "2px"
                    document.getElementById("correo").style.color = "black"
                } else {
                    document.getElementById("correo").style.outline = "none"
                    document.getElementById("correo").style.borderColor = "red"
                    document.getElementById("correo").style.borderWidth = "2px"
                    document.getElementById("correo").style.color = "red"
                }
                break;
            case "contraseña":
                if (expresionesRegulares.regexContrasena.test(e.target.value)) {
                    document.getElementById("contrasena").style.outline = "none"
                    document.getElementById("contrasena").style.borderColor = "green"
                    document.getElementById("contrasena").style.borderWidth = "2px"
                    document.getElementById("contrasena").style.color = "black"
                } else {
                    document.getElementById("contrasena").style.outline = "none"
                    document.getElementById("contrasena").style.borderColor = "red"
                    document.getElementById("contrasena").style.borderWidth = "2px"
                    document.getElementById("contrasena").style.color = "red"
                }
                break;
        }
    })
})
let camposForm2 = document.querySelectorAll("#formCreacionMateria input")
camposForm2.forEach((camposForm2) => {
    camposForm2.addEventListener("keyup", function (e) {
        if (e.target.id === "nombre") {
            if (expresionesRegulares.regexNombre.test(e.target.value)) {
                document.getElementById("nombre").style.outline = "none"
                document.getElementById("nombre").style.borderColor = "green"
                document.getElementById("nombre").style.borderWidth = "2px"
                document.getElementById("nombre").style.color = "black"
            } else {
                document.getElementById("nombre").style.outline = "none"
                document.getElementById("nombre").style.borderColor = "red"
                document.getElementById("nombre").style.borderWidth = "2px"
                document.getElementById("nombre").style.color = "red"
            }
        }
    })
})
let camposForm3 = document.querySelectorAll("#formCreacionAula input")
camposForm3.forEach((camposForm3) => {
    camposForm3.addEventListener("keyup", function (e) {
        if (e.target.id === "aula") {
            if (expresionesRegulares.regexNombre.test(e.target.value)) {
                document.getElementById("aula").style.outline = "none"
                document.getElementById("aula").style.borderColor = "green"
                document.getElementById("aula").style.borderWidth = "2px"
                document.getElementById("aula").style.color = "black"
            } else {
                document.getElementById("aula").style.outline = "none"
                document.getElementById("aula").style.borderColor = "red"
                document.getElementById("aula").style.borderWidth = "2px"
                document.getElementById("aula").style.color = "red"
            }
        }
    })
})

// Funcionalidad para seleccionar días de la semana
document.addEventListener('DOMContentLoaded', function() {
    const diasButtons = document.querySelectorAll('.dias button');
    let diasSeleccionados = [];

    diasButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle de la clase selected
            this.classList.toggle('selected');
            
            const dia = this.textContent.trim();
            
            if (this.classList.contains('selected')) {
                // Agregar día si no está en el array
                if (!diasSeleccionados.includes(dia)) {
                    diasSeleccionados.push(dia);
                }
            } else {
                // Quitar día del array
                const index = diasSeleccionados.indexOf(dia);
                if (index > -1) {
                    diasSeleccionados.splice(index, 1);
                }
            }
            
            console.log('Días seleccionados:', diasSeleccionados);
        });
    });

    // Función para obtener los días seleccionados (puedes usarla en el formulario)
    window.getDiasSeleccionados = function() {
        return diasSeleccionados;
    };

    // Función para limpiar selección
    window.limpiarDiasSeleccionados = function() {
        diasButtons.forEach(button => {
            button.classList.remove('selected');
        });
        diasSeleccionados = [];
    };
});
let camposForm4 = document.querySelectorAll("#formHorarioProfesor input")
camposForm4.forEach((camposForm4) => {
    camposForm4.addEventListener("keyup", function (e) {
        switch (e.target.id) {
            case "materia":
                if (expresionesRegulares.regexNombre.test(e.target.value)) {
                    document.getElementById("materia").style.outline = "none"
                    document.getElementById("materia").style.borderColor = "green"
                    document.getElementById("materia").style.borderWidth = "2px"
                    document.getElementById("materia").style.color = "black"
                } else {
                    document.getElementById("materia").style.outline = "none"
                    document.getElementById("materia").style.borderColor = "red"
                    document.getElementById("materia").style.borderWidth = "2px"
                    document.getElementById("materia").style.color = "red"
                }
                break;
            case "instituto":
                if (expresionesRegulares.regexTexto.test(e.target.value)) {
                    document.getElementById("instituto").style.outline = "none"
                    document.getElementById("instituto").style.borderColor = "green"
                    document.getElementById("instituto").style.borderWidth = "2px"
                    document.getElementById("instituto").style.color = "black"
                } else {
                    document.getElementById("instituto").style.outline = "none"
                    document.getElementById("instituto").style.borderColor = "red"
                    document.getElementById("instituto").style.borderWidth = "2px"
                    document.getElementById("instituto").style.color = "red"
                }
                break;
        }
    })
})