// ==UserScript==
// @name         BrickLink Order View
// @namespace    http://mbz.nu/tampermonkey/bricklink-order-view
// @version      1.4
// @description  This will rearrange the page to look like I want it to
// @author       Matts Baaz
// @match        http://www.bricklink.com/orderDetail.asp?ID=*&viewGB=N
// @match        https://www.bricklink.com/orderDetail.asp?ID=*&viewGB=N
// @updateURL    https://raw.githubusercontent.com/mbaaz/tampermonkey-scripts/main/BrickLink%20Order%20View.js
// @downloadURL  https://raw.githubusercontent.com/mbaaz/tampermonkey-scripts/main/BrickLink%20Order%20View.js
// @grant        none

// @require http://code.jquery.com/jquery-latest.js

// ==/UserScript==

(function() {
    'use strict';

    jQuery('font.fv:has(img)').remove();
    jQuery('a[name=orderMsg]').remove();
    jQuery('a:contains(Contact your buyer about this order)').parents('table')[0].remove();
    //jQuery('a:contains(Back to Orders)').parents('center')[0].remove();
    jQuery('img[alt="Print Batch"]').parent().remove();
    jQuery('font:contains(This order will be purged from the BrickLink website on)').parent('center').remove();

    var sortList = function(){
        var fixAndSortItems = function(items) {
            var getItemKey = function(item) {
                var key = jQuery('font:contains("Set No: ")', item).siblings('font:last').text();
                return key;
            };
            var itemSorter = function(itemX, itemY) {
                if(itemX.key < itemY.key) return -1;
                if(itemX.key > itemY.key) return 1;
                return 0;
            };
            var fixBackground = function(items) {
                var bgs = ['EEEEEE', 'FFFFFF'], lastKey = '', bgIndex = 0;
                for(var i=0;i<items.length;i++) {
                    var item = items[i];
                    jQuery(item.item).attr('bgcolor', bgs[lastKey===item.key ? bgIndex%bgs.length : ++bgIndex%bgs.length]);
                    lastKey = item.key;
                }
            };
            var itemList = [];
            for(var i=0;i<items.length;i++) {
                itemList.push({ item: items[i], key: getItemKey(items[i]) });
            }
            var sortedList = itemList.sort(itemSorter);
            fixBackground(sortedList);
            return sortedList.map(function(item){return item.item;});
        };

        var table = jQuery('table.mainPrintList');
        var rows = jQuery('tr', table).detach().toArray();
        var header = rows.shift();
        var footer = rows.pop();
        var newOrder = fixAndSortItems(rows);
        newOrder.unshift(header);
        newOrder.push(footer);
        table.append(newOrder);
    };

    sortList();
})();