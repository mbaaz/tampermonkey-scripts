// ==UserScript==
// @name         BrickLink Inventory View
// @namespace    http://mbz.nu/tampermonkey/bricklink-inventory-view
// @version      1.2
// @description  Changes the behaviour of the inventory page
// @author       Matts Baaz
// @match        http://www.bricklink.com/inventory_detail.asp*
// @match        https://www.bricklink.com/inventory_detail.asp*
// @updateURL    https://raw.githubusercontent.com/mbaaz/tampermonkey-scripts/main/BrickLink%20Inventory%20View.js
// @downloadURL  https://raw.githubusercontent.com/mbaaz/tampermonkey-scripts/main/BrickLink%20Inventory%20View.js
// @grant        none

// @require http://code.jquery.com/jquery-latest.js

// ==/UserScript==

(function() {
    'use strict';

    var registerTabHandler = function(elements) {
        elements
            .on('keydown', function(e) {
                var keyCode = e.keyCode || e.which;
                if (keyCode == 9) {
                    e.preventDefault();
                    setActiveInput(elements[elements.index(e.currentTarget)+(e.shiftKey ? -1 : 1)]);
                }
            })
        ;
    };

    var setActiveInput = function(elem) {
        elem.focus();
        elem.select();
    };

    jQuery(document).ready(function(){
        var elements = jQuery('input[name^=newInvQty], input[name^=newInvPrice]');
        registerTabHandler(elements);
        setActiveInput(elements[0]);
    });

})();
