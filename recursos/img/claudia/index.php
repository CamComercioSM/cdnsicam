<!DOCTYPE html>
<html>
<head>
  <title>Imagenes de Claudia - Asesora Virtual</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <h2>Imagenes de Claudia - Asesora Virtual</h2>
  <p>
  Estas son las imagenes que se encuentran en la carpeta destinada para archivas todas las versiones del asistente virtual:</p>
  
  <p>El archivo PSD está en :<a href="https://img.tiendasicam32.net/claudia/OperadorChat.psd" target="_blank" download >https://img.tiendasicam32.net/claudia/OperadorChat.psd</a> (cualquier actualización debe ser enviada al area de desarrollo)</p>
  
  <div class="row" >



<?php
$all_files = glob("*.*");
  for ($i=0; $i<count($all_files); $i++)
    {
      $image_name = $all_files[$i];
      $supported_format = array('gif','jpg','jpeg','png');
      $ext = strtolower(pathinfo($image_name, PATHINFO_EXTENSION));
      if (in_array($ext, $supported_format))
          {
            echo '<img src="'.$image_name .'" alt="'.$image_name.'" style="width: 30vw;" />'.'<br />url: https://img.tiendasicam32.net/claudia/'.$image_name .' <br />';
          } else {
              continue;
          }
    }
    
    
    
    
    ?>
    
    
    </div>
    
    
    
    
    
</div>

</body>
</html>