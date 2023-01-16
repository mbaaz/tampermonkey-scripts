// ==UserScript==
// @name         Runacademy Intervallpass Printable
// @namespace    http://mbz.nu/tampermonkey/runacademy-intervall-printable
// @version      1.1
// @description  This will remove some (to me) unnecessary markup that spoils the printing experience
// @author       Matts Baaz
// @match        https://runacademy.se/*
// @updateURL    https://raw.githubusercontent.com/mbaaz/tampermonkey-scripts/main/Runacademy%20Intervallpass%20Printable.js
// @downloadURL  https://raw.githubusercontent.com/mbaaz/tampermonkey-scripts/main/Runacademy%20Intervallpass%20Printable.js
// @grant        none
// ==/UserScript==
'use strict';

(function($) {
    setTimeout(function(){
        $('head').append('<style type="text/css" media="print">.passinfo,footer,#main-menu,.fp2-header-menubar,p:has(a.a-button),hr:last-of-type,hr:last-of-type ~ *,.customIframe{display:none !important;} div{grid-template-columns:unset !important;} a[href]:after{content:"" !important;} div {margin-top:0 !important;}</style>');
        // $('nav').remove();
        // $('.sidebar').remove();
        // $('.card--feedback').remove();
        // $('.mh-mobile-menu').remove();
        // $('a').removeAttr('href');
    }, 500);
})(jQuery);