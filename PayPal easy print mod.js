// ==UserScript==
// @name         PayPal easy print mod
// @namespace    http://mbz.nu/tampermonkey/paypal-easy-print
// @version      1.2
// @description  Will remove certain elements from paypal site for better printing
// @author       Matts Baaz
// @match        https://history.paypal.com/webscr?cmd=_history-details-from-hub&id=*
// @match        https://history.paypal.com/cgi-bin/webscr?cmd=_history-details-from-hub&id=*
// @updateURL    https://www.dropbox.com/s/1xt6kh64dsz86dg/PayPal%20easy%20print%20mod.user.js?dl=1
// @downloadURL  https://www.dropbox.com/s/1xt6kh64dsz86dg/PayPal%20easy%20print%20mod.user.js?dl=1
// @grant        none

// @require http://code.jquery.com/jquery-latest.js

// ==/UserScript==

(function() {
    'use strict';
    jQuery('#transGPPPToShip').remove();
    jQuery('input[type=submit]').remove();
})();