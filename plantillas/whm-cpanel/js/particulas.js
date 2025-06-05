// Crea el contenedor de partículas si no existe
document.addEventListener('DOMContentLoaded', function () {
    if (!document.getElementById('particles-js')) {
        const div = document.createElement('div');
        div.id = 'particles-js';
        document.body.appendChild(div);
    }

    // Cargar la librería particles.js si no está incluida
    if (typeof particlesJS === 'undefined') {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
        script.onload = () => iniciarParticulas();
        document.head.appendChild(script);
    } else {
        iniciarParticulas();
    }

    function iniciarParticulas() {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#203f84" },
                "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
                "opacity": { "value": 0.5 },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#c4d2f3", "opacity": 0.4, "width": 1 },
                "move": { "enable": true, "speed": 2 }
            },
            "interactivity": {
                "events": {
                    "onhover": { "enable": true, "mode": "repulse" },
                    "onclick": { "enable": true, "mode": "push" }
                },
                "modes": {
                    "repulse": { "distance": 100, "duration": 0.4 },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }
});
