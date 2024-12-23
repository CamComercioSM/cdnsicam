<?php
$loader = new \Twig\Loader\FilesystemLoader([$Config->DIR_APP_PLANTILLA, $Config->DIR_PANTILLA]);
//echo $Config->DIR_PANTILLA;
//die();
//$loader = new \Twig\Loader\FilesystemLoader('/home/tiendasicam32/public_html/libs/plantillas/basica/');
$twig = new \Twig\Environment($loader, [
    'cache' => 'cache',
    'debug' => true
    ]
);
$twig->addExtension(new \Twig\Extension\DebugExtension());
$twig->addExtension(new \Twig\Extra\Intl\IntlExtension());
//Por aqui podemos conectarnos a la API del SICAM para sacar la info de la aplicación.
$twig->addGlobal('Config', new Config());
if (SesionCliente::estaLogueado()) {
    $twig->addGlobal('Usuario', SesionCliente::estaLogueado());
}
//print_r($Config);
$filter = new \Twig\TwigFilter('Config', new Config());
$twig->addFilter($filter);
$filter = new \Twig\TwigFilter('archivoExiste', function ($string) {
        return file_exists($string);
    });
$twig->addFilter($filter);
echo $twig->render('estructura.tmpl');
//print_r(get_defined_constants(true)['user']);
//echo "\n\n";
//print_r($Config);
//echo "\n\n";
//die('el index hasta aqui');