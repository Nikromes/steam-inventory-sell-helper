// ==UserScript==
// @name         Steam OK button clicker
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  try to take over the world!
// @author       Nikromes
// @match        https://steamcommunity.com/**/**/inventory/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

const alreadySoldMessage = 'The item specified is no longer in your inventory or is not allowed to be traded on the Community Market.';
const pendingComformationMessage = 'You already have a listing for this item pending confirmation. Please confirm or cancel the existing listing.';

(function() {
    'use strict';
    console.log('Steam OK button clicker - ready');
    const marketSellDialog = document.getElementById('market_sell_dialog');
    const buttonsBox = document.getElementById('market_sell_dialog_confirm_buttons');
    const okButton = document.getElementById('market_sell_dialog_ok');
    const throbber = document.getElementById('market_sell_dialog_throbber');

    setInterval(() => {
        const messageElement = document.querySelector('#market_sell_dialog_error');
        const deleteFromQueueButton = document.querySelectorAll('.queue-item-container:not([style="display: none;"]) .queue-item-remove')?.[0];
        const acceptCheckbox = document.querySelector('#market_sell_dialog_accept_ssa');

        const isOkVisible =
            marketSellDialog.style.display !== 'none' &&
            buttonsBox.style.overflow === 'visible' &&
            buttonsBox.style.display !== 'none' &&
            throbber.style.display === 'none';

        if (acceptCheckbox != null && !acceptCheckbox.checked) {
            acceptCheckbox.checked = true;
        }

        if (isOkVisible) {
            if (messageElement.innerText !== alreadySoldMessage && messageElement.innerText !== pendingComformationMessage) {
                console.log('OK button visible, clicking...');
                okButton.click();

            } else if (deleteFromQueueButton != null) {
                console.log('Item already sold, removing from queue...');
                deleteFromQueueButton.click();
                okButton.click();
            }
        }
    }, 300);

    setInterval(() => {
        const retryButton = document.querySelector('.retry_load_btn');
        const isRetryVisible = document.querySelector('#inventory_load_error_ctn > div:not([style="display: none;"])') != null;

        if (isRetryVisible) {
            console.log('Retry button visible, clicking...');
            retryButton.click();
        }
    }, 2000);
})();
