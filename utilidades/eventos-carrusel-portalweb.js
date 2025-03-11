async function inyectar_carrusel_eventos() {
    try {
        // Obtener el contenido de la página fuente
        const response = await fetch("https://eventosycapacitaciones.tiendasicam32.net/carrusel-portalweb");
        if (!response.ok) throw new Error("Error al obtener el contenido");
        const html = await response.text();

        // Seleccionar la sección con la clase 'figura-evento'
        const container = document.querySelector(".figura-evento");
        if (container) {
            container.innerHTML = html || "No se encontró contenido";
        } else {
            console.error("No se encontró la sección '.figura-evento'");
        }
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
    }
}

// Llamar a la función después de un tiempo de espera
setTimeout(inyectar_carrusel_eventos, 123);

