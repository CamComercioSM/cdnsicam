function checkWebsiteStatus(dominio, tiempo_recarga_disponible) {
    console.log("sitio: ", dominio);
    document.getElementById("status-msg").innerText = "Comprobando estado del sitio...";

    const apiChecker = "https://cdnsicam.net/plantillas/whm-cpanel/verificador.php?dominio=" + dominio;

    fetch(apiChecker)
        .then(response => {
            console.log("Estado del sitio: ", response);
            console.log("Estado del sitio: ", response.status);
        })
        .catch(() => {
            document.getElementById("status-msg").innerText = "El sitio sigue en mantenimiento. Revisando...";
        });
}
