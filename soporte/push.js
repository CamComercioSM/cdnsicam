/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let scriptPUSH = document.createElement("script");
scriptPUSH.id = 'script_onesignal';
scriptPUSH.src = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
scriptPUSH.defer = true;
// script.load = alert('cargo');
document.head.appendChild(scriptPUSH);
window.OneSignal = window.OneSignal || [];
OneSignal.push(function () {
    OneSignal.init({
        appId: "8cda3fa2-2020-4fca-b915-626b2b3c5386",
        safari_web_id: "",
        notifyButton: {
            enable: true,
        },
    });
});