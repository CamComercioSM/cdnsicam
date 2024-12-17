function crearTabla(idTabla) {
    return $('#' + idTabla).dataTable();
}

function crearTablaParaDescargaDatos(idTabla, alto = 420) {
    return $('#' + idTabla).dataTable({
        dom: 'Bfrtip',
        buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
        "language": {
            "url": "libs/json/espagniol.json"
        },
        "paging": false,
        "info": false,
        "scrollY": alto,
        "scrollX": false
    });
}

function crearTablaBasica(idTabla) {
    return $('#' + idTabla).dataTable({
        "paging": false,
        "ordering": false,
        "info": false
    });
}

function crearTablaCompleta(idTabla) {
    return $('#' + idTabla).dataTable({});
}

function crearTablaVertical(idTabla, alto = 420) {
    return $('#' + idTabla).dataTable({
        "paging": false,
        "info": false,
        "scrollY": "" + alto + "px",
        "scrollX": true
    });
}

function crearTablaScroll(idTabla, alto = 420) {
    return $('#' + idTabla).dataTable({
        "scrollY": ""+alto+"px",
        "scrollX": true,
        "scrollCollapse": true,
        "paging": false,
        "info": false,
        "order": [[1, "desc"]]
    });
}

function crearTablaScrollVertical(idTabla, alto = 420) {
    return $('#' + idTabla).dataTable({
        "scrollY": "" + alto + "px",
        "scrollCollapse": true,
        "paging": false
    });
}

function activarSeleccionarTodosClase(classCheckBoxSeleccionarTodos, claseCheckBoxes) {
    $("." + classCheckBoxSeleccionarTodos).on('ifChecked', function (event) {
        seleccionarTodosRegistros(claseCheckBoxes);
    });
    $("." + classCheckBoxSeleccionarTodos).on('ifUnchecked', function (event) {
        deseleccionarTodosRegistros(claseCheckBoxes);
    });
}

function activarSeleccionarTodos(idCheckBoxSeleccionarTodos, claseCheckBoxes) {
    $("#" + idCheckBoxSeleccionarTodos).on('ifChecked', function (event) {
        seleccionarTodosRegistros(claseCheckBoxes);
    });
    $("#" + idCheckBoxSeleccionarTodos).on('ifUnchecked', function (event) {
        deseleccionarTodosRegistros(claseCheckBoxes);
    });
}

function seleccionarTodosRegistros(claseCheckBoxes) {
    $("." + claseCheckBoxes).iCheck('check');
}

function deseleccionarTodosRegistros(claseCheckBoxes) {
    $("." + claseCheckBoxes).iCheck('uncheck');
}

function registrosSeleccionadosDivision(idTablaListado) {
    return $('#' + idTablaListado + ' input:checked');
}

function registrosSeleccionadosTabla(idTabla) {
    var oTable = $('#' + idTabla).DataTable();
    var seleccion = oTable.$("input[type='checkbox']").serializeArray();
    return seleccion;
}
function registrosRadiosSeleccionadosTabla(idTabla) {
    var oTable = $('#' + idTabla).DataTable();
    var seleccion = oTable.$("input[type='radio']").serializeArray();
    return seleccion;
}


//
///
///
/////
/////
///////
///////
///////
//////////
/////////////
////////////////
/////////////////////



function seleccionadoEnTabla(idFormConTabla, operacion) {
    var seleccionados = unoSoloSeleccionadoTabla(idFormConTabla, operacion);
    if (seleccionados) {
        return  seleccionados.value;
    }
    return null;
}
function variosSeleccionadosEnTabla(idFormConTabla, operacion) {
    var seleccionados = unoSoloSeleccionadoTabla(idFormConTabla, operacion);
    if (seleccionados) {
        return seleccionados;
    }
    return null;
}

function unoSoloSeleccionadoTabla(idFormConTabla, operacion) {
    var seleccionados = registrosSeleccionadosTablaDentroObjeto(idFormConTabla);
    if (seleccionados.length == 1) {
        return seleccionados[0];
    } else {
        if (seleccionados.length == 0) {
            alertaInformacion("Debes seleccionar un registro para [" + operacion.toUpperCase() + "].");
            return null;
        } else {
            alertaPrevencion("Debes seleccionar SOLO UN registro para [" + operacion.toUpperCase() + "].");
            return null;
        }
    }
    return seleccionados;
}

function registrosSeleccionadosTablaDentroObjeto(idObjeto) {
    var oTable = $('#' + idObjeto + ' table').DataTable();
    var seleccion = oTable.$("input[type='checkbox']").serializeArray();
    return seleccion;
}


/**
 * Verifica que se haya selecionado solo un registro en la tabla contenida
 * en el formulario {idFormConTabla}     
 * @param {String} idFormConTabla id del formulario que contiene la tabla con los registros
 * @param {String} operacion Nombre de la operación que se va ha realizar con el registro seleccionado.
 * @returns {Element} Checkbox seleccionado
 */

function radioSeleccionadoTabla(idFormConTabla, operacion) {
    var seleccionados = registrosRadiosSeleccionadosTabla(idFormConTabla);
    if (seleccionados.length == 1) {
        return seleccionados[0];
    } else {
        if (seleccionados.length == 0) {
            alertaInformacion("Debes seleccionar un registro para [" + operacion.toUpperCase() + "].");
            return null;
        } else {
            alertaPrevencion("Debes seleccionar SOLO UN registro para [" + operacion.toUpperCase() + "].");
            return null;
        }
    }
    return seleccionados;
}

function unoSoloSeleccionadoTabla(idFormConTabla, operacion) {
    var seleccionados = registrosSeleccionadosTabla(idFormConTabla);
    if (seleccionados.length == 1) {
        return seleccionados[0];
    } else {
        if (seleccionados.length == 0) {
            alertaInformacion("Debes seleccionar un registro para [" + operacion.toUpperCase() + "].");
            return null;
        } else {
            alertaPrevencion("Debes seleccionar SOLO UN registro para [" + operacion.toUpperCase() + "].");
            return null;
        }
    }
    return seleccionados;
}

function unoSoloSeleccionadoVariasTablas(idsTablas = [], operacion) {
    var seleccionados = seleccionadosEnVariasTablas(idsTablas);
    if (seleccionados.length == 1) {
        return seleccionados[0];
    } else {
        if (seleccionados.length == 0) {
            alertaInformacion("Debes seleccionar un registro para [" + operacion.toUpperCase() + "].");
            return null;
        } else {
            alertaPrevencion("Debes seleccionar SOLO UN registro para [" + operacion.toUpperCase() + "].");
            return null;
        }
    }
    return seleccionados;
}

function seleccionadosEnVariasTablas(idsTablas = []) {
    var seleccionados = Array();
    idsTablas.forEach(function (currentValue, index, arr) {
        var seleccionadosTabla = registrosSeleccionadosTabla(currentValue);
        seleccionados = seleccionados.concat(seleccionadosTabla);
    });
    return seleccionados;
}
/**
 * Verifica que haya uno o más registros seleccionado, en la tabla contenida
 * en el formulario {idFormConTabla}
 * @param {String} idFormConTabla id del formulario que contiene la tabla con los registros
 * @param {String} operacion Nombre de la operación que se va ha realizar con los registros seleccionados.
 * @returns {Array} Elementos Checkbox seleccionados.
 */
function variosSeleccionadosTabla(idFormConTabla, operacion) {
    var seleccionados = registrosSeleccionadosTabla(idFormConTabla);
    if (seleccionados.length >= 1) {
        return seleccionados;
    } else {
        alertaPrevencion("Debes seleccionar, al menos, un registro para [" + operacion.toUpperCase() + "] .");
        return null;
    }
    return seleccionados.serialize();
}

function variosSeleccionadosVariasTablas(idsTablas = [], operacion) {
    var seleccionados = seleccionadosEnVariasTablas(idsTablas);
    if (seleccionados.length >= 1) {
        return seleccionados;
    } else {
        alertaInformacion("Debes seleccionar, al menos, un registro para [" + operacion.toUpperCase() + "] .");
        return null;
    }
    return seleccionados.serialize();
}

function agregarFilaTabla(idTabla, datosFila, idRow = null) {
    var table = $('#' + idTabla).DataTable();
    console.log(table);
    var rowNode = table.row.add(datosFila).draw().node();
    if (idRow != null) {
        $(rowNode).attr('id', idRow);
    }
    $(rowNode).css('color', 'red').animate({color: 'black'});
}

function quitarFilaTabla(idTabla, idRow) {
    var table = $(idTabla).DataTable();
    if ($(idTabla + " tr#" + idRow).length) {
        table.row($(idTabla + " tr#" + idRow)).remove().draw();
    }
}

function checkSelecionados(idTabla, serialize = false) {
    var oTable = $('#' + idTabla).DataTable();
    if (!serialize) {
        var seleccion = oTable.$("input[type='checkbox']").serializeArray();
    } else {
        var seleccion = oTable.$("input[type='checkbox']").serialize();
    }
    return seleccion;
}

function validacionCheckbox(checkSeleccionados, funcionEjecutable, maxUno = true) {
    if (checkSeleccionados.length == 0) {
        swal("Error!", 'NO HA SELECCIONADO NINGUNA OPCIÓN', "error");
    } else {
        if (maxUno) {
            if (checkSeleccionados.length > 1) {
                swal("Error!", 'HA SELECCIONADO MAS OPCIONES DE LO PERMITIDO', "error");
            } else {
                funcionEjecutable();
            }
        } else {
            funcionEjecutable();
        }
}
}

function totalesTablaEnColumna(tabla, columnaSuma, columnaTotal, row, data, start, end, display) {
    var api = tabla.api(),
      data;
    // Remove the formatting to get integer data for summation
    var intVal = function (i) {
        return typeof i === 'string' ? i.replace(/[\$,]/g, '') * 1 : typeof i === 'number' ? i : 0;
    };
    // Total over all pages
    total = api.column(columnaSuma).data().reduce(function (a, b) {
        return intVal(a) + intVal(b);
    }, 0);
    // Total over this page
    pageTotal = api.column(columnaSuma, {page: 'current'}).data().reduce(function (a, b) {
        return intVal(a) + intVal(b);
    }, 0);
    // Update footer
    $(api.column(columnaTotal).footer()).html(formatoMoneda(pageTotal)
      //+ ' ( $'+ total +' total)'
      );
}
