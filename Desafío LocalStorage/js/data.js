document.addEventListener("DOMContentLoaded", () => {
    const displayElement = document.getElementById("data");

    // Obtenemos el dato almacenado en localStorage
    const storedData = localStorage.getItem("storedData");

    // Mostramos el dato si existe, o un mensaje si no hay nada guardado
    if (storedData) {
        displayElement.textContent = storedData;
    } else {
        displayElement.textContent = "No hay datos guardados.";
    }
});
