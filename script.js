document.getElementById("txt").placeholder = "Escribe una cadena";

const leters = ["a", "l", "i", "n", "o", "e", "b", "t", "ñ", "."];
const numbers = ["2", "0", "4", "8", "9"];
const alphabeth = leters.concat(numbers);

const send = () => {
    var txt = document.getElementById("txt");
    txt.placeholder = "Escribe una cadena";
    var string = txt.value;
    cls();

    var v1 = false;
    for (let i of numbers) {
        if (string.startsWith(i)) {
            v1 = true;
            break;
        }
    }

    for (let i of string) {
        console.log(i);
        if (!alphabeth.includes(i)) {
            var mensaje = "La cadena es invalida";
            mostrarMensaje(mensaje);
            return;
        }
    }

    if (!v1) {
        var mensaje = "La cadena es invalida";
        mostrarMensaje(mensaje);
        return;
    }

    if (string.includes('..')) {
        var mensaje = "La cadena es invalida";
        mostrarMensaje(mensaje);
        return;
    }

    if (!string.includes('anln')) {
        var mensaje = "La cadena es invalida";
        mostrarMensaje(mensaje);
        return;
    }

    if (!string.endsWith(".2048298")) {
        var mensaje = "La cadena es invalida";
        mostrarMensaje(mensaje);
        return;
    }

    var mensaje = "La cadena es valida";
    mostrarMensaje(mensaje);
};

const cls = () => {
    var input = document.getElementById("txt");
    input.value = '';
};

function mostrarMensaje(mensaje) {
    var mensajeElemento = document.getElementById("mensaje");
    mensajeElemento.innerText = mensaje;

    if (mensaje.includes("invalida")) {
        mensajeElemento.style.color = "red";
    }else{
        mensajeElemento.style.color = "green";
    }
}