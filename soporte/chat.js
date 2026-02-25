/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 
 
 function initFreshChat() {
 window.fcWidget.init({
 //token: "9501c77f-0b06-43bd-9d1b-e84f7752b86f",
 //host: "https://wchat.freshchat.com"
 token: "6f4a2e36-02d8-4085-ae76-1ac0632d096f",
 host: "https://wchat.freshchat.com"
 });
 }
 function initialize(i, t) {
 var e;
 i.getElementById(t) ? initFreshChat() : ((e = i.createElement("script")).id = t, e.async = !0, e.src = "https://wchat.freshchat.com/js/widget.js", e.onload = initFreshChat, i.head.appendChild(e))
 }
 function initiateCall() {
 initialize(document, "freshchat-js-sdk")
 }
 window.addEventListener ? window.addEventListener("load", initiateCall, !1) : window.attachEvent("load", initiateCall, !1);
 */
//var _smartsupp = _smartsupp || {};
//_smartsupp.key = '64c9c0b3dc4ce10515df0b4a5da0e2cb5fa99593';
//window.smartsupp||(function(d) {
//  var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
//  s=d.getElementsByTagName('script')[0];c=d.createElement('script');
//  c.type='text/javascript';c.charset='utf-8';c.async=true;
//  c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
//})(document);
//
//(function(a, m, o, c, r, m){a[m] = {id:"45278", hash:"6b03b6d49868fd3e8fab57966e885294743e6254a4746c013c21cc019d8d4ed8", locale:"es", inline:true, setMeta:function(p){this.params = (this.params || []).concat([p])}}; a[o] = a[o] || function(){(a[o].q = a[o].q || []).push(arguments)}; var d = a.document, s = d.createElement('script'); s.async = true; s.id = m + '_script'; s.src = 'https://gso.amocrm.com/js/button.js?1616138649'; d.head && d.head.appendChild(s)}(window, 0, 'amoSocialButton', 0, 0, 'amo_social_button'));
var estadoChat = 'cerrado';
var imgChat = null;
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
                appLogo: 'https://si.sicam32.net/media/claudia/RostroOperador.png',
                backgroundImage: 'https://si.sicam32.net/media/claudia/fondo-chat.jpg',
                direction: 'ltr' //will move widget to left side of the screen
            },
        }
    });
    window.fcWidget.on("widget:opened", function () {
        console.log('Widget Opened');
        estadoChat = 'abierto';
        document.getElementById('fc_frame').style.display = 'block';        
        document.getElementById('fc_frame').classList.add('no-print');        
        imgChat.style.display = "none";
    });
    window.fcWidget.on("widget:closed", function () {
        console.log('widget was closed');
        estadoChat = 'cerrado';
        document.getElementById('fc_frame').style.display = 'none';        
        document.getElementById('fc_frame').classList.add('no-print');
        imgChat.style.display = "block";
    });
    window.fcWidget.on("widget:loaded", function (resp) {
        document.getElementById('fc_frame').style.display = 'none';        
        document.getElementById('fc_frame').classList.add('no-print');
        console.log("arrancó el chat");
        imgChat = document.createElement('img');
        imgChat.src = 'https://si.sicam32.net/media/claudia/OperadorChat.gif';
        imgChat.onclick = function () {
            abrirCerrarWidgetChat();
        };
        imgChat.style.position = "fixed";
        imgChat.style.maxHeight = "180px";
        imgChat.style.bottom = "0px";
        imgChat.style.left = "10px";
        imgChat.style.overflow = "hidden";
        imgChat.style.cursor = "pointer";
        imgChat.style.zIndex = zIndex() - 1;
        imgChat.classList.add('no-print');
        document.getElementsByTagName('body')[0].appendChild(imgChat);
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