<?php
// Enviar encabezado HTTP 503 (Servicio no disponible) con un Retry-After de 3600 segundos (1 hora)
header("HTTP/1.1 503 Service Unavailable");
header("Retry-After: 3600"); // Indica a los motores de búsqueda que vuelvan a intentar en 1 hora
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ruta de Crecimiento - Mantenimiento</title>
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />        
        <script defer src="https://kit.fontawesome.com/01ae7d183b.js" crossorigin="anonymous"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

        <style>
            /* Aseguramos que html y body ocupen el 100% del alto */
            html, body {
                height: 100%;
                margin: 0;
                font-family: Arial, sans-serif;
                overflow: hidden;
            }

            /* Fondo animado con gradiente */
            .background-animation {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
                background: linear-gradient(-45deg, #0c1892, #1a1a1a, #0c1892, #1a1a1a);
                background-size: 400% 400%;
                animation: gradientBG 10s ease infinite;
            }

            @keyframes gradientBG {
                0% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    background-position: 0% 50%;
                }
            }

            /* Div para el fondo animado con Particles.js */
            #particles-js {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 2;
                top: 0;
                left: 0;
            }

            /* Contenedor del contenido que se muestra sobre el fondo animado */
            .content {
                position: relative;
                z-index: 3;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }

            /* Tarjeta de mantenimiento con fondo semitransparente */
            .card-maintenance {
                background: rgba(0, 0, 0, 0.75);
                border: none;
                padding: 40px;
                border-radius: 10px;
                text-align: center;
                max-width: 500px;
                width: 100%;
            }

            .card-maintenance img {
                width: 100%;
                margin-bottom: 20px;
            }

            .card-maintenance h1 {
                font-size: 2.5rem;
                margin-bottom: 20px;
                color: #ffffff;
            }

            .card-maintenance p {
                font-size: 1.2rem;
                color: #ddd;
            }

            .card-maintenance a {
                color: #00bfff;
                text-decoration: none;
            }

            .card-maintenance a:hover {
                text-decoration: underline;
            }

            .whatsapp {
                position:fixed;
                width:32px;
                height:32px;
                bottom:40px;
                left:40px;
                background-color:#25d366;
                color:#FFF;
                border-radius:50px;
                text-align:center;
                font-size:16px;
                z-index:100;
                transform: scale(2);
                animation: pulse 2s infinite;
            }

            .whatsapp-icon {
                margin-top:8px;
            }



            /* Para dispositivos móviles */
            @media (max-width: 768px) {
                .content {
                    display: block; /* En móviles, permite que el contenido fluya */
                    padding: 10px; /* Reduce el padding para pantallas pequeñas */
                    overflow-y: auto;
                }

                .card-maintenance {
                    padding: 10px; /* Reduce el padding en móviles */
                    max-width: 100%; /* Permite que se ajuste mejor a la pantalla */
                }

                .whatsapp {
                    width: 20px;
                    height: 20px;
                    bottom: 20px;
                    left: 20px;
                    font-size: 14px;
                }


                .whatsapp-icon {
                    margin-top:4px;
                }

            }

        </style>
    </head>
    <body>
        <!-- Fondo animado con gradiente -->
        <div class="background-animation"></div>

        <!-- Fondo animado con partículas -->
        <div id="particles-js"></div>

        <!-- Contenido de mantenimiento -->
        <div class="content">
            <div class="card-maintenance">
                <!-- Logo de la Cámara de Comercio de Santa Marta -->
                <img src="https://cdnsicam.net/img/rutac/rutac_blanco.png" alt="Ruta de Crecimiento - Cámara de Comercio de Santa Marta" />
                <h1>Sitio en Mantenimiento</h1>
                <p id="status-msg" style="color: #aaa; font-size: 14px;  ">Verificando disponibilidad...</p>       
                <p>Desde la Ruta de Crecimiento de la Cámara de Comercio de Santa Marta para el Magdalena, estamos actualizando nuestros servicios para ofrecerte una mejor experiencia.</p>
                <p>Volveremos Pronto. ¡Gracias por tu paciencia!</p>
                <p style="font-size:120%; font-weight: bold; " >
                    Si necesitas información, contáctanos en <a href="mailto:info@rutadecrecimiento.com">info@rutadecrecimiento.com</a> o esríbenos al <a href="https://wa.me/573218150243?text=Me%20gustaría%20saber%20........." target="_blank">+573218150243</a>.
                </p>
                <p>
                    Para más información, visita <a href="https://www.ccsm.org.co" target="_blank">www.ccsm.org.co</a>
                </p>

            </div>
        </div>

        <!-- Particles.js Library -->
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
        <script>
            /* Configuración de Particles.js */
            particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false
                    },
                    "size": {
                        "value": 3,
                        "random": true
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "repulse": {
                            "distance": 100,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        }
                    }
                },
                "retina_detect": true
            });


            function checkWebsiteStatus() {
                fetch("https://rutadecrecimiento.com/")
                        .then(response => {
                            if (response.ok) {
                                document.getElementById("status-msg").innerText = "Sitio disponible, redirigiendo...";
                                setTimeout(() => window.location.href = "https://rutadecrecimiento.com/", 2000);
                            } else {
                                document.getElementById("status-msg").innerText = "El sitio sigue en mantenimiento. Revisando...";
                            }
                        })
                        .catch(() => {
                            document.getElementById("status-msg").innerText = "El sitio sigue en mantenimiento. Revisando...";
                        });
            }

            setInterval(checkWebsiteStatus, 10000);
        </script>

        <!-- Bootstrap JS (opcional, si necesitas funcionalidades JS) -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>



        <a href="https://wa.me/573218150243?text=Me%20gustaría%20saber%20........." class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
    </body>
</html>