function checkWebsiteStatus(dominio, tiempo_recarga_disponible) {
    console.log("sitio: ", dominio);
    document.getElementById("status-msg").innerText = "Comprobando estado del sitio...";

    const apiChecker = "https://cdnsicam.net/plantillas/whm-cpanel/verificador.php?dominio=" + dominio;

    fetch(apiChecker)
        .then(res => res.json())
        .then(data => {
            console.log("Estado del sitio: ", res);
            console.log("Datos del sitio: ", data);
            if (data.status === 200 && !data.title.includes("suspended")) {
                document.getElementById("status-msg").innerHTML = "<h1>Sitio disponible, redirigiendo...</h1>";
                setTimeout(() => window.location.href = "https://" + dominio, 5000);
            } else {
                document.getElementById("status-msg").innerText =
                    `Sitio responde con estado ${data.status}. Sigue fuera de servicio.`;
            }
        })
        .catch(() => {
            document.getElementById("status-msg").innerText = "No se pudo contactar al sitio. Sigue fuera de servicio.";
        });

    fetch(apiChecker)
        .then(response => {
            console.log("Estado del sitio: ", response);
            console.log("Estado del sitio: ", response.json());
        })
        .catch(() => {
            document.getElementById("status-msg").innerText = "El sitio sigue en mantenimiento. Revisando...";
        });
}
