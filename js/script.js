/* ============================================
   CashRoute — js/script.js
   Author: gorupa (https://github.com/gorupa)
   License: MIT
   Description: Wallet selection and gateway
                redirect logic.
   ============================================ */

'use strict';

/**
 * Wallet data — replace each `url` with your
 * actual payment gateway URL before deploying.
 */
const wallets = {
    paytm: {
        name:      'Paytm',
        desc:      'Paytm Payments Bank',
        gateway:   'Paytm Gateway',
        url:       'https://paytm.com',
        logoClass: 'logo-paytm',
        logoHTML:  'PAY<br>TM',
    },
    phonepe: {
        name:      'PhonePe',
        desc:      'PhonePe Wallet',
        gateway:   'PhonePe Gateway',
        url:       'https://phonepe.com',
        logoClass: 'logo-phonepe',
        logoHTML:  'Ph<br>Pe',
    },
    amazon: {
        name:      'Amazon Pay',
        desc:      'Amazon Pay Wallet',
        gateway:   'Amazon Pay Gateway',
        url:       'https://pay.amazon.in',
        logoClass: 'logo-amazon',
        logoHTML:  'a<br>Pay',
    },
    mobikwik: {
        name:      'Mobikwik',
        desc:      'Mobikwik ZIP',
        gateway:   'Mobikwik Gateway',
        url:       'https://mobikwik.com',
        logoClass: 'logo-mobikwik',
        logoHTML:  'MBK',
    },
    jiomoney: {
        name:      'Jio Money',
        desc:      'Reliance Jio Wallet',
        gateway:   'Jio Money Gateway',
        url:       'https://jiomoney.com',
        logoClass: 'logo-jiomoney',
        logoHTML:  'JIO',
    },
};

let selectedWallet = null;

/**
 * Handle wallet selection.
 * Highlights the chosen row and populates the connect panel.
 * @param {HTMLElement} el - The clicked wallet-item element
 */
function selectWallet(el) {
    // Deselect all rows
    document.querySelectorAll('.wallet-item').forEach(i => i.classList.remove('selected'));

    // Select the clicked row
    el.classList.add('selected');
    selectedWallet = el.dataset.wallet;

    const w = wallets[selectedWallet];

    // Populate connect panel
    const logo    = document.getElementById('connectLogo');
    logo.className = 'connect-logo ' + w.logoClass;
    logo.innerHTML = w.logoHTML;

    document.getElementById('connectName').textContent     = w.name;
    document.getElementById('connectDesc').textContent     = w.desc;
    document.getElementById('connectGateway').textContent  = w.gateway;
    document.getElementById('connectBtnLabel').textContent = w.name;

    // Re-trigger animation by removing and re-adding .visible
    const panel = document.getElementById('connectPanel');
    panel.classList.remove('visible');
    void panel.offsetWidth; // force reflow to restart animation
    panel.classList.add('visible');

    document.getElementById('noSelection').style.display = 'none';

    // Scroll connect panel into view smoothly
    setTimeout(() => {
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

/**
 * Clear current selection and reset to default state.
 */
function clearSelection() {
    document.querySelectorAll('.wallet-item').forEach(i => i.classList.remove('selected'));
    selectedWallet = null;
    document.getElementById('connectPanel').classList.remove('visible');
    document.getElementById('noSelection').style.display = 'flex';
}

/**
 * Redirect user to the selected wallet's payment gateway.
 * Replace each wallet's `url` in the wallets object above
 * with your actual gateway URL before deploying.
 */
function goToGateway() {
    if (!selectedWallet) return;
    window.open(wallets[selectedWallet].url, '_blank', 'noopener');
}
