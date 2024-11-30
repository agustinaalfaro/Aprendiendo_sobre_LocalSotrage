document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("inputText");
    const button = document.getElementById("buttonText");

    // Evento para guardar el dato en localStorage
    button.addEventListener("click", () => {
        const value = input.value.trim(); // Obtenemos y limpiamos el valor
        if (value) {
            localStorage.setItem("storedData", value); // Guardamos el dato en localStorage
            alert("Dato guardado con éxito!");
        } else {
            alert("Por favor, ingresa un valor antes de guardar.");
        }
    });
});
