// ==UserScript==
// @name         SEB Kontera - Attachment magnifier
// @namespace    http://mbz.nu/tampermonkey/seb-kontera-attachment-magnifier
// @version      1.1
// @description  This will magnify the attachment image for the accounting details page of SEB Kontera
// @author       Matts Baaz
// @match        https://kapero.sebkontera.se/expense.php*
// @updateURL    https://raw.githubusercontent.com/mbaaz/tampermonkey-scripts/main/SEB%20Kontera%20-%20Attachment%20magnifier.js
// @downloadURL  https://raw.githubusercontent.com/mbaaz/tampermonkey-scripts/main/SEB%20Kontera%20-%20Attachment%20magnifier.js
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