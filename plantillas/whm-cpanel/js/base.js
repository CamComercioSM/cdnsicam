function checkWebsiteStatus(url_cuenta, tiempo_recarga_disponible) {
    fetch(url_cuenta)
        .then(response => {
            if (response.status === 200) {
                document.getElementById("status-msg").innerHTML = "<h1>Sitio disponible, redirigiendo...</h1>";
                setTimeout(() => window.location.href = url_cuenta, tiempo_recarga_disponible * 1000);
            } else {
                document.getElementById("status-msg").innerText = "El sitio sigue en mantenimiento. Revisando...";
            }
        })
        .catch(() => {
            document.getElementById("status-msg").innerText = "El sitio sigue en mantenimiento. Revisando...";
        });
}
