// ==UserScript==
// @name         Visma e-Accounting fixer
// @namespace    http://mbz.nu/tampermonkey/visma
// @version      1.1
// @description  Fixes small things that bugger me
// @author       Matts Baaz
// @match        https://eaccounting.vismaonline.com/*
// @updateURL    https://www.dropbox.com/s/aa0gyi7svz5ryc2/Visma%20e-Accounting%20fixer.user.js?dl=1
// @downloadURL  https://www.dropbox.com/s/aa0gyi7svz5ryc2/Visma%20e-Accounting%20fixer.user.js?dl=1
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