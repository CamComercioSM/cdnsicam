/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function (d) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '@media print { #userwayAccessibilityIcon { display:none; } }';
    document.getElementsByTagName('head')[0].appendChild(style);
    var s = d.createElement("script");
    /* uncomment the following line to override default position*/
    /* s.setAttribute("data-position", 3);*/
    /* uncomment the following line to override default size (values: small, large)*/
    /* s.setAttribute("data-size", "small");*/
    /* uncomment the following line to override default language (e.g., fr, de, es, he, nl, etc.)*/
    /* s.setAttribute("data-language", "language");*/
    /* uncomment the following line to override color set via widget (e.g., #053f67)*/
    /* s.setAttribute("data-color", "#053e67");*/
    /* uncomment the following line to override type set via widget (1=person, 2=chair, 3=eye, 4=text)*/
    /* s.setAttribute("data-type", "1");*/
    /* s.setAttribute("data-statement_text:", "Our Accessibility Statement");*/
    /* s.setAttribute("data-statement_url", "http://www.example.com/accessibility")";*/
    /* uncomment the following line to override support on mobile devices*/
    /* s.setAttribute("data-mobile", true);*/
    /* uncomment the following line to set custom trigger action for accessibility menu*/
    /* s.setAttribute("data-trigger", "triggerId")*/
    s.setAttribute("data-account", "BAlT5JYFY6");
    s.setAttribute("src", "https://cdn.userway.org/widget.js");
    (d.body || d.head).appendChild(s);
})(document);