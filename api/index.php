<?php
require_once './configBASE.php';
$directorioRaiz = "standalone/";
$carpetas = scandir($directorioRaiz);
$nombresApps = array(
    "activos" => array("Inventario de Activos", "SICAM32.png"),
    "afiliados" => array("Modulo de Afiliados", "SICAM32.png"),
    "almacen" => array("Almacen de suministros", "SICAM32.png"),
    "app-movil" => array("APP movil para afiliados", "app-afiliados.png"),
    "asistencia" => array("Asistencia de Colaboradores", "asistencia.png"),
    "autoreporte-covid19" => array("Autoreporte sintomas Covid-19", "SICAM32.png"),
    "bonos" => array("Bonos", "SICAM32.png"),
    "calculadora" => array("MASC Calculadora de tarifas", "calculadora.png"),
    "certificadofacil" => array("CertificadoFacil", "SICAM32.png"), "citas" => array("Solicitud de citas", "SICAM32.png"), "compras" => array("Solicitudes de Compra", "Compras.png"), "firma.correo" => array("Firma del Correo Electronico", "Firma.png"), "consulta-citas" => array("Consulta de citas", "SICAM32.png"), "correo" => array("Correo Electronico", "gmail.png"),
    "direcciones" => array("Direcciones", "SICAM32.png"), "doble-verificacion" => array("Doble Verificacion", "SICAM32.png"), "formulario-informales" => array("Registro Informales", "SICAM32.png"), "inscripcion-eventos" => array("Eventos", "SICAM32.png"), "libros" => array("Libros", "SICAM32.png"), "listado-votantes" => array("Listado de Votantes", "SICAM32.png"), "notacontable" => array("Nota Contable", "Nota.png"), "peticiones" => array("Peticiones", "Peticiones.png"),
    "planeador" => array("Planeador", "PAT.png"), "pqrs" => array("Formulario de PQRS", "SICAM32.png"), "renuevafacil" => array("RenuevaFacil", "SICAM32.png"), "ruleta-todos-ganan" => array("Ruleta Todos Ganan", "SICAM32.png"), "sellado-de-documentos" => array("Sellado de Documentos", "SICAM32.png"), "sicam" => array(" .Sistema de Informacion", "SICAM32.png"), "solicitudes-inscripcion-libros" => array("Inscripcion de Libros ", "SICAM32.png"),
    "sorteo" => array("Sorteo", "sorteo.png"), "sorteo-elecciones-2018" => array("Sorteo Elecciones 2018", "SICAM32.png"), "validar" => array("Validar Colaborador", "SICAM32.png"), "venta-informacion" => array("Solicitud de Informacion", "SICAM32.png"), "verificacion-activo" => array("Verificacion de Activo", "SICAM32.png"), "verificacion-documento" => array("Verificacion de Documento", "SICAM32.png")
);
$apps = Array();
for ($i = 2; $i < count($carpetas) - 2; $i++) {
    $apps[$carpetas[$i]] = array($carpetas[$i], "https://tiendasicam32.net/standalone/" . $carpetas[$i], "libs/img/" . $carpetas[$i] . ".png");
}
// Deshabilitacion de modulos o carpetas no utilizadas
unset($apps["api"], $apps["alimentador"], $apps["apps"], $apps["base.tmpl"], $apps["citas2"], $apps["citurcam"], $apps["correspondencia"],
  $apps["detallesAutoreporte"], $apps["editor-plantillas"], $apps["eventos-capacitaciones"], $apps["formulario-libros"],
  $apps["permisos"], $apps["php_errors.log"], $apps["s"], $apps["solicitud-inscripcion-libros"], $apps["turnos"], $apps["tiendasicam32"], $apps["standalone"], $apps["index.php"]);
//Correccion de URLs diferentes al dominio tiendasicam32.net/standalone/
$apps["correo"][1] = "https://correo.ccsm.org.co";
$apps["firma.correo"][1] = "https://firma.correo.ccsm.org.co";
$apps["sicam"][1] = "https://si.sicam32.net/";
$apps["asistencia"][1] = "https://apps.sicam32.net/detalles/asistencia-colaboradores";
//Correcion de nombres e iconos
foreach ($apps as list(&$indice0, &$indice1, &$indice2)) {
    if (is_array($nombresApps)) {
        if (isset($nombresApps[$indice0])) {
            if (is_array($nombresApps[$indice0])) {
                if (is_array($nombresApps[$indice0][1])) {
                    $indice2 = $indice2 . $nombresApps[$indice0][1];
                    $indice0 = $nombresApps[$indice0][0];
                }
            }
        }
    }
}
sort($apps, SORT_ASC);
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Catalogo de Apps CCSM</title>
        <link rel="stylesheet" href="libs/plantillas/meyawo-1.0.0/assets/vendors/themify-icons/css/themify-icons.css">
        <!-- Bootstrap + Meyawo main styles -->
        <link rel="stylesheet" href="libs/plantillas/meyawo-1.0.0/assets/css/meyawo.css">
    </head>
    <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        <!-- portfolio section -->
        <section class="section" id="portfolio">
            <div class="container text-center">
                <p class="section-subtitle">Catalogo de Aplicaciones</p>
                <h6 class="section-title mb-6">Portafolio</h6>
                <!-- row -->
                <div class="row">                    
                    <?php
                    foreach ($apps as $key => $value) {
                        ?>
                        <div class="col-md-3">
                            <a href="<?= $value[1] ?>" class="portfolio-card" target="_blank">
                                <img src="libs/img/tienda/apple-icon.png" class="portfolio-card-img"
                                     alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page">
                                <span class="portfolio-card-overlay">
                                    <span class="portfolio-card-caption">
                                        <h4><?= $value[1] ?></h4>
                                        <p class="font-weight-normal">Tipo Aplicacion</p>
                                        <p class="font-small"><?= $value[1] ?></p>
                                    </span>
                                </span>
                            </a>
                        </div>
                        <?php
                    }
                    ?>
                </div><!-- end of row -->
            </div><!-- end of container -->
        </section> <!-- end of portfolio section -->
        <!-- section -->
        <section class="section-sm bg-primary">
            <!-- container -->
            <div class="container text-center text-sm-left">
                <!-- row -->
                <div class="row align-items-center">
                    <div class="col-sm offset-md-1 mb-4 mb-md-0">
                        <h6 class="title text-light">Información Tecnica del Servidor</h6>
                        <!--<p class="m-0 text-light">Always feel Free to Contact & Hire me</p>-->
                        <div>
                            <?php phpinfo(); ?>
                        </div>
                    </div>
                    <div class="col-sm offset-sm-2 offset-md-3">
                        <button class="btn btn-lg my-font btn-light rounded">Verión PHP Actual: <?= phpversion(); ?></button>
                        <button class="btn btn-lg my-font btn-light rounded">Última Modificación: <?= date("F d Y H:i:s.", getlastmod()); ?></button>
                    </div>
                </div> <!-- end of row -->
            </div> <!-- end of container -->
        </section> <!-- end of section -->
        <!-- footer -->
        <div class="container">
            <footer class="footer">
                <p class="mb-0">Copyright
                    <script>document.write(new Date().getFullYear())</script> &copy; <a
                        href="http://www.ccsm.org.co">Cámara de Comercio de Santa Marta para el Magdalena</a> - <a
                        href="https://www.ccsm.org.co">ccsm.org.co</a>
                </p>
                <div class="social-links text-right m-auto ml-sm-auto">
                    <a href="javascript:void(0)" class="link"><i class="ti-facebook"></i></a>
                    <a href="javascript:void(0)" class="link"><i class="ti-twitter-alt"></i></a>
                    <a href="javascript:void(0)" class="link"><i class="ti-google"></i></a>
                    <a href="javascript:void(0)" class="link"><i class="ti-pinterest-alt"></i></a>
                    <a href="javascript:void(0)" class="link"><i class="ti-instagram"></i></a>
                    <a href="javascript:void(0)" class="link"><i class="ti-rss"></i></a>
                </div>
            </footer>
        </div> <!-- end of page footer -->
        <!-- core  -->
        <script src="libs/plantillas/meyawo-1.0.0/assets/vendors/jquery/jquery-3.4.1.js"></script>
        <script src="libs/plantillas/meyawo-1.0.0/assets/vendors/bootstrap/bootstrap.bundle.js"></script>
        <!-- bootstrap 3 affix -->
        <script src="libs/plantillas/meyawo-1.0.0/assets/vendors/bootstrap/bootstrap.affix.js"></script>
        <!-- Meyawo js -->
        <script src="libs/plantillas/meyawo-1.0.0/assets/js/meyawo.js"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5163385221124664"
        crossorigin="anonymous"></script>




        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SFRX2Y9BJH"></script>
        <script>
                        window.dataLayer = window.dataLayer || [];
                        function gtag() {
                                dataLayer.push(arguments);
                        }
                        gtag('js', new Date());

                        gtag('config', 'G-SFRX2Y9BJH');
        </script>
    </body>
</html>