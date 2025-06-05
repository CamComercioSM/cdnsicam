function checkWebsiteStatus(dominio, tiempo_recarga_disponible) {
    console.log("sitio: ", dominio);
    document.getElementById("status-msg").innerText = "Comprobando estado del sitio...";

    const apiChecker = "https://cdnsicam.net/plantillas/whm-cpanel/verificador.php?dominio=" + dominio;

    fetch(apiChecker)
    .then(response => response.json())
    .then(data => {
        console.log("Estado del sitio:", data);
        console.log("Código HTTP:", data.status);
        console.log("Título de la página:", data.title);

        if (data.status === 200 && !data.title.toLowerCase().includes("suspended")) {
            document.getElementById("status-msg").innerHTML = "<h1>Sitio disponible, redirigiendo...</h1>";
            setTimeout(() => window.location.href = "https://" + dominio, 5000);
        } else {
            document.getElementById("status-msg").innerText = `Sitio responde con estado ${data.status}. Sigue fuera de servicio.`;
        }
    })
    .catch(error => {
        console.error("Error al verificar el sitio:", error);
        document.getElementById("status-msg").innerText = "El sitio sigue en mantenimiento. Revisando...";
    });

}
