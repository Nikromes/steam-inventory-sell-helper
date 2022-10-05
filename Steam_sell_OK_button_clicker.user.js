// ==UserScript==
// @name         Steam OK button clicker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       Nikromes
// @match        https://steamcommunity.com/**/**/inventory/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('Steam OK button clicker - ready');
    const marketSellDialog = document.getElementById('market_sell_dialog');
    const buttonsBox = document.getElementById('market_sell_dialog_confirm_buttons');
    const okButton = document.getElementById('market_sell_dialog_ok');
    const throbber = document.getElementById('market_sell_dialog_throbber');
    setInterval(() => {
        if (marketSellDialog.style.display !== 'none' && buttonsBox.style.overflow === 'visible' && buttonsBox.style.display !== 'none' && throbber.style.display === 'none') {
            console.log('OK button visible, clicking...');
            okButton.click();
        }
    }, 300);
})();
