function inyectar_carrusel_eventos(idDiv) {
    try {
        // Obtener el contenido de la página fuente
        const response = await fetch("https://eventosycapacitaciones.tiendasicam32.net/insertar");
        console.log(response);
        if (!response.ok) throw new Error("Error al obtener el contenido");
        const html = await response.text();

        console.log(html);

        // Extraer el contenido o mostrar un mensaje por defecto
        const extractedContent = html || "No se encontró contenido";

        // Insertar el contenido en un div específico
        const container = document.getElementById(idDiv);
        if (container) {
            container.innerHTML = extractedContent;
        }
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
    }
}

inyectar_carrusel_eventos("contenido-inyectado");

setTimeout(() => {  
    inyectar_carrusel_eventos("contenido-inyectado");
}, 5000);

