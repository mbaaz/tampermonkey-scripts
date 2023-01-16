// ==UserScript==
// @name         SEB Kontera - Attachment magnifier
// @namespace    http://mbz.nu/tampermonkey/seb-kontera-attachment-magnifier
// @version      1.0
// @description  This will magnify the attachment image for the accounting details page of SEB Kontera
// @author       Matts Baaz
// @match        https://kapero.sebkontera.se/expense.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    (function($){
        setTimeout(function(){
            $('img#attachmentImg').css({
                "margin-top": "-200px",
                "border": "2px solid #000",
                "max-width": "1200px"
            });
        }, 500);
    })(jQuery);
})();