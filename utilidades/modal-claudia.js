// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Crear fondo oscurecido
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '9999';

    // Crear contenedor del modal
    const modal = document.createElement('div');
    modal.style.position = 'relative';
    modal.style.maxWidth = '90%';
    modal.style.maxHeight = '90%';
    modal.style.cursor = 'pointer';

    // Crear imagen
    const img = document.createElement('img');
    img.src = 'https://cdnsicam.net/ia/ClaudIA_Popup_piloto.png';
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.borderRadius = '12px';
    img.alt = 'ClaudIA';

    // Redirige al hacer clic
    modal.addEventListener('click', function () {
        window.location.href = 'https://claudia.appsicam.net/';
    });

    // Opcional: cerrar modal al hacer clic fuera
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });

    // Insertar elementos
    modal.appendChild(img);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
});
