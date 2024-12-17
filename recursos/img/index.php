<!doctype html>
<html lang="en" data-bs-theme="auto">
    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
        <meta name="generator" content="Hugo 0.122.0">
        <title>Imagenes CCSM</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3">

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">

        <meta name="theme-color" content="#712cf9">


        <style>
            .bd-placeholder-img {
                font-size: 1.125rem;
                text-anchor: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
            }

            @media (min-width: 768px) {
                .bd-placeholder-img-lg {
                    font-size: 3.5rem;
                }
            }

            .b-example-divider {
                width: 100%;
                height: 3rem;
                background-color: rgba(0, 0, 0, .1);
                border: solid rgba(0, 0, 0, .15);
                border-width: 1px 0;
                box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
            }

            .b-example-vr {
                flex-shrink: 0;
                width: 1.5rem;
                height: 100vh;
            }

            .bi {
                vertical-align: -.125em;
                fill: currentColor;
            }

            .nav-scroller {
                position: relative;
                z-index: 2;
                height: 2.75rem;
                overflow-y: hidden;
            }

            .nav-scroller .nav {
                display: flex;
                flex-wrap: nowrap;
                padding-bottom: 1rem;
                margin-top: -1px;
                overflow-x: auto;
                text-align: center;
                white-space: nowrap;
                -webkit-overflow-scrolling: touch;
            }

            .btn-bd-primary {
                --bd-violet-bg: #712cf9;
                --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

                --bs-btn-font-weight: 600;
                --bs-btn-color: var(--bs-white);
                --bs-btn-bg: var(--bd-violet-bg);
                --bs-btn-border-color: var(--bd-violet-bg);
                --bs-btn-hover-color: var(--bs-white);
                --bs-btn-hover-bg: #6528e0;
                --bs-btn-hover-border-color: #6528e0;
                --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
                --bs-btn-active-color: var(--bs-btn-hover-color);
                --bs-btn-active-bg: #5a23c8;
                --bs-btn-active-border-color: #5a23c8;
            }

            .bd-mode-toggle {
                z-index: 1500;
            }

            .bd-mode-toggle .dropdown-menu .active .bi {
                display: block !important;
            }
        </style>


    </head>
    <body>


        <main>

            <section class="py-1 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Imagenes para Aplicaciones, Publicidad, ..........</h1>
                        <p class="lead text-body-secondary">Navega por nuestro directorio de imagenes y descarga o inserta la que necesites.</p>
                    </div>
                </div>
            </section>

            <div class="album py-1 bg-body-tertiary">
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                        
                        <?php imprimirEstructuraArchivos(); ?>
                        
                    </div>
                </div>
            </div>

        </main>

        <footer class="text-body-secondary py-5">
            <div class="container">
                <p class="float-end mb-1">
                    <a href="#">volver arriba</a>
                </p>               
            </div>
        </footer>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>

    </body>
</html>


<?php
function imprimirEstructuraArchivos($directorio = "") {
    $carpeta = __DIR__ . DIRECTORY_SEPARATOR . $directorio;
    $archivos = scandir($carpeta);
    foreach ($archivos as $key => $archivo) {
        if ($archivo != "." && $archivo != ".." && $archivo != ".well-known") {
            if (is_dir($carpeta . DIRECTORY_SEPARATOR . $archivo)) {
                $filecount = count(glob($carpeta . DIRECTORY_SEPARATOR . $archivo . DIRECTORY_SEPARATOR . "*"));
                if($filecount >= 1){
?>

                    </div>
                </div>
            </div>
            

            <div class="album py-5 bg-body-tertiary">
                <div class="container">
                    
                    <div id="<?= $archivo  ?>"  class="row">
                         <div class="col align-self-center">
                             <a href="#<?= $archivo  ?>" target="_self"><h2><?= $directorio."/".$archivo  ?> [<?=$filecount?>]</h2></a>
                          </div>
                        </div>

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                        
                        
<?php

                }
                imprimirEstructuraArchivos($directorio . DIRECTORY_SEPARATOR . $archivo);
            } else {
                if (preg_match('/[\s\S]+\.(png|jpg|jpeg|gif|svg|PNG|JPG|JPEG|GIF)/', $carpeta . DIRECTORY_SEPARATOR . $archivo)) {
?>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src="https://img.tiendasicam32.net<?= $directorio ?>/<?= $archivo ?>" class="card-img-top" alt="https://img.tiendasicam32.net<?= $directorio ?>/<?= $archivo ?>">
                                <div class="card-body">
                                    <p class="card-text">https://img.tiendasicam32.net<?= $directorio ?>/<?= $archivo ?></p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <a  type="button" class="btn btn-sm btn-outline-success" href='https://img.tiendasicam32.net<?= $directorio ?>/<?= $archivo ?>' target="_blank" >Ver</a>
                                            <a  type="button" class="btn btn-sm btn-outline-danger" href="javascript:void();"  onclick='navigator.clipboard.writeText("https://img.tiendasicam32.net<?= $directorio ?>/<?= $archivo ?>")' target="_self" >Copiar</a>
                                            <a type="button" class="btn btn-sm btn-warning" href="https://img.tiendasicam32.net<?= $directorio ?>/<?= $archivo ?>" download="<?= $archivo ?>" >Descargar</a>
                                            
                                            
                                            
                                            
                                        </div>
                                        <small class="text-body-secondary"><?= $directorio ?></small>
                                    </div>
                                </div>
                            </div>
                        </div>
<?php
                }
            }
        }
    }
}
?>