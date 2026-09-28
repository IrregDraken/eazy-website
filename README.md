# Eazy Web

The browser client for the Eazy ecosystem. It mirrors the Eazy V2 product language for desktop, tablet and mobile while keeping financial actions inside the mobile app.

## Current experience

- Home / social feed
- Discover and search surface
- Chat surface
- Marketplace categories and featured listings
- Services
- Eazy Assist
- Profile and settings
- Responsive navigation
- App-only Wallet boundary

## Wallet boundary

Wallet is intentionally not exposed as a financial web experience. The web client presents an **Open in Eazy App** handoff instead of showing balances, transfers, bank details or other financial actions.

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

The web client is designed to connect to the existing Eazy backend in a later integration pass. UI surfaces do not pretend to be live financial or account data until the corresponding backend integration is connected.
