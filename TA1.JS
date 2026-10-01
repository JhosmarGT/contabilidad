function mostrarInfo(numero) {

    const informacion = document.getElementById("info" + numero);

    if (informacion.classList.contains("mostrar")) {

        informacion.classList.remove("mostrar");

    } else {

        informacion.classList.add("mostrar");

    }
}