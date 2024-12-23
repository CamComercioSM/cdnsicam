
function cargarMenuItemCompraPendientes() {
    cargarDivision("menu-itemscompras", "contratos-compras", "SolicitudesAdquisiciones", "menuItemsPendientes", "",
      function (menuItemsCompra) {
          //console.log(menuItemsCompra); 
      }
    );
}

function consultarItemsCompraPendientesColaborador() {
    ejecutarOperacionOculta('contratos-compras', "SolicitudesAdquisiciones", "itemsPendientesColaborador", "",
      function (itemsCompras) {
          $(".num-itemscompra-pendientes").html(itemsCompras.length);

          var itemsPendientes = new Array();
          jQuery.each(itemsCompras, function (i, ItemCompra) {
              var idDiv = 'itemcompra-' + ItemCompra.solicitudItemID;
              if ($('#' + idDiv + '').length <= 0) {
                  $html = '<li id="' + idDiv + '"  >';
                  $html += crearMenuItemCompra(ItemCompra);
                  $html += '</li>';
                  $('#list-itemscompra-pendientes').append($html);
                  $('#' + idDiv + '').hide();
                  $('#' + idDiv + '').slideDown();
              } else {
                  if ($('#' + idDiv + '').length > 0) {
                      $('#' + idDiv + '').html(crearMenuItemCompra(ItemCompra));
                  } else {

                  }
              }
              itemsPendientes.push(idDiv);
          });

          var items = $('#list-itemscompra-pendientes li');
          jQuery.each(items, function (i, ItemLista) {
              var seEncontro = false;
              jQuery.each(itemsPendientes, function (i, ItemSICAM) {
                  if ($(ItemLista).attr('id') == ItemSICAM) {
                      seEncontro = true;
                  }
              });
              if (!seEncontro) {
                  $(ItemLista).slideUp(1000, function () {
                      $(ItemLista).remove();
                  });
              }
          });

      }
    );
}

function crearMenuItemCompra(ItemCompra) {
    $html = '<a id="#item-compra-' + ItemCompra.solicitudItemID + '" href="javascript:void(0)" title="' + ItemCompra.solicitudAdquisicionPROVEEDORPROPUESTO + '" '
      + ' onclick="cargarDetallesSolicitudesCompras(' + ItemCompra.solicitudAdquisicionID + ')" >';
    switch (ItemCompra.claseOperacionCODIGO) {
        case 'TECNOLOGIA':
            $html += ''
              + '<i class="icon fa fa-desktop text-aqua"></i> '
              + '';
            break;
        case 'COMPRAS':
            $html += ''
              + '<i class="icon fa fa-shopping-bag text-aqua"></i> '
              + '';
            break;
        case 'HONORARIOS':
            $html += ''
              + '<i class="icon fa fa-user-circle text-aqua"></i> '
              + '';
            break;

        default:
            $html += ''
              + '<i class="icon fa fa-cart-arrow-down text-red"></i>'
              + '';
            break;
    }
    $html += '' + ItemCompra.solicitudItemDESCRIPCION + '<span class="pull-right label label-success">' + ItemCompra.solicitudItemCANTIDAD + '</span>';
    $html += '</a>';

    return $html;
}



$(document).ready(function () {
    cargarMenuItemCompraPendientes();
});
 