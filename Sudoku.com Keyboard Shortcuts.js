// ==UserScript==
// @name         Sudoku.com Keyboard Shortcuts
// @namespace    http://mbz.nu/tampermonkey/sudoku-com-keyboard-shortcuts
// @version      1.0
// @description  This will add some (to me) necessary keyboard shortcuts
// @author       Matts Baaz
// @match        http://sudoku.com/*
// @match        https://sudoku.com/*
// @updateURL    https://raw.githubusercontent.com/mbaaz/tampermonkey-scripts/main/Sudoku.com%20Keyboard%20Shortcuts.js
// @downloadURL  https://raw.githubusercontent.com/mbaaz/tampermonkey-scripts/main/Sudoku.com%20Keyboard%20Shortcuts.js
// @grant        none
// ==/UserScript==
'use strict';

(function($) {
    function main() {
        const pencil = document.querySelector(".game-controls-pencil");
        window.addEventListener("keydown", (event) => {
          if ((event.code === "NumpadEnter" || event.code === "Enter")) {
            pencil.dispatchEvent(new Event("mousedown"));
          }
        });
      }
      main();
})(jQuery);