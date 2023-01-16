// ==UserScript==
// @name         BrickLink Minifig Page Default Filter
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Reload the page with correct filter applied
// @author       Matts Baaz
// @match        http://www.bricklink.com/v2/catalog/catalogitem.page?S=col*
// @match        https://www.bricklink.com/v2/catalog/catalogitem.page?S=col*
// @updateURL    https://raw.githubusercontent.com/mbaaz/tampermonkey-scripts/main/BrickLink%20Minifig%20Page%20Default%20Filter.js
// @downloadURL  https://raw.githubusercontent.com/mbaaz/tampermonkey-scripts/main/BrickLink%20Minifig%20Page%20Default%20Filter.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if(window.location.hash === '#T=S&O={"ss":"SE"}')
    {
        if(history.pushState)
            history.pushState(null, null, '#T=S&O={"ss":"SE","cond":"N","nosuperlot":1,"ii":0,"ic":0}');
        else
            location.hash = '#T=S&O={"ss":"SE","cond":"N","nosuperlot":1,"ii":0,"ic":0}';
        window.location.reload();
    }
})();