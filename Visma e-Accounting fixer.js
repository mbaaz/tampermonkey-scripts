// ==UserScript==
// @name         Visma e-Accounting fixer
// @namespace    http://mbz.nu/tampermonkey/visma
// @version      1.2
// @description  Fixes small things that bugger me
// @author       Matts Baaz
// @match        https://eaccounting.vismaonline.com/*
// @updateURL    https://raw.githubusercontent.com/mbaaz/tampermonkey-scripts/main/Visma%20e-Accounting%20fixer.js
// @downloadURL  https://raw.githubusercontent.com/mbaaz/tampermonkey-scripts/main/Visma%20e-Accounting%20fixer.js
// @grant        none

// ==/UserScript==

(function() {
    'use strict';

    var convertDateFields = function(){};

    var ready = function(){
        jQuery(document).on('DOMNodeInserted', convertDateFields);
        convertDateFields();
    };

    convertDateFields = function() {
        console.log('TamperMonkey converting date fields to text!');
        jQuery('input[type=date]').attr('type', 'text');
    };

    jQuery(document).ready(ready);
})();