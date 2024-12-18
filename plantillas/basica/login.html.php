<div  id="autentificacionModal"  class="modal fade " tabindex="-1" 
      aria-labelledby="autentificacionModalLabel"
      data-backdrop="static" data-keyboard="false"  
      backdrop="static" keyboard="false"  role="dialog"
      data-bs-backdrop="static" data-bs-keyboard="false" 
      >
    <div class="modal-dialog modal-lg"  role="document">
        <form id="formLoginColaboradores" onsubmit="return false;" >
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="autentificacionModalLabel">Control de Acceso</h5>
                </div>
                <div class="modal-body">
                    <h4 class="text-center" >Solo Colaboradores de la CamComercioSM</h4>
                    <div>
                        <div class="form-group">
                            <label for="colaboradorUSUARIO">Usuario</label>
                            <input type="text" class="form-control" name="username" id="colaboradorUSUARIO"  autocomplete="on" value="" required="" />
                        </div>
                        <div class="form-group">
                            <label for="colaboradorPASSWORD">Contraseña</label>
                            <input type="password" class="form-control" name="password" id="colaboradorPASSWORD"  autocomplete="on" value="" required=" /">
                        </div>
                    </div>
                </div>
                <div class="modal-footer formulario " >
                    <button type="submit" id="btnEntrar" class="btn btn-primary login w-100">Entrar</button>
                </div>
            </div>
        </form>
    </div>
</div>
<script type="text/javascript">
    $(document).ready(function () {
        $('#autentificacionModal').modal({backdrop: 'static', keyboard: false});
        $('#autentificacionModal').modal('show');
        $("#formLoginColaboradores").submit(function () {
            if ($("#colaboradorUSUARIO").val() && $("#colaboradorPASSWORD").val()) {
                validarDatosLoginColaborador($("#colaboradorUSUARIO").val(), $("#colaboradorPASSWORD").val());
            } else {
                avisoInformacion("Por favor ingrese los datos.");
            }
        });
    });
</script>