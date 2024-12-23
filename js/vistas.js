function crearTabs(nameTabMenu, idTabMenu, html) {
    if (!$("#" + idTabMenu).length) {
        $("#tab-menu").append('<li class="tab tab-vistas " id="tab-' + idTabMenu + '">'
          + '<span class="tab-drag-area" style="float: left;position: absolute;top: 0px;left: 0px;z-index: 999;padding: 15px 0px;"" ><i class="glyphicon glyphicon-option-vertical"></i></span>'
          + '<a href="#' + idTabMenu + '" data-toggle="tab"> <span id="tabTitulo' + idTabMenu + '">' + nameTabMenu + '</span><button type="button" onclick="cerrarTab(&#39;' + idTabMenu + '&#39;);" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>' + '</a>'
          + '</li>');
        $("#tab-contenido").append('<div class="tab-pane tab" id="' + idTabMenu + '"></div>');
        $("#" + idTabMenu).html(html);
    } else {
        $("#tabTitulo" + idTabMenu).empty();
        $("#tabTitulo" + idTabMenu).html(nameTabMenu);
        $("#" + idTabMenu).html(html);
    }
    activarTab(idTabMenu);
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $.fn.dataTable.tables({visible: true, api: true}).columns.adjust();
    });
    $("#atrasTabs").fadeOut();
    $('.tab-vistas').arrangeable({dragSelector: '.tab-drag-area'});
}

function activarTab(idTabMenu) {
    $(".tab").removeClass('active');
    $("#" + idTabMenu).addClass('active');
    $("#tab-" + idTabMenu).addClass('active');
}

function cerrarTab(idTabMenu) {
    $("#" + idTabMenu).remove();
    $("#tab-" + idTabMenu).remove();
    var tabsCreados = $("#tab-contenido .tab");
    if (!tabsCreados.length) {
        $("#atrasTabs").fadeIn();
        cambiarURL('Sistema De información de la Cámara 32', '/');
    } else {
        var ultimoTab = $(tabsCreados[(tabsCreados.length - 1)]).attr('id');
        activarTab(ultimoTab);
    }
}

function cerrarTabContenedor(elemento) {
    var idTabContenedor = $("#" + elemento).parent(".tab").attr("id");
    cerrarTab(idTabContenedor);
}

function removeTab(idTabMenu) {
    $("#" + idTabMenu).remove();
    $("#tab-" + idTabMenu).remove();
    if (!$(".tab").length) {
        $("#atrasTabs").fadeIn();
    }
}
