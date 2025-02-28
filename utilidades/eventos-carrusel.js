export default {
    async fetch(request) {
        try {
            // Obtener el contenido de la página fuente
            const response = await fetch("https://eventosycapacitaciones.tiendasicam32.net/insertar");
            if (!response.ok) throw new Error("Error al obtener el contenido");
            const html = await response.text();


            const extractedContent = html ? html : "No se encontró contenido";

            // Responder con un script para inyectar el contenido en un div específico
            const script = `
          (function() {
            const container = document.getElementById('contenido-inyectado');
            if (container) {
              container.innerHTML = \`${extractedContent}\`;
            }
          })();
        `;

            return new Response(script, {
                headers: { "content-type": "application/javascript" }
            });
        } catch (error) {
            return new Response("Error al procesar la solicitud: " + error.message, {
                status: 500,
                headers: { "content-type": "text/plain" }
            });
        }
    }
};
