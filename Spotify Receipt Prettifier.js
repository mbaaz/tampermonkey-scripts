// ==UserScript==
// @name         Spotify Receipt Prettifier
// @namespace    http://mbz.nu/tampermonkey/spotify-receipt-prettifier
// @version      1.1
// @description  This will remove some (to me) unnecessary markup that spoils the printing experience of the spotify receipts
// @author       Matts Baaz
// @match        https://www.spotify.com/se/account/subscription/receipt/*
// @grant        none
// ==/UserScript==
'use strict';

(function($) {
    setTimeout(function(){
        $('nav').remove();
        $('.sidebar').remove();
        $('.card--feedback').remove();
        $('.mh-mobile-menu').remove();
        $('a').removeAttr('href');
    }, 500);
})(jQuery);