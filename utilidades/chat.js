var estadoChat = 'cerrado';
var abrirCerrarWidgetChat = function () {
    if (estadoChat === 'cerrado') {
        window.fcWidget.open();
        document.getElementById('fc_frame').style.display = 'block';
    } else {
        window.fcWidget.close();
        document.getElementById('fc_frame').style.display = 'none';
    }
};
function initFreshChat() {
    window.fcWidget.init({
        token: "9501c77f-0b06-43bd-9d1b-e84f7752b86f",
        host: "https://wchat.freshchat.com",
        config: {
            headerProperty: {
                appLogo: 'https://https://img.tiendasicam32.net/claudia/RostroOperador.png',
                backgroundImage: 'https://img.tiendasicam32.net/claudia/fondo-chat.jpg',
                direction: 'ltr' //will move widget to left side of the screen
            },
        }
    });
    window.fcWidget.on("widget:opened", function () {
        console.log('Widget Opened');
        estadoChat = 'abierto';
        document.getElementById('fc_frame').style.display = 'block';
        document.getElementById('fc_frame').classList.add('no-print');
    });
    window.fcWidget.on("widget:closed", function () {
        console.log('widget was closed');
        estadoChat = 'cerrado';
        document.getElementById('fc_frame').style.display = 'none';
        document.getElementById('fc_frame').classList.add('no-print');
    });
    window.fcWidget.on("widget:loaded", function (resp) {
        document.getElementById('fc_frame').style.display = 'none';
        document.getElementById('fc_frame').classList.add('no-print');
        console.log("arrancó el chat");
        var img = document.createElement('img');
        img.src = 'https://si.sicam32.net/media/claudia/OperadorChat.gif';
        img.onclick = function () {
            abrirCerrarWidgetChat();
        };
        img.style.position = "fixed";
        img.style.maxHeight = "180px";
        img.style.bottom = "0px";
        img.style.left = "10px";
        img.style.overflow = "hidden";
        img.style.cursor = "pointer";
        img.style.zIndex = zIndex() - 1;
        img.classList.add('no-print');
        document.getElementsByTagName('body')[0].appendChild(img);
    });
}
function initialize(i, t) {
    var e;
    i.getElementById(t) ? initFreshChat() : ((e = i.createElement("script")).id = t, e.async = false, e.src = "https://wchat.freshchat.com/js/widget.js", e.onload = initFreshChat, i.head.appendChild(e))
}
function initiateCall() {
    initialize(document, "freshchat-js-sdk")
}
window.addEventListener ? window.addEventListener("load", initiateCall, !1) : window.attachEvent("load", initiateCall, !1);
if (typeof zIndex === 'undefined') {
    function zIndex() {
        var allElems = document.getElementsByTagName ? document.getElementsByTagName("*") : document.all; // or test for that too
        var maxZIndex = 0;
        for (var i = 0; i < allElems.length; i++) {
            var elem = allElems[i];
            var cStyle = null;
            if (elem.currentStyle) {
                cStyle = elem.currentStyle;
            } else if (document.defaultView && document.defaultView.getComputedStyle) {
                cStyle = document.defaultView.getComputedStyle(elem, "");
            }
            var sNum;
            if (cStyle) {
                sNum = Number(cStyle.zIndex);
            } else {
                sNum = Number(elem.style.zIndex);
            }
            if (!isNaN(sNum)) {
                maxZIndex = Math.max(maxZIndex, sNum);
            }
        }
        return maxZIndex + 1;
    }
}