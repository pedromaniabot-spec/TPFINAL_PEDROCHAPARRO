document.addEventListener("DOMContentLoaded", () => {
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    let edad = parseInt(prompt("Ingrese su edad:"));

    let mensaje;

    if (edad > 20) {
        mensaje = "Es mayor de edad.";
    } else {
        mensaje = "Es menor de edad.";
    }

    document.getElementById("mensajeBienvenida").innerHTML =
        `Bienvenido/a ${nombre} ${apellido}. ${mensaje}`;
});

