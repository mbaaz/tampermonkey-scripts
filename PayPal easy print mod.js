// ==UserScript==
// @name         PayPal easy print mod
// @namespace    http://mbz.nu/tampermonkey/paypal-easy-print
// @version      1.3
// @description  Will remove certain elements from paypal site for better printing
// @author       Matts Baaz
// @match        https://history.paypal.com/webscr?cmd=_history-details-from-hub&id=*
// @match        https://history.paypal.com/cgi-bin/webscr?cmd=_history-details-from-hub&id=*
// @updateURL    https://raw.githubusercontent.com/mbaaz/tampermonkey-scripts/main/PayPal%20easy%20print%20mod.js
// @downloadURL  https://raw.githubusercontent.com/mbaaz/tampermonkey-scripts/main/PayPal%20easy%20print%20mod.js
// @grant        none

// @require http://code.jquery.com/jquery-latest.js

// ==/UserScript==

(function() {
    'use strict';
    jQuery('#transGPPPToShip').remove();
    jQuery('input[type=submit]').remove();
})();