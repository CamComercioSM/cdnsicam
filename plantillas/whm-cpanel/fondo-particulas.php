<style>
    #particles-js {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        top: 0;
        left: 0;
    }
</style>

<div id="particles-js"></div>

 <!-- Particles.js -->
 <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
 <script>
    document.addEventListener('DOMContentLoaded', function() {
        // Tu código de particlesJS va aquí dentro
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
        // Puedes poner más código aquí si necesitas que se ejecute al cargar el DOM
    });
</script>


