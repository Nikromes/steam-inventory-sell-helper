// ==UserScript==
// @name         Steam OK button clicker
// @namespace    http://tampermonkey.net/
// @version      1.1
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

    const retryButton = document.querySelector('.retry_load_btn');

    setInterval(() => {
        const isRetryVisible = typeof document.querySelector('#inventory_load_error_ctn > div:not([style])') === 'object';

        const inOkVisible =
            marketSellDialog.style.display !== 'none' &&
            buttonsBox.style.overflow === 'visible' &&
            buttonsBox.style.display !== 'none' &&
            throbber.style.display === 'none';

        if (inOkVisible) {
            console.log('OK button visible, clicking...');
            okButton.click();
        }

        if (isRetryVisible) {
            console.log('Retry button visible, clicking...');
            retryButton.click();
        }
    }, 300);
})();
