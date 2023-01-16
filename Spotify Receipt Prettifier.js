// ==UserScript==
// @name         Spotify Receipt Prettifier
// @namespace    http://mbz.nu/tampermonkey/spotify-receipt-prettifier
// @version      1.2
// @description  This will remove some (to me) unnecessary markup that spoils the printing experience of the spotify receipts
// @author       Matts Baaz
// @match        https://www.spotify.com/se/account/subscription/receipt/*
// @updateURL    https://raw.githubusercontent.com/mbaaz/tampermonkey-scripts/main/Spotify%20Receipt%20Prettifier.js
// @downloadURL  https://raw.githubusercontent.com/mbaaz/tampermonkey-scripts/main/Spotify%20Receipt%20Prettifier.js
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