function checkSelecionados(idTabla, eliminar=false) {
    var oTable = $('#'+ idTabla).DataTable();
    if(!eliminar){
        var seleccion = oTable.$("input[type='checkbox']").serializeArray();
    }else{
        var seleccion = oTable.$("input[type='checkbox']").serialize();
    }
    return seleccion;
}

function checkSelecionadosNormal(idTabla, eliminar=false) {
    var oTable = $('#'+ idTabla);
    if(!eliminar){
        var seleccion = oTable.find("input[type='checkbox']").serializeArray();
    }else{
        var seleccion = oTable.find("input[type='checkbox']").serialize();
    }
    return seleccion;
}

function validacionCheckbox(checkSeleccionados, funcionEjecutable, maxUno = true){
    if (checkSeleccionados.length == 0) {
        swal("Error!", 'NO HA SELECCIONADO NINGUNA OPCIÓN', "error");
    } else {
        if(maxUno){
            if (checkSeleccionados.length > 1) {
                swal("Error!", 'HA SELECCIONADO MAS OPCIONES DE LO PERMITIDO', "error");
            } else {
                funcionEjecutable();
            }
        }else{
            funcionEjecutable();
        }
    }
}
