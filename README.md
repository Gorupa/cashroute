# CashRoute

[![Live Demo](https://img.shields.io/badge/Live%20Demo-CashRoute-1a73e8?style=for-the-badge&logo=cloudflare&logoColor=white)](https://cashroute-deh.pages.dev)
[![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-yellow?style=for-the-badge)](LICENSE)
[![Built by gorupa](https://img.shields.io/badge/Built%20by-gorupa-34a853?style=for-the-badge&logo=github)](https://github.com/gorupa)
[![No Data Stored](https://img.shields.io/badge/No%20Data-Stored-10b981?style=for-the-badge)](https://github.com/gorupa/cashroute)

> A clean, fast redirection interface for transferring money from digital wallets to your bank account. CashRoute does not process payments — it simply connects you to the right gateway.

---

## What is CashRoute?

CashRoute is **not** a payment processor or financial institution. It is a lightweight web interface that:

1. Lets you select your wallet (Paytm, PhonePe, Amazon Pay, Mobikwik, Jio Money)
2. Shows you what to expect before you proceed
3. Redirects you to the wallet's official payment gateway

All bank details, wallet credentials, and actual payment processing happen entirely on the gateway's secure page. CashRoute never sees or stores any of it.

---

## Supported Wallets

| Wallet | Provider |
|---|---|
| Paytm | Paytm Payments Bank |
| PhonePe | PhonePe Wallet |
| Amazon Pay | Amazon Pay Wallet |
| Mobikwik | Mobikwik ZIP |
| Jio Money | Reliance Jio Wallet |

---

## How It Works

```
User selects wallet
        ↓
CashRoute shows transfer info + gateway name
        ↓
User clicks "Continue"
        ↓
Redirected to wallet's official payment gateway
        ↓
Gateway collects bank details & processes transfer
        ↓
Bank account credited (usually 1–2 business days)
```

---

## Privacy & Security

- ✅ CashRoute never collects bank details
- ✅ CashRoute never stores wallet credentials
- ✅ CashRoute never sees transaction data
- ✅ No user accounts, no sign-up, no tracking
- ✅ All payment handling is done by the official gateway

---

## Connecting Your Gateway

To wire up real gateway URLs, open `js/script.js` and update the `url` field for each wallet:

```js
const wallets = {
    paytm: {
        url: 'https://your-actual-gateway.com/paytm/transfer',
        ...
    },
    phonepe: {
        url: 'https://your-actual-gateway.com/phonepe/transfer',
        ...
    },
    // and so on
};
```

Each wallet's gateway page is responsible for collecting the user's bank account details and completing the transfer.

---

## File Structure

```
cashroute/
├── index.html      # Main UI — single page
├── LICENSE
└── README.md
```

No build tools, no dependencies, no npm. Just a single HTML file.

---

## Run Locally

```bash
git clone https://github.com/gorupa/cashroute.git
cd cashroute
# Open index.html in your browser
```

Or serve with any static server:

```bash
npx serve .
```

---

## Legal Disclaimer

CashRoute is a redirection interface only. It is not a licensed payment processor, bank, or financial institution. Users are responsible for complying with the terms and conditions of the respective wallet providers. CashRoute assumes no liability for any transactions processed through third-party gateways.

---

## Other Tools by gorupa

| Tool | Description |
|---|---|
| [PDF Tools](https://pdf-tools-gorupa.pages.dev) | Compress, lock, unlock and merge PDFs locally |
| [Image Compressor](https://local-image-compressor.pages.dev) | Compress JPG and PNG images in your browser |
| [Image to PDF](https://image-to-pdf-afb.pages.dev) | Convert images to PDF locally |
| [MLSU Law Resources](https://mlsu-dhj.pages.dev) | Free notes and papers for MLSU LLB students |

---

## License

[Apache 2.0](LICENSE) © 2026 [gorupa](https://github.com/gorupa) / Gaurav Kalal
